// Add your code here
function submitData(name, email) {
    const data = {
        name: name,
        email: email
    }
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(json => document.body.append(json.id))
    .catch(error => document.body.append(error.message))
}
