// Script para interação com o servidor
document.getElementById("loginButton").addEventListener("click", function () {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    fetch('http://localhost:3000/authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = 'http://localhost:3000/dashboard-usuarios.html';
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
        });
});