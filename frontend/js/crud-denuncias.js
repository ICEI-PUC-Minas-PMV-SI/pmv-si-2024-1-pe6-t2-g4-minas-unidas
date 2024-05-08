        // Função para enviar denúncia para a API
        $("#btnInsert").click(function () {
            var tipoViolenciaId = $("#selectTipoViolencia").val();
            var descricao = $("#inputDenuncia").val();

            // Verificar se o tipoViolenciaId é um número válido
            if (tipoViolenciaId && !isNaN(tipoViolenciaId)) {
                // Enviar a solicitação apenas se o tipoViolenciaId for válido
                $.ajax({
                    url: 'http://localhost:3000/denuncias', // URL da sua API de denúncias
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({ tipoViolenciaId: tipoViolenciaId, descricao: descricao }),
                    success: function (response) {
                        $('#modal').modal('show');
                        $("#form-denuncie")[0].reset();
                    },
                    error: function (xhr, status, error) {
                        console.error(xhr.responseText);
                    }
                });
            } else {
                // Se o tipoViolenciaId não for válido, exiba uma mensagem de erro
                console.error("Tipo de violência inválido.");
            }
        });

        // Função para limpar o formulário de denúncia
        $("#btnClear").click(function () {
            $("#form-denuncie")[0].reset();
        });

// Fazendo uma solicitação GET para obter os denúncias da API
fetch("http://localhost:3000/denuncias")
    .then(response => response.json())
    .then(data => {
        const tableCadastroDenuncia = document.getElementById("table-cadastroDenuncia");
        data.forEach(denuncia => {
            const rowId = `user-${denuncia.id}`;
            const newRow = `
                <tr id="${rowId}">
                    <td>${denuncia.nome}</td>
                    <td>${getFormattedDate(denuncia.data_nascimento)}</td>
                    <td>${denuncia.cidade}</td>
                    <td>${denuncia.estado}</td>
                    <td>${denuncia.email}</td>
                    <td>${denuncia.telefone}</td>
                    <td>${getProfileType(denuncia.tipoViolenciaId)}</td>
                    <td>${denuncia.descricao}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="fillEditForm(${denuncia.id})" data-toggle="modal" data-target="#modalEditar">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="confirmDelete(${denuncia.id})">Excluir</button>
                    </td>
                </tr>`;
            tableCadastroDenuncia.insertAdjacentHTML('beforeend', newRow);
        });
    })
    .catch(error => console.error("Erro ao buscar denúncias:", error));