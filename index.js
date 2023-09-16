const submitData = (name,email) =>{
    return fetch("http://localhost:3000/users",
    {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept" : "application/json"
            
        },
        body: JSON.stringify({
            "name":name,
            "email":email
        })
    })
    .then(resp => resp.json())
    .then(body => {
        document.querySelector("#response").textContent = body['id']
    }).catch(err=>{document.querySelector("#response").textContent = err})
}
