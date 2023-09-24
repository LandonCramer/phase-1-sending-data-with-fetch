// Add your code here
const body = document.querySelector('body')

const submitData = (name, email) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response.json())

    .then(function (object) {
 
    const value = document.createElement('p')
    
    value.textContent = object.id
    body.append(value)
    })
    .catch(function(error) {
        alert("bad things")
        body.append(error)
        console.log(error.message)
    })
};
