async function myFunction() {
    console.log("**********************************")
    let ord = document.getElementById("orderid").value
    let pro = document.getElementById("productid").value
    let ordcost = document.getElementById("ordercost").value

    // let response = await fetch("http://localhost:3000/dual", {
    //     method:"POST",
    //     headers:{
    //         "Content-Type": "application/json"

    //     },
    //     body:JSON.stringify({
    //         "ord": ord,
    //         "pro": pro,
    //         "ordcost": ordcost
    //     })
    // })
    // console.log(response)
    document.getElementById("key-minh").value = "response"
}