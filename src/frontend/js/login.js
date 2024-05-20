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
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao autenticar');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Verifica se o token está presente na resposta
            if (data.token) {
                window.location.href = 'http://localhost:3000/dashboard-usuarios.html';
            } else {
                console.error('Token não encontrado na resposta');
                showErrorModal("Token não encontrado na resposta");
            }
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
            showErrorModal("Erro ao fazer login. Por favor, tente novamente.");
        });
});

function showErrorModal(message) {
    var errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.innerText = message;
    var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
}