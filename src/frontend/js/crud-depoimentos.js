document.addEventListener("DOMContentLoaded", function () {
    // Função para enviar depoimento para a API
    document.getElementById("btnInsert").onclick = function () {
        var descricao = document.getElementById("inputTexto").value;

        if (descricao.trim() === '') {
            alert('Por favor, insira o texto do depoimento.');
            return;
        }

        var depoimento = {
            descricao: descricao
        };

        // Envio do depoimento para a API via AJAX
        fetch('http://localhost:3000/depoimentos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(depoimento),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao adicionar depoimento.');
                }
                $('#modal').modal('show');
                document.getElementById("form-depoimentos").reset();
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao adicionar depoimento. Por favor, tente novamente.');
            });
    };

    // Função para limpar o formulário de depoimento
    document.getElementById("btnClear").onclick = function () {
        document.getElementById("form-depoimentos").reset();
    };
});