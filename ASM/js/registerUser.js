document
.getElementById('form-register')
.addEventListener("submit", function(event){
    event.preventDefault();
    const firtName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        firtName: firtName,
        lastName: lastName,
        email: email,
        password: password
    };

    fetch ("http://localhost:3000/users",{
        method: 'post',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
    })
    .then((response => response.json()))
    .then((data) =>{
        document.getElementById('responseMessage').textContent = "User registered successfully!";
        document.getElementById('form-register').reset();
    })
    .catch((error) => {
        document.getElementById('errorMessage').textContent = "Error registering user!";
        console.error("Error: ",error);
        
    })
})