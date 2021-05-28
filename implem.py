from flask import Flask,redirect,url_for,request
from flask_cors import CORS
from hashlib import sha1
import rsa

app=Flask(__name__)
CORS(app)

@app.route('/sha_order', methods=['POST'])
def sha_order():
    data = request.get_json()

    proid = data['productid']
    info = data['info']
    cost = data['cost']
    OI = str(proid) + str(info) + str(cost)
    OIMD = sha1(OI.encode('utf-8')).hexdigest()
    return OIMD

@app.route('/sha_payment', methods=['POST'])
def sha_payment():
    data = request.get_json()

    name = data['name']
    cmnd = data['cmnd']
    card = data['card']
    PI = name + cmnd + card
    PIMD = sha1(PI.encode('utf-8')).hexdigest()
    return PIMD

@app.route('/sha_join', methods=['POST'])
def sha_join():
    data = request.get_json()
    join_result = data['join_result']

    POMD = sha1(join_result.encode('utf-8')).hexdigest()
    return POMD

@app.route('/create_keys', methods=['POST'])
def create_keys():
    data = request.get_json()
    key_len = int(data['key_len'])
    (pub_key, pri_key) = rsa.newkeys(key_len)
    
    res = {'n': str(pri_key['n']), 'e': str(pri_key['e']), 'd': str(pri_key['d']), 'p': str(pri_key['p']), 'q': str(pri_key['q'])}
    return res

@app.route('/rsa', methods=['POST'])
def myRSA():
    data = request.get_json()
    n = int(data['n'])
    e = int(data['e'])
    pomd = data['pomd']
    pub_key = rsa.PublicKey(n, e)
    message = pomd.encode('utf8')
    res = rsa.encrypt(message, pub_key)
    print(res)
    return res

if __name__=='__main__':
    app.run(host='localhost', port=3000)