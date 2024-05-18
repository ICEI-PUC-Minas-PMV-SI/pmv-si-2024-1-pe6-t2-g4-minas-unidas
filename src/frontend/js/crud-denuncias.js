// Função para mapear o tipo de violência para o nome correspondente
function gettipoviolencia_id(tipoviolencia_id) {
    switch (tipoviolencia_id) {
        case 1:
            return "Física";
        case 2:
            return "Psicológica";
        case 3:
            return "Sexual";
        case 4:
            return "Patrimonial";
        case 5:
            return "Moral";
        default:
            return "Não informado";
    }
}

// Função para formatar a data enquanto o usuário digita
function formatarData(input) {
    var valor = input.value;
    if (valor.length === 2 || valor.length === 5) {
        input.value += '/';
    }
}

// Função para formatar a data no formato AAAA-MM-DD
function formatDate(date) {
    const partes = date.split('/');
    if (partes.length === 3) {
        return `${partes[2]}-${partes[1]}-${partes[0]}`;
    }
    return null;
}

// Função para formatar a data de nascimento
function getFormattedDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("pt-BR");
}

// Função para validar a data de nascimento
function validarDataNascimento(data) {
    // Se a data não estiver preenchida, retorna verdadeiro (não precisa validar)
    if (!data) {
        return true;
    }

    var regexData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexData.test(data)) {
        alert("Por favor, insira uma data de nascimento válida no formato DD/MM/AAAA.");
        return false; // Formato incorreto
    }
    // Verificar se a data é válida
    var partesData = data.split('/');
    var dia = parseInt(partesData[0], 10);
    var mes = parseInt(partesData[1], 10) - 1; // Mês começa em 0
    var ano = parseInt(partesData[2], 10);
    var dataObj = new Date(ano, mes, dia);
    if (dataObj.getFullYear() !== ano || dataObj.getMonth() !== mes || dataObj.getDate() !== dia) {
        alert("Por favor, insira uma data de nascimento válida.");
        return false; // Data inválida
    }
    return true;
}

// Função para enviar os dados da denúncia para a API
$("#btnCadastrar").click(function () {
    // Validar o formulário antes de enviar os dados
    if (validarFormulario()) {
        // Obter os valores dos campos do formulário
        var nome = $("#inputNome").val();
        var data_nascimento = $("#inputDataNascimento").val();
        var cidade = $("#inputCidade").val();
        var estado = $("#inputEstado").val();
        var email = $("#inputEmail").val();
        var telefone = $("#inputTelefone").val();
        var tipoviolencia_id = $("#selectTipoViolencia").val();
        var descricao = $("#inputDenuncia").val();

        // Formatar a data de nascimento no formato AAAA-MM-DD, se estiver preenchida e for válida
        if (data_nascimento && validarDataNascimento(data_nascimento)) {
            data_nascimento = formatDate(data_nascimento);
        } else {
            // Se não estiver preenchido, deixar como vazio
            data_nascimento = null;
        }

        // Enviar os dados para a API via AJAX
        $.ajax({
            url: 'http://localhost:3000/denuncias', // URL da API de cadastro de denúncia
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                nome: nome,
                data_nascimento: data_nascimento,
                cidade: cidade,
                estado: estado,
                email: email,
                telefone: telefone,
                tipoviolencia_id: tipoviolencia_id,
                descricao: descricao
            }),
            success: function (response) {
                // Exibir o modal de sucesso
                $('#modal').modal('show');
                // Limpar o formulário após o sucesso
                $("#form-denuncie")[0].reset();
                // Recarregar as denúncias após o cadastro
                carregarDenuncias();
            },
            error: function (xhr, status, error) {
                // Exibir mensagem de erro, se necessário
                console.error(xhr.responseText);
            }
        });
    }
});

// Função para validar o e-mail
function validarEmail(email) {
    // Se o e-mail não estiver preenchido, retorna verdadeiro (não precisa validar)
    if (!email) {
        return true;
    }

    // Expressão regular para verificar o formato do e-mail
    var regexEmail = /\S+@\S+\.\S+/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }
    return true;
}

// Função para validar o formulário
function validarFormulario() {
    var descricao = $("#inputDenuncia").val();

    // Validar campo obrigatório: descrição da denúncia
    if (descricao.trim() === '') {
        alert("Por favor, preencha a descrição da denúncia.");
        return false;
    }

    // Validar outros campos se estiverem preenchidos
    var data_nascimento = $("#inputDataNascimento").val();
    if (!validarDataNascimento(data_nascimento)) {
        return false;
    }

    var email = $("#inputEmail").val();
    if (!validarEmail(email)) {
        return false;
    }

    return true; // Formulário válido
}

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
                    '<td>' + denuncia.nome + '</td>';
                
                // Adiciona a data de nascimento apenas se estiver preenchida
                if (denuncia.data_nascimento) {
                    row += '<td>' + getFormattedDate(denuncia.data_nascimento) + '</td>';
                } else {
                    row += '<td></td>'; // Se não estiver preenchida, mostra uma célula vazia
                }

                row += '<td>' + denuncia.cidade + '</td>' +
                    '<td>' + denuncia.estado + '</td>' +
                    '<td>' + denuncia.email + '</td>' +
                    '<td>' + denuncia.telefone + '</td>' +
                    '<td>' + gettipoviolencia_id(denuncia.tipoviolencia_id) + '</td>' +
                    '<td>' + denuncia.descricao + '</td>' +
                    '<td>' +
                    '<button class="btn btn-primary btn-sm" onclick="fillEditForm(' + denuncia.id + ')" data-toggle="modal" data-target="#modalEditar">Editar</button>' +
                    '&nbsp;' +
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

// Função para preencher o formulário de edição com os dados da denúncia
window.fillEditForm = function (denunciaId) {
    $.ajax({
        url: `http://localhost:3000/denuncias/${denunciaId}`,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            document.getElementById("inputNomeEditar").value = data.nome;
            
            // Adiciona a data de nascimento apenas se estiver preenchida
            if (data.data_nascimento) {
                document.getElementById("inputDataNascimentoEditar").value = getFormattedDate(data.data_nascimento);
            } else {
                document.getElementById("inputDataNascimentoEditar").value = ''; // Limpa o campo se não estiver preenchida
            }
            
            document.getElementById("inputCidadeEditar").value = data.cidade;
            document.getElementById("inputEstadoEditar").value = data.estado;
            document.getElementById("inputEmailEditar").value = data.email;
            document.getElementById("inputTelefoneEditar").value = data.telefone;
            document.getElementById("selectTipoEditar").value = data.tipoviolencia_id;
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
window.updateDenunciaData = function () {
    // Obtém o ID da denúncia a partir do escopo global
    var denunciaId = window.denunciaId;

    // Obtém os dados atualizados do formulário de edição
    var nome = $("#inputNomeEditar").val();
    var cidade = $("#inputCidadeEditar").val();
    var estado = $("#inputEstadoEditar").val();
    var email = $("#inputEmailEditar").val();
    var telefone = $("#inputTelefoneEditar").val();
    var tipoviolencia_id = $("#selectTipoEditar").val();
    var descricao = $("#inputDenunciaEditar").val();

    // Obtém a data de nascimento apenas se estiver preenchida
    var data_nascimento = $("#inputDataNascimentoEditar").val();
    if (data_nascimento) {
        data_nascimento = formatDate(data_nascimento);
    }

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
            tipoviolencia_id: tipoviolencia_id,
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

// Função para excluir uma denúncia
function deleteDenuncia(denunciaId) {
    // Envia uma solicitação DELETE para excluir a denúncia com o ID fornecido
    $.ajax({
        url: `http://localhost:3000/denuncias/${denunciaId}`,
        type: 'DELETE',
        success: function (response) {
            // Excluiu com sucesso, recarrega as denúncias no painel
            carregarDenuncias();
        },
        error: function (xhr, status, error) {
            console.error("Erro ao excluir denúncia:", error);
            alert("Erro ao excluir a denúncia. Por favor, tente novamente mais tarde.");
        }
    });
}

// Função para confirmar a exclusão de uma denúncia
window.confirmDelete = function (denunciaId) {
    if (confirm("Tem certeza de que deseja excluir esta denúncia?")) {
        // Chama a função de exclusão aqui
        deleteDenuncia(denunciaId);
    }
}

// Chama a função para carregar as denúncias quando a página é carregada
carregarDenuncias();
