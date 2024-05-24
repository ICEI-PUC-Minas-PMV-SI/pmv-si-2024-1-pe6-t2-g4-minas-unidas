# Front-end Móvel

Este documento aborda o desenvolvimento do front-end móvel para o projeto **Minas Unidas**. O objetivo principal do front-end móvel é fornecer uma interface amigável para que os usuários possam se cadastrar e registrar denúncias diretamente de seus dispositivos móveis. O foco será na usabilidade e na integração com o back-end da aplicação.

## Tecnologias Utilizadas

A seguir, estão listadas as tecnologias utilizadas no desenvolvimento do projeto:

### Ambiente de desenvolvimento:
- **Visual Studio Code**: IDE para desenvolvimento do código-fonte.
- **Git**: Sistema de controle de versão para rastreamento e gerenciamento de alterações no código-fonte, possibilitando colaboração e versionamento.
- **GitHub**: Plataforma de hospedagem de código-fonte e colaboração para desenvolvimento de projetos.

### Front-end móvel:
- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma, permitindo criar aplicativos nativos para iOS e Android utilizando JavaScript e React.
- **Expo**: Ferramenta e plataforma para desenvolvimento rápido de aplicativos React Native, facilitando testes e deploy.
- **JavaScript**: Linguagem de programação utilizada para desenvolver a lógica de interação do aplicativo.
- **React Native Paper**: Biblioteca utilizada para criar interfaces com boa usabilidade, seguindo as diretrizes de Material Design do Google.

## Arquitetura

[Descrição da arquitetura das aplicação móvel, incluindo os componentes e suas interações.]

## Modelagem da Aplicação

Nesta seção, será apresentada a modelagem da aplicação, que inclui a definição das entidades do sistema, seus atributos e relacionamentos.

### Entidades

A seguir, são detalhadas as entidades do sistema:

#### 1. Tipo de violência:

- Representa os cinco tipos de violência: física, psicológica, moral, sexual ou patrimonial;
- Atributos: ID (chave primária), Tipo.

#### 2. Perfil:

- Define os diferentes perfis de usuários no sistema;
- Atributos: ID (chave primária), Descrição.

#### 3. Usuário:

- Representa os usuários do sistema;
- Atributos: ID (chave primária), Nome, Data de Nascimento, Cidade, Estado, E-mail, Senha, Perfil ID (chave estrangeira referenciando o perfil associado).

#### 4. Denúncia:

- Armazena as denúncias feitas pelos usuários;
- Atributos: ID (chave primária), Nome, Data de Nascimento, Cidade, Estado, E-mail, Telefone, Tipo de Violência ID (chave estrangeira referenciando o tipo de violência associado), Descrição.

![Modelagem de dados - Mobile](img/modelagem-dados-mobile.png)

## Projeto da Interface
[Descreva o projeto da interface móvel da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual
[Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.]

### Layout Responsivo
[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]

### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]

## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

### Plano de Testes de Software

**Fluxo de Trabalho de Teste**
  
O sistema como um todo sera validados em um programa de testes que está constituído em varias etapas de testes, com dois exemplos práticos em cada, relacionadas à unidade, integração e sistema.

   |                        |                 Recursos Humanos                                |               |
   |-------------------------|------------------|--------------------------------------------------------------------------|
   |Nome    |   Papel          |Responsabilidades ou Comentários Específicos                                 |
   |Andressa Cordeiro e Luiz Carlos Ferreira | Analista de teste|          Planejamento das etapas de  testes|
   |Davisson José e Rafael |Tester                                        |Execução do roteiro de teste|
   |Carolina e Gabriella Victória |Programador|Cria os componentes de teste necessários para suportar os requisitos |


   
### Categorias de Testes

**- Teste de Funcionalidade**
    
O teste funcional é um processo de garantia de qualidade onde o software é testado em relação às funcionalidades, requisitos e regras de negócios. É focado no desempenho de processamento, desse modo, se concentra na simulação do uso real do app.

|Caso De Teste|CT01 - Registrar , editar  e excluir denúncia                 |
|-----------------------|------------------------------------------------------------------------------------------------------|
|Pré-Condição|Não existe                                                                                            |
|Procedimento|                                                                                                         |
|Resultado esperado|                                                                                                    |
|Dados de entrada|Cidade, Estado, CEP, E-mail, Telefone, Denúncia|
|Prioridade|Alta|
|Técnica|Manual|
|Iteração|1ª Iteração|


|Caso De Teste|CT02 - Cadastrar ,Editar e excluir usuário                                                                     |
|-----------------|--------------------------------------------------------------------------------------------|
|Pré-Condição     |Não existe                                                                                  |
|Procedimento     |                                                                                            |
|Resultado esperado|                                                                                            |
|Dados de entrada|Nome, data de nascimento, E-mail, Confirmação de E-mail, Senha, Confirmação de Senha|
|Prioridade|Alta|
|Técnica|Manual|
|Iteração|1ª Iteração|


**- Teste de Usabilidade**

O teste de usabilidade busca entender como o sistema se comporta no dia a dia, na naturalidade da utilização, e se ele atende aos requisitos pensados e estabelecidos.

|Caso De Teste|CT03 - Teste de Perfil (Fluidez e facilidade entre as diversas telas do sistema que envolve tal processo e quanto ao resultado e suas transições). Foram observados dois atores com características distintas entre si.|
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Pré-Condição|Não existe |
|Procedimento|O ator acessa a home page,Na barra lateral, aciona o botão “Identifique se você está sendo vítima de algum tipo de violência”,O texto compreende 5 etapas de perguntas objetivas com confirmação em cada etapa através do botão “Enviar Resposta”,Na sexta tela deve ser apresentado um resultado diagnóstico e a apresentação de 3 opções de botão,
|Continua procedimento|Entenda sobre (encaminha o ator até a página de legislação onde estão as informações complementares Denuncie (encaminha o ator até a página de denúncia)|
|Continua procedimento|Refazer o teste(Possibilita de forma imediata realizar novamente o teste, regressando a tela de teste inicial, O ator pode regressar à homepage diretamente pelo logo do “Minas Unidas” no canto superior esquerdo|
|Resultado esperado|O sistema deve guardar todas as respostas de todas as perguntas do teste e apresentar ao final o resultado compatível com a proposta inicial. Espera-se que seja um fluxo de menos de 1 minuto para todo o questionário e de fácil manuseio para diferentes atores.|
|Dados de entrada|Respostas “Sim” ou “Não”|
|Prioridade|Alta|
|Técnica|Manual|
|Iteração|1ª Iteração|


|Caso De Teste|CT04 - Consulta por redes de apoio e depoimentos publicados|
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Pré-Condição|Não existe |
|Procedimento|Redes de Apoio,O ator acessa a home page,Na barra de menu seleciona a opção “Redes de Apoio”,Na nova tela, o ator deve escolher uma cidade e confirmar com a opção “OK”,Existem duas possibilidades de resposta para a busca, a primeira é o resultado das unidades de apoio presentes para a cidade escolhida. E na segunda possibilidade, a emissão da mensagem “Não localizamos redes de apoio na sua cidade.”, onde o ator poderá através do email disponibilizado enviar informações a respeito de uma unidade de apoio para aquela cidade.|
|Depoimentos|O ator acessa a home page, No corpo da homepage pode acessar a opção “Ver mais depoimentos”,Na nova tela, o ator encontrará disponível todos os depoimentos cadastrados no sistema com a possibilidade de expandir-los e curtir,Nessa mesma tela também é possível encontrar o botão para cadastrar um novo depoimento|
|Resultado esperado|Espera-se que o sistema apresente os resultados das informações cadastradas com fluidez e em poucos passos.
|Dados de entrada|Redes de apoio - Escolher opção de cidade e confirmar com a opção “OK”. Depoimentos - Maximizar, minimizar se for necessário|
|Prioridade|Alta|
|Técnica|Manual|
|Iteração|1ª Iteração|

**- Teste de Recuperação**

Verifica se o software é capaz de retornar para um estado operacional após estar em um estado de falha.

|Caso de Teste|CT012 - Tentar salvar a denúncia após perda do sinal de internet e registrar os resultados|
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Pré-Condição|O usuário possuir login válido e senha cadastrada para acessar o sistema e as telas|
|Procedimento|O ator acessa a tela de Login;O ator informa um login válido no campo “E-mail”, uma senha válida no campo "Senha" e clicar no botão “Entrar”;O ator clica no botão “Realizar Denúncia";O ator digita os dados necessários para realizar a denúncia;O ator escreve a denúncia;O ator desliga a conexão de internet da máquina onde está realizando o teste;O ator clica no botão "Enviar Denúncia”;O ator anota o comportamento do sistema neste momento;O ator restabelece a conexão de internet;O ator clica no botão “Enviar Denúncia”novamente;O ator anota o comportamento do sistema neste momento.|
|Resultado Esperado|Na primeira tentativa de enviar a denúncia sem acesso a internet, o sistema deve apresentar mensagem informando "Falha ao Enviar a Denúncia’'.Após restabelecer a conexão com a internet e tentar enviar novamente a denúncia, o  sistema deve enviá-la com sucesso.Espera-se que os dados preenchidos em tela não sejam perdidos ao tentar salvar  a denúncia sem internet.|
|Dados de Entrada|Login(E-mail), Senha válida, Rua, Número, Bairro, Cidade, Estado, CEP, E-mail, Telefone e Denúncia e se deseja salvar a mesma|
|Prioridade|Alta|
|Técnica|Manual|
|Iteração|1ª Iteração|



|Caso de Teste|CT013 - Tentar salvar o depoimento após perda do sinal de internet e registrar os resultados|
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Pré-Condição|O usuário possuir acesso ao site|
|Procedimento|O ator acessa a tela de Inicial;O ator clica na área para Realizar o Depoimento;O ator completa os campos para realizar o depoimento;O ator desliga a conexão de internet da máquina onde está realizando o teste;O ator clica no botão “Publicar”;O ator anota o comportamento do sistema neste momento;O ator restabelece a conexão de internet;O ator clica no botão “Publicar” novamente;O ator anota o comportamento do sistema neste momento.|
|Resultado esperado|Na primeira tentativa de salvar  a denúncia sem a internet, o sistema deve apresentar mensagem informando ‘Falha ao publicar o depoimento'.|
|Dados de entrada|Nome, Cidade, Depoimento, Opção de Depoimento Anônimo.|
|Prioridade|Alta|
|Técnica|Manual|
|Iteração|1ª Iteração|













# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
