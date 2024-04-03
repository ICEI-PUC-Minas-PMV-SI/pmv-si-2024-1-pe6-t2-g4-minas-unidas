var db_inicial  = {
    data: [
        
    ]
}

// caso os dados já estejam no local storage. caso contrário, carrega os dados iniciais
var db_cadastroUsuario = JSON.parse(localStorage.getItem('db_cadastroUsuario'));

if (!db_cadastroUsuario) {
    db_cadastroUsuario = db_inicial
};
