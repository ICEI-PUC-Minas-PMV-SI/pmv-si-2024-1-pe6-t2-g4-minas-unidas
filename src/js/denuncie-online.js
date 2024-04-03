var db_inicial  = {
    data: [

    ]
}

// caso os dados já estejam no local storage. caso contrário, carrega os dados iniciais
var db_denuncieOnline = JSON.parse(localStorage.getItem('db_denuncieOnline'));

if (!db_denuncieOnline) {
    db_denuncieOnline = db_inicial
};