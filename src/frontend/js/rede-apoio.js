// Dados em formato JSON
var textoJSON = `{ "redesapoio": [
        { 
        "Cidade": "Alfenas",
        "Instituição1": "<b>Centro de Referência Especializado de Assistência Social - CREAS</b>", 
        "Endereço1": "Endereço: Rua Tiradentes, 1088, Parque das Nações, Alfenas, CEP: 37130-000", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -", 
        "Telefone1": "Telefone: (35) 3297-4547", 
        "Instituição2": "<b>Núcleo de Atenção à Mulher (NAM) - Unifal-MG</b>", 
        "Endereço2": "Endereço: Rua Nabor Toledo Lopes, 598 , Parque das Nações, Alfenas, CEP: 37130-000", 
        "Site2": "Site: https:\/\/www.unifal-mg.edu.br\/prace\/nam\/", 
        "Email2": "E-mail: prace@unifal-mg.edu.br", 
        "Telefone2": "Telefone: (35) 3701-9242"
        },
        
        { 
        "Cidade": "Araguari",
        "Instituição1": "<b>Unidade de Acolhimento de Araguari</b>", 
        "Endereço1": "Endereço: Rua Dolival Gonçalves de Araújo, 35, Milenium, Araguari , CEP: 38447-369", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -", 
        "Telefone1": "Telefone: (61) 3315-9144", 
        "Instituição2": "<b>Núcleo de Defesa da Mulher</b>", 
        "Endereço2": "Endereço: Praça Getúlio Vargas, Centro, Araguari , CEP: 38440-254", 
        "Site2": "Site: -", 
        "Email2": "E-mail: -", 
        "Telefone2": "Telefone: (61) 3315-9144"
        },
        
        { 
        "Cidade": "Araxá",
        "Instituição1": "<b>Centro de Referência Especializado da Assistência Social (CREAS)</b>", 
        "Endereço1": "Endereço: Av. Imbiara, 900, Centro, Araxá, CEP: 38183-244", 
        "Site1": "Site: https:\/\/cmdcaaraxa.com.br\/creas\/ ", 
        "Email1": "E-mail: -", 
        "Telefone1": "Telefone: (34) 36912-2024"
        },
        
        {
        "Cidade": "Barbacena", 
        "Instituição1": "<b>Mulheres Pela Paz</b>", 
        "Endereço1": "Endereço: Av. Gov. Benedito Valadares, 306, São Sebastião, Barbacena, CEP: 36200-008", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: (32) 3332-9638"
        },
        
        { 
        "Cidade": "Belo Horizonte",
        "Instituição1": "<b>Centro Especializado de Atendimento a Mulher - Benvinda</b>", 
        "Endereço1": "Endereço: R. Hermilo Alves, 34, Santa Tereza, Belo Horizonte, CEP: 31010-115", 
        "Site1": "Site: https:\/\/prefeitura.pbh.gov.br\/smasac\/sudc\/equipamentos\/benvinda", 
        "Email1": "E-mail: -", 
        "Telefone1": "Telefones: (31) 3277-4380 | (31) 98873-2036", 
        "Instituição2": "<b>Casa dos Direitos Humanos</b>", 
        "Endereço2": "Endereço: Av. Amazonas, 558, Centro, Belo Horizonte, CEP: 30170-130", 
        "Site2": "Site: http:\/\/direitoshumanos.social.mg.gov.br\/pagina\/atendimento\/casa-de-direitos-humanos", 
        "Email2": "E-mail: cdh@direitoshumanos.mg.gov.br", 
        "Telefone2": "Telefone: (31) 3916-7932", 
        "Instituição3": "<b>Centro Risoleta Neves de Atendimento</b>", 
        "Endereço3": "Endereço: Av. Amazonas, 558, Centro, Belo Horizonte, CEP: 30180-001", 
        "Site3": "Site: https:\/\/centrorisoleta.wixsite.com\/cerna", 
        "Email3": "E-mail: -", 
        "Telefone3": "Telefones: (31) 3270-3235 | 3270-3235 | 3270-3296", 
        "Instituição4": "<b>1ª Companhia da Polícia Militar Independente de Prevenção à Violência Doméstica</b>", 
        "Endereço4": "Endereço: Av. Augusto de Lima, 270, Centro, Belo Horizonte, CEP: 30190-001", 
        "Site4": "Site: https:\/\/www.policiamilitar.mg.gov.br\/portal-pm\/1rpm\/conteudo.action?conteudo=183268&tipoConteudo=noticia", 
        "Email4": "E-mail: cia.pvd@pmmg.mg.gov.br", 
        "Telefone4": "Telefone: (31) 2108-8938", 
        "Instituição5": "<b>Diretoria de Políticas para as Mulheres</b>", 
        "Endereço5": "Endereço: Avenida Afonso Pena, 342, 1º Andar - Centro", 
        "Site5": "Site: https:\/\/prefeitura.pbh.gov.br\/smasac\/sudc\/politicas\/mulheres", 
        "Email5": "E-mail: dipmbh@pbh.gov.br", 
        "Telefone5": "Telefone: (31) 3277-9753", 
        "Instituição6": "<b>Núcleo de defesa da mulher - NUDEM </b>", 
        "Endereço6": "Endereço: Av. Augusto de Lima, 270 - Centro, Belo Horizonte, CEP: 30190-001", 
        "Site6": "Site: -", 
        "Email6": "E-mail: -", 
        "Telefone6": "Telefones: (31) 3270-3200 | (31) 3270-3202"
        },

        {
        "Cidade": "Betim", 
        "Instituição1": "<b>Centro de Referência de Atendimento às Mulheres - CREAM</b>", 
        "Endereço1": "Endereço: Rua Carandaí, 87, Chacará, Betim", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: (31) 3591-1581"
        },

        {
        "Cidade": "Caratinga", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: - "
        },

        {
        "Cidade": "Cataguases", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: - "
        },

        {
        "Cidade": "Conselheiro Lafaiete", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: - "
        },

        {
        "Cidade": "Contagem", 
        "Instituição1": "<b>Superintendência de Políticas Públicas para as Mulheres</b>", 
        "Endereço1": "Rua José Carlos Camargos, 218, Centro, Contagem, CEP: 32.140-600", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: (31) 3398-9929"
        },

        {
        "Cidade": "Coronel Fabriciano", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },

        {
        "Cidade": "Diamantina", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },

        {
        "Cidade": "Divinópolis", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },

        {
        "Cidade": "Formiga", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },

        {
        "Cidade": "Governador Valadares", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },

        {
        "Cidade": "Guaxupé", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },

        {
        "Cidade": "Ibirité", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Ipatinga", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Itabira", 
        "Instituição1": "<b>Centro de Referência Especializado de Atendimento à Mulher - CREAM</b>", 
        "Endereço1": "Endereço: Avenida Carlos de Paula Andrade, 135 A, Centro, Itabira", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: (31) 3839-2164"
        },
    
        {
        "Cidade": "Itabirito", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Itajubá", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Itaúna", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Ituiutaba", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Janaúba", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Januária", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "João Monlevade", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Juiz de Fora", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Lavras", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Manhuaçu", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Montes Claros", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Muriaé", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Nova Lima", 
        "Instituição1": "<b>Centro de Referência da Mulher</b>", 
        "Endereço1": "Endereço: Rua Dr. Antonino Fonseca Júnior, 88, bairro Rosário, Nova Lima", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: (31) 3542-5918"
        },
    
        {
        "Cidade": "Pará de Minas", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Passos", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Patos de Minas", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Patrocínio", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Pedro Leopoldo", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Pirapora", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Poços de Caldas", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Ponte Nova", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Pouso Alegre", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Ribeirão das Neves", 
        "Instituição1": "<b>Superintendência de Proteção Social Básica e Cidadania</b>", 
        "Endereço1": "Endereço: Rua Ari Teixeira da Costa, 1.100, Savassi, Ribeirão das Neves, CEP: 33880-630", 
        "Site1": "Site: -", 
        "Email1": "E-mail: superintendenciaprotecaobasica@gmail.com",
        "Telefone1": "Telefone: (31) 3627-5649"
        },
    
        {
        "Cidade": "Sabará", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Santa Luzia", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Santa Maria", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Santos Dumont", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "São João Del Rei", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "São Lourenço", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "São Sebastião do Paraíso", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Sete Lagoas", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Teófilo Otoni", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Três Corações", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Ubá", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Uberaba", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Uberlândia", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Unaí", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Varginha", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        },
    
        {
        "Cidade": "Vespasiano", 
        "Instituição1": "<b></b>", 
        "Endereço1": "", 
        "Site1": "Site: -", 
        "Email1": "E-mail: -",
        "Telefone1": "Telefone: "
        }
    ]
    }`;

// Conversão de JSON em Objeto JavaScript resultado
var dados = JSON.parse(textoJSON);

//Função para exibir as redes de apoio
function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;
    //Condição para imprimir 6 instituições (Belo Horizonte)
    if (cidade == 5)
    document.getElementById("resultado-redeapoio").innerHTML = dados['redesapoio'][cidade-1].Instituição1 + "<br>" + dados['redesapoio'][cidade-1].Endereço1 + "<br>" + dados['redesapoio'][cidade-1].Telefone1 + "<br>" + dados['redesapoio'][cidade-1].Site1 + "<br>" + dados['redesapoio'][cidade-1].Email1 + "<br> <br>" + dados['redesapoio'][cidade-1].Instituição2 + "<br>" + dados['redesapoio'][cidade-1].Endereço2 + "<br>" + dados['redesapoio'][cidade-1].Telefone2 + "<br>" + dados['redesapoio'][cidade-1].Site2 + "<br>" + dados['redesapoio'][cidade-1].Email2 + "<br> <br>" + dados['redesapoio'][cidade-1].Instituição3 + "<br>" + dados['redesapoio'][cidade-1].Endereço3 + "<br>" + dados['redesapoio'][cidade-1].Telefone3 + "<br>" + dados['redesapoio'][cidade-1].Site3 + "<br>" + dados['redesapoio'][cidade-1].Email3 + "<br> <br>" + dados['redesapoio'][cidade-1].Instituição4 + "<br>" + dados['redesapoio'][cidade-1].Endereço4 + "<br>" + dados['redesapoio'][cidade-1].Telefone4 + "<br>" + dados['redesapoio'][cidade-1].Site4 + "<br>" + dados['redesapoio'][cidade-1].Email4 + "<br> <br>" + dados['redesapoio'][cidade-1].Instituição5 + "<br>" + dados['redesapoio'][cidade-1].Endereço5 + "<br>" + dados['redesapoio'][cidade-1].Telefone5 + "<br>" + dados['redesapoio'][cidade-1].Site5 + "<br>" + dados['redesapoio'][cidade-1].Email5 + "<br> <br>" + dados['redesapoio'][cidade-1].Instituição6 + "<br>" + dados['redesapoio'][cidade-1].Endereço6 + "<br>" + dados['redesapoio'][cidade-1].Telefone6 + "<br>" + dados['redesapoio'][cidade-1].Site6 + "<br>" + dados['redesapoio'][cidade-1].Email6;
    else
        //Condição para imprimir 2 instituições
        if (cidade == 1 || cidade == 2)
        document.getElementById("resultado-redeapoio").innerHTML = dados['redesapoio'][cidade-1].Instituição1 + "<br>" + dados['redesapoio'][cidade-1].Endereço1 + "<br>" + dados['redesapoio'][cidade-1].Telefone1 + "<br>" + dados['redesapoio'][cidade-1].Site1 + "<br>" + dados['redesapoio'][cidade-1].Email1 + "<br> <br>" + dados['redesapoio'][cidade-1].Instituição2 + "<br>" + dados['redesapoio'][cidade-1].Endereço2 + "<br>" + dados['redesapoio'][cidade-1].Telefone2 + "<br>" + dados['redesapoio'][cidade-1].Site2 + "<br>" + dados['redesapoio'][cidade-1].Email2;
        else
        //Condição para imprimir 1 instituição
        if (cidade == 3 || cidade == 4 || cidade == 6 || cidade == 10 || cidade == 19 || cidade == 32 || cidade == 42)
        document.getElementById("resultado-redeapoio").innerHTML = dados['redesapoio'][cidade-1].Instituição1 + "<br>" + dados['redesapoio'][cidade-1].Endereço1 + "<br>" + dados['redesapoio'][cidade-1].Telefone1 + "<br>" + dados['redesapoio'][cidade-1].Site1 + "<br>" + dados['redesapoio'][cidade-1].Email1;
        //Condição para imprimir que não localizamos redes de apoio (o restante das cidades)
        else
        document.getElementById("resultado-redeapoio").innerHTML = "Não localizamos redes de apoio na sua cidade. <br><br> Caso queira nos enviar informações sobre redes de apoio, encaminhe para o e-mail: <b>minasunidaspucminas@gmail.com</b> <br><br> <i>Agradecemos a sua compreensão!</i>";
}
