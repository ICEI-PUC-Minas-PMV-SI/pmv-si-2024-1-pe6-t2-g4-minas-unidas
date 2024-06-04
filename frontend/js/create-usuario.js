        // Função para enviar os dados do usuário para a API
        $("#btnCadastrar").click(function () {
            // Validar o formulário antes de enviar os dados
            if (validarFormulario()) {
                // Obter os valores dos campos do formulário
                var nome = $("#inputNome").val();
                var data_nascimento = $("#inputDataNascimento").val();
                var cidade = $("#inputCidade").val();
                var estado = $("#inputEstado").val();
                var email = $("#inputEmail").val();
                var senha = $("#inputSenha").val();
                var confirmaSenha = $("#inputConfirmaSenha").val();
                var perfil_id = 2;

                // Formatar a data de nascimento no formato AAAA-MM-DD
                data_nascimento = formatDate(data_nascimento);

                // Enviar os dados para a API via AJAX
                $.ajax({
                    url: 'http://localhost:3000/usuarios', // URL da API de cadastro de usuários
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        nome: nome,
                        data_nascimento: data_nascimento,
                        cidade: cidade,
                        estado: estado,
                        email: email,
                        senha: senha,
                        perfil_id: perfil_id
                    }),
                    success: function (response) {
                        // Exibir o modal de sucesso
                        $('#modal').modal('show');
                        // Limpar o formulário após o sucesso
                        $("#form-cadastraUsuario")[0].reset();
                    },
                    error: function (xhr, status, error) {
                        // Exibir mensagem de erro, se necessário
                        alert("Erro ao cadastrar usuário: " + xhr.responseText);
                        console.error("Erro ao cadastrar usuário:", xhr.responseText);
                    }
                });
            }
        });

        // Função para validar a data de nascimento
        function validarDataNascimento(data) {
            // Expressão regular para verificar o formato da data (DD/MM/AAAA)
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

        // Função para validar o e-mail
        function validarEmail(email) {
            // Expressão regular para verificar o formato do e-mail
            var regexEmail = /\S+@\S+\.\S+/;
            if (!regexEmail.test(email)) {
                alert("Por favor, insira um endereço de e-mail válido.");
                return false; // E-mail inválido
            }
            return true;
        }

        // Função para formatar a data no formato AAAA-MM-DD
        function formatDate(date) {
            var partes = date.split('/');
            return partes[2] + '-' + partes[1] + '-' + partes[0];
        }

        // Função para validar o formulário
        function validarFormulario() {
            var nome = $("#inputNome").val();
            var data_nascimento = $("#inputDataNascimento").val();
            var email = $("#inputEmail").val();
            var confirmaEmail = $("#inputConfirmaEmail").val();
            var senha = $("#inputSenha").val();
            var confirmaSenha = $("#inputConfirmaSenha").val();
            var perfil_id = 2;

            // Validar campos obrigatórios
            if (nome.trim() === '' || data_nascimento.trim() === '' || email.trim() === '' || confirmaEmail.trim() === '' ||
                senha.trim() === '' || confirmaSenha.trim() === '') {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return false;
            }

            // Validar data de nascimento
            if (!validarDataNascimento(data_nascimento)) {
                return false;
            }

            // Validar e-mail e confirmação de e-mail
            if (!validarEmail(email)) {
                return false;
            }
            if (email !== confirmaEmail) {
                alert("Os endereços de e-mail informados não coincidem.");
                return false;
            }

            // Validar senha e confirmação de senha
            if (senha !== confirmaSenha) {
                alert("As senhas informadas não coincidem.");
                return false;
            }

            return true; // Formulário válido
        }

        // Função para formatar a data enquanto o usuário digita
        function formatarData(input) {
            var valor = input.value;
            if (valor.length === 2 || valor.length === 5) {
                input.value += '/';
            }
        }