async function SHA_Order() {
    let proid = document.getElementById("proid").value
    let info = document.getElementById("info").value
    let cost = document.getElementById("cost").value

    let response = await fetch("http://localhost:3000/sha_order", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "productid": proid,
            "info": info,
            "cost": cost
        })
    })
    console.log(response)
    let data = await response.text()
    console.log(data)
    document.getElementById("oimd").value = data
}

async function SHA_Payment() {
    let name = document.getElementById("name").value
    let cmnd = document.getElementById("cmnd").value
    let card = document.getElementById("card").value

    let response = await fetch("http://localhost:3000/sha_payment", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": name,
            "cmnd": cmnd,
            "card": card
        })
    })
    console.log(response)
    let data = await response.text()
    console.log(data)
    document.getElementById("pimd").value = data
}

async function Join() {
    let oimd = document.getElementById("oimd").value
    let pimd = document.getElementById("pimd").value

    let join_result = oimd + pimd

    console.log(join_result)
    document.getElementById("join_result").value = join_result
}

async function SHA_Join() {
    let join_result = document.getElementById("join_result").value

    let response = await fetch("http://localhost:3000/sha_join", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "join_result": join_result
        })
    })
    let data = await response.text()
    console.log(data)
    document.getElementById("pomd").value = data
}

async function createKeys() {
    let key_len = document.getElementById("key_len").value
    console.log(key_len)

    let response = await fetch("http://localhost:3000/create_keys", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "key_len": key_len
        })
    })
    let data = await response.json()
    console.log(data)
    public_key = 'n: ' + data.n + '\n' + 'e: ' + data.e
    private_key = 'd: ' + data.d
    document.getElementById("public_key").value = public_key
    document.getElementById("private_key").value = private_key
}

async function RSA() {
    let pub_key = document.getElementById("public_key").value
    let pri_key = document.getElementById("private_key").value
    let pomd = document.getElementById("pomd").value

    let i = pub_key.indexOf('\n')
    let n = pub_key.substr(3, i - 3)
    let e = pub_key.substr(i + 4,)
    console.log(n)
    console.log(e)
    console.log(pomd)

    let response = await fetch("http://localhost:3000/rsa", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "n": n,
            "e": e,
            "pomd": pomd
        })
    })
    let data = await response.text()
    console.log(data)
    document.getElementById("dual_signature").value = data
}