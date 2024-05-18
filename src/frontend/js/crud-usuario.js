// Função para mapear o tipo de perfil para o nome correspondente
function getProfileType(profileId) {
    switch (profileId) {
        case 1:
            return "Administrador";
        case 2:
            return "Usuário";
        default:
            return "Tipo de perfil desconhecido";
    }
}

// Função para formatar a data no formato AAAA-MM-DD
function formatDate(date) {
    const partes = date.split('/');
    return `${partes[2]}-${partes[1]}-${partes[0]}`;
}

// Função para formatar a data de nascimento
function getFormattedDate(dateString) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("pt-BR");
}

// Fazendo uma solicitação GET para obter os usuários da API
fetch("http://localhost:3000/usuarios")
    .then(response => response.json())
    .then(data => {
        const tableCadastroUsuario = document.getElementById("table-cadastroUsuario");
        data.forEach(usuario => {
            const rowId = `user-${usuario.id}`;
            const newRow = `
                <tr id="${rowId}">
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                    <td>${getFormattedDate(usuario.data_nascimento)}</td>
                    <td>${usuario.cidade}</td>
                    <td>${usuario.estado}</td>
                    <td>${getProfileType(usuario.perfil_id)}</td>
                    <td>
                        <button class="btn btn-primary btn-sm" onclick="fillEditForm(${usuario.id})" data-toggle="modal" data-target="#modalEditar">Editar</button>
                        <button class="btn btn-danger btn-sm" onclick="confirmDelete(${usuario.id})">Excluir</button>
                    </td>
                </tr>`;
            tableCadastroUsuario.insertAdjacentHTML('beforeend', newRow);
        });
    })
    .catch(error => console.error("Erro ao buscar usuários:", error));

// Função para confirmar a exclusão
function confirmDelete(userId) {
    console.log("Tentativa de exclusão do usuário com ID:", userId);
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
        fetch(`http://localhost:3000/usuarios/${userId}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok) {
                const userRow = document.getElementById(`user-${userId}`);
                if (userRow) {
                    userRow.remove();
                    alert("Usuário excluído com sucesso!");
                } else {
                    console.error("Erro: Elemento não encontrado");
                    alert("Erro ao excluir usuário. Elemento não encontrado.");
                }
            } else {
                throw new Error("Erro ao excluir usuário");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao excluir usuário. Por favor, tente novamente mais tarde.");
        });
    }
}

// Função para preencher o formulário de edição com os dados do usuário
function fillEditForm(userId) {
    fetch(`http://localhost:3000/usuarios/${userId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("inputNomeEditar").value = data.nome;
            document.getElementById("inputDataNascimentoEditar").value = getFormattedDate(data.data_nascimento);
            document.getElementById("inputCidadeEditar").value = data.cidade;
            document.getElementById("inputEstadoEditar").value = data.estado;
            document.getElementById("inputEmailEditar").value = data.email;
            document.getElementById("selectPerfilEditar").value = data.perfil_id;
            // Definindo o ID do usuário para posterior uso na atualização
            window.userId = userId;
        })
        .catch(error => console.error("Erro ao buscar usuário para edição:", error));
}

// Função para atualizar os dados do usuário
function updateUserData(userId) {
    // Obter os valores dos campos do formulário de edição
    const nome = $("#inputNomeEditar").val();
    let data_nascimento = $("#inputDataNascimentoEditar").val();
    const cidade = $("#inputCidadeEditar").val();
    const estado = $("#inputEstadoEditar").val();
    const email = $("#inputEmailEditar").val();
    const senha = $("#inputSenhaEditar").val();
    const perfil_id = $("#selectPerfilEditar").val();

    // Formatar a data de nascimento no formato AAAA-MM-DD
    data_nascimento = formatDate(data_nascimento);

    // Enviar os dados atualizados para a API via AJAX
    $.ajax({
        url: `http://localhost:3000/usuarios/${userId}`, 
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify({
            nome,
            data_nascimento,
            cidade,
            estado,
            email,
            senha,
            perfil_id
        }),
        success: response => {
            alert("Usuário atualizado com sucesso!");
            $('#modalEditar').modal('hide');
            // Atualizar os dados na tabela
            fetch(`http://localhost:3000/usuarios/${userId}`)
                .then(response => response.json())
                .then(data => {
                    const userRow = document.getElementById(`user-${userId}`);
                    userRow.innerHTML = `
                        <td>${data.nome}</td>
                        <td>${data.email}</td>
                        <td>${getFormattedDate(data.data_nascimento)}</td>
                        <td>${data.cidade}</td>
                        <td>${data.estado}</td>
                        <td>${getProfileType(data.perfil_id)}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" onclick="fillEditForm(${data.id})" data-toggle="modal" data-target="#modalEditar">Editar</button>
                            <button class="btn btn-danger btn-sm" onclick="confirmDelete(${data.id})">Excluir</button>
                        </td>
                    `;
                })
                .catch(error => console.error("Erro ao buscar usuário atualizado:", error));
        },
        error: (xhr, status, error) => {
            console.error(xhr.responseText);
            alert("Erro ao atualizar usuário. Por favor, tente novamente mais tarde.");
        }
    });
}

// Função para formatar a data enquanto o usuário digita
function formatarData(input) {
    let valor = input.value;
    if (valor.length === 2 || valor.length === 5) {
        input.value += '/';
    }
}
