// Função para formatar a data enquanto o usuário digita
function formatarData(input) {
    let valor = input.value;
    if (valor.length === 2 || valor.length === 5) {
        input.value += '/';
    }
}

$(document).ready(function () {
    // Adiciona evento de entrada ao campo de data de nascimento
    $("#inputDataNascimento").on('input', function() {
        formatarData(this);
    });

    // Função para enviar da enúncia para a API
    $("#btnInsert").click(function () {
        // Valida o formulário antes de enviar os dados
        if (validarFormulario()) {
            // Obtém os valores dos campos do formulário
            var nome = $("#inputNome").val();
            var data_nascimento = $("#inputDataNascimento").val();
            var cidade = $("#inputCidade").val();
            var estado = $("#inputEstado").val();
            var email = $("#inputEmail").val();
            var telefone = $("#inputTelefone").val();
            var tipoViolenciaId = $("#selectTipoViolencia").val();
            var descricao = $("#inputDenuncia").val();

            // Formata a data de nascimento no formato AAAA-MM-DD
            data_nascimento = formatDate(data_nascimento);

            // Envia os dados para a API via AJAX
            $.ajax({
                url: 'http://localhost:3000/denuncias', // URL da API de denúncias
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    nome: nome,
                    data_nascimento: data_nascimento,
                    cidade: cidade,
                    estado: estado,
                    email: email,
                    telefone: telefone,
                    tipoViolenciaId: tipoViolenciaId,
                    descricao: descricao
                }),
                success: function (response) {
                    // Mostra o modal de sucesso
                    $('#modal').modal('show');
                    // Reseta o formulário após o sucesso
                    $("#form-denuncie")[0].reset();
                    // Recarrega as denúncias no painel
                    carregarDenuncias();
                },
                error: function (xhr, status, error) {
                    // Mostra mensagem de erro ao usuário
                    alert("Ocorreu um erro ao enviar a denúncia. Tente novamente mais tarde.");
                    console.error(xhr.responseText);
                }
            });
        }
    });

    // Função para limpar o formulário de denúncia
    $("#btnClear").click(function () {
        $("#form-denuncie")[0].reset();
    });

    // Função para carregar as denúncias no painel
    function carregarDenuncias() {
        // Faz uma solicitação GET para obter as denúncias da API
        $.ajax({
            url: 'http://localhost:3000/denuncias', // URL da API de denúncias
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                // Limpa a tabela antes de preenchê-la novamente
                $("#table-cadastroDenuncia").empty();

                // Itera sobre os dados das denúncias e preenche a tabela
                response.forEach(function (denuncia) {
                    var row = '<tr>' +
                        '<td>' + denuncia.nome + '</td>' +
                        '<td>' + denuncia.data_nascimento + '</td>' +
                        '<td>' + denuncia.cidade + '</td>' +
                        '<td>' + denuncia.estado + '</td>' +
                        '<td>' + denuncia.email + '</td>' +
                        '<td>' + denuncia.telefone + '</td>' +
                        '<td>' + denuncia.tipoViolenciaId + '</td>' +
                        '<td>' + denuncia.descricao + '</td>' +
                        '<td>' +
                        '<button class="btn btn-primary btn-sm" onclick="fillEditForm(' + denuncia.id + ')" data-toggle="modal" data-target="#modalEditar">Editar</button>' +
                        '<button class="btn btn-danger btn-sm" onclick="confirmDelete(' + denuncia.id + ')">Excluir</button>' +
                        '</td>' +
                        '</tr>';

                    // Adiciona a linha à tabela
                    $("#table-cadastroDenuncia").append(row);
                });
            },
            error: function (xhr, status, error) {
                // Mostra mensagem de erro, se necessário
                console.error(xhr.responseText);
            }
        });
    }

    // Função para validar o formulário
    function validarFormulario() {
        var descricao = $("#inputDenuncia").val();
        var email = $("#inputEmail").val(); // Obtém o valor do campo de email

        // Valida campos obrigatórios
        if (descricao.trim() === '') {
            alert("Por favor, preencha a descrição da denúncia.");
            return false;
        }

        // Valida email, se preenchido
        if (email.trim() !== '') {
            if (!validarEmail(email)) {
                return false;
            }
        }

        return true; // Formulário é válido
    }

    // Função para validar email
    function validarEmail(email) {
        // Expressão regular para verificar o formato do email
        var regexEmail = /\S+@\S+\.\S+/;
        if (!regexEmail.test(email)) {
            alert("Por favor, insira um endereço de email válido.");
            return false; // Email inválido
        }
        return true;
    }

    // Função para formatar a data no formato AAAA-MM-DD
    function formatDate(date) {
        var partes = date.split('/');
        return partes[2] + '-' + partes[1] + '-' + partes[0];
    }

    // Função para preencher o formulário de edição com os dados da denúncia
    window.fillEditForm = function (denunciaId) {
        $.ajax({
            url: `http://localhost:3000/denuncias/${denunciaId}`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                document.getElementById("inputNomeEditar").value = data.nome;
                document.getElementById("inputDataNascimentoEditar").value = data.data_nascimento;
                document.getElementById("inputCidadeEditar").value = data.cidade;
                document.getElementById("inputEstadoEditar").value = data.estado;
                document.getElementById("inputEmailEditar").value = data.email;
                document.getElementById("inputTelefoneEditar").value = data.telefone;
                document.getElementById("selectTipoEditar").value = data.tipoViolenciaId;
                document.getElementById("inputDenunciaEditar").value = data.descricao;
                // Define o ID da denúncia para uso posterior na atualização
                window.denunciaId = denunciaId;
            },
            error: function (xhr, status, error) {
                console.error("Erro ao buscar denúncia para edição:", error);
            }
        });
    }

    // Função para atualizar os dados da denúncia na API
    window.updateDenunciaData = function (denunciaId) {
        console.log("Função window.updateDenunciaData acionada com denunciaId:", denunciaId);
        // Obtém os dados atualizados do formulário de edição
        var nome = $("#inputNomeEditar").val();
        var data_nascimento = $("#inputDataNascimentoEditar").val();
        var cidade = $("#inputCidadeEditar").val();
        var estado = $("#inputEstadoEditar").val();
        var email = $("#inputEmailEditar").val();
        var telefone = $("#inputTelefoneEditar").val();
        var tipoViolenciaId = $("#selectTipoEditar").val();
        var descricao = $("#inputDenunciaEditar").val();

        // Formata a data de nascimento no formato AAAA-MM-DD
        data_nascimento = formatDate(data_nascimento);

        // Envia os dados atualizados para a API via AJAX
        $.ajax({
            url: `http://localhost:3000/denuncias/${denunciaId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({
                nome: nome,
                data_nascimento: data_nascimento,
                cidade: cidade,
                estado: estado,
                email: email,
                telefone: telefone,
                tipoViolenciaId: tipoViolenciaId,
                descricao: descricao
            }),
            success: function (response) {
                // Mostra o modal de sucesso
                $('#modalEditar').modal('hide');
                $('#modalSucesso').modal('show');
                // Recarrega as denúncias no painel após a atualização
                carregarDenuncias();
            },
            error: function (xhr, status, error) {
                // Mostra mensagem de erro, se necessário
                console.error(xhr.responseText);
            }
        });
    }

    // Função para deletar uma denúncia
    function deleteDenuncia(denunciaId) {
        // Envia uma solicitação para excluir a denúncia com o ID fornecido
        $.ajax({
            url: `http://localhost:3000/denuncias/${denunciaId}`, // URL da API de exclusão de denúncia
            type: 'DELETE',
            success: function (response) {
                // Denúncia excluída com sucesso, recarrega as denúncias no painel
                carregarDenuncias();
            },
            error: function (xhr, status, error) {
                // Mostra mensagem de erro, se necessário
                console.error(xhr.responseText);
            }
        });
    }

    // Função para confirmar a exclusão de uma denúncia
    function confirmDelete(denunciaId) {
        if (confirm("Tem certeza de que deseja excluir esta denúncia?")) {
            // Chama a função de exclusão aqui
            deleteDenuncia(denunciaId);
        }
    }

    // Chama a função para carregar as denúncias quando a página é carregada
    carregarDenuncias();
});
