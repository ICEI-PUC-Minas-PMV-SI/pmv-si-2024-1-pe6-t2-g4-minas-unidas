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

A arquitetura do front-end móvel segue uma abordagem de arquitetura cliente/servidor, com uma arquitetura em duas camadas, onde o cliente (aplicativo móvel) se comunica com o servidor (back-end) para acessar os dados e funcionalidades.

### Componentes principais

#### 1. Interface de Usuário:
- Esta camada é responsável por fornecer a interface com o usuário, incluindo elementos visuais, interações e fluxo de tela;
- Contém os componentes visuais da aplicação, como botões, campos de entrada, listas e outros elementos de interface;
- Responsável por capturar eventos do usuário, como cliques, toques e gestos, e encaminhá-los para a camada de lógica de negócios para processamento.

#### 2. Lógica de Negócios:
- Nesta camada, reside a lógica da aplicação, incluindo as regras de negócio, validações e processamento de dados;
- Utiliza JavaScript para implementar a lógica de interação do aplicativo, como cadastro de usuário, registro de denúncias e autenticação;
- Realiza a comunicação com a camada de acesso a dados para recuperar ou persistir informações no back-end;
- Responsável por garantir a integridade e consistência dos dados manipulados pela aplicação.

### Interações

- O aplicativo móvel se comunica com os serviços back-end através de requisições HTTP, utilizando endpoints específicos para cada operação (cadastro de usuário, cadastro de denúncias);
- O serviço de autenticação valida as credenciais dos usuários e emite tokens JWT para permitir acesso seguro aos outros serviços;
- As operações de CRUD para denúncias e usuários são realizadas de forma assíncrona para garantir uma boa experiência ao usuário.

![Arquitetura](img/arquitetura-mobile.png)

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

![Prototipo - Mobile](img/prototipo_01.png)

### Design Visual
[Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.]

### Layout Responsivo
[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]

### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]
1. Cadastro de Usuário
- Entrada de Dados: O usuário insere suas informações pessoais, como nome, data de nascimento, cidade, estado, e-mail e senha.
- Processamento: Esses dados são validados no front-end para garantir que todos os campos obrigatórios estão preenchidos e que o formato dos dados é adequado.
- Envio para o Back-End: Após a validação, os dados são enviados ao back-end, utilizando requisições HTTP.
- Resposta do Back-End: O back-end processa o cadastro e retorna uma resposta ao front-end, confirmando o sucesso do cadastro ou indicando erros específicos que devem ser corrigidos pelo usuário.

2. Login do Usuário
- Entrada de Dados: O usuário insere seu e-mail e senha.
- Processamento: O front-end valida se os campos estão preenchidos.
- Envio para o Back-End: As credenciais são enviadas ao back-end para autenticação.
- Resposta do Back-End: Se as credenciais forem válidas, o back-end autorizará ações subsequentes do usuário.

3. Registro de Denúncias:
- Entrada de Dados: O usuário insere detalhes da denúncia, incluindo tipo de violência, descrição e informações de contato (opcional).
- Processamento: O front-end valida os dados para assegurar que todas as informações necessárias foram fornecidas.
- Envio para o Back-End: Os dados da denúncia são enviados ao back-end através de uma API segura.
- Resposta do Back-End: O back-end confirma o registro da denúncia e retorna uma mensagem de confirmação ao usuário.

4. Consulta de Denúncias:
- Solicitação: O usuário solicita visualizar suas denúncias registradas.
- Processamento: O front-end envia uma requisição autenticada ao back-end.
- Resposta do Back-End: O back-end retorna os dados das denúncias que são então exibidos no aplicativo.

5. Interações e Atualizações:
- Atualização de Perfil: O usuário pode atualizar suas informações pessoais. O front-end envia os dados atualizados ao back-end para processamento.
- Resposta do Back-End: O back-end valida e salva as atualizações, retornando uma confirmação ao front-end.
- Recuperação de Conexão: Caso ocorra uma perda de conexão durante o registro de uma denúncia, o aplicativo tenta salvar localmente e reenvia os dados quando a conexão for restabelecida.

## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]
1. Cadastro de Usuário:
Permitir que os usuários se cadastrem na aplicação fornecendo informações como nome, data de nascimento, cidade, estado, e-mail e senha.

2. Registro de Denúncias:
Possibilitar que os usuários registrem denúncias, incluindo informações como tipo de violência.

3. Gerenciamento de Denúncias:
Permitir que os usuários visualizem, editem e excluam suas denúncias registradas.

4. Autenticação de Usuário:
Implementar um sistema de autenticação para garantir que apenas usuários autorizados possam acessar certas funcionalidades da aplicação.

5. Navegação entre Telas:
Fornecer uma navegação fluida entre as diferentes telas da aplicação para uma melhor experiência do usuário.

6. Consulta por Redes de Apoio:
Permitir que os usuários consultem informações sobre redes de apoio e depoimentos publicados.


## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]
1. Desempenho:
Garantir que a aplicação seja responsiva e tenha um tempo de carregamento rápido, mesmo em dispositivos móveis com recursos limitados.

2. Segurança:
Implementar práticas de segurança conforme as diretrizes do OWASP MASVS, incluindo armazenamento seguro de dados sensíveis, uso de métodos de criptografia, autenticação segura, prevenção de vazamento de dados e garantia de tráfego de rede seguro.

3. Escalabilidade:
Desenvolver a aplicação de forma a permitir que ela possa lidar com um aumento no número de usuários e denúncias sem comprometer o desempenho.

4. Disponibilidade: A aplicação deve estar funcional 95% do tempo, garantindo alta disponibilidade para os usuários.

6. Privacidade:
Minimizar o acesso a dados sensíveis, prevenir a identificação do usuário, ser transparente quanto à coleta e uso de dados e oferecer controle ao usuário sobre seus próprios dados.

7. Compatibilidade e Interoperabilidade:
Garantir que a aplicação seja compatível e operável em diferentes dispositivos móveis e sistemas operacionais.

## Considerações de Segurança

Para a segurança de nossa aplicação mobile tomamos como critério o OWASP MASVS, um dos padrões de segurança utilizados para a garantia da segurança em uma aplicação mobile.

Nesse padrão ocorre uma divisão da segurança em algumas categorias. Optamos pelo nível de segurança L1 mais simples devido ao tempo de execução do trabalho. Tentaremos ao máximo seguir esses princípios para o sucesso da segurança de nosso aplicativo móvel.

Segue abaixo as boas práticas de segurança a serem implementadas:

1. Categoria de ARMAZENAMENTO

- Caso algum dado sensível seja armazenado localmente ou externamente, esse dado será guardado de maneira segura independentemente da localização.
- O aplicativo previne vazamento de dados sensíveis.

2. Categoria de CRIPTOGRAFIA

- O aplicativo usurá métodos de criptografia fortes e seguindo as melhores práticas.
- O aplicativo realizará o gerenciamento de chaves.

3. Categoria de AUTENTICAÇÃO E AUTORIZAÇÃO

- O aplicativo usurá protocolos seguros para a autenticação e autorização.
- O aplicativo contará com um método adicional de autenticação para as operações sensíveis.

4. Categoria de REDE

- Todo o tráfego de rede que passará pelo aplicativo será seguro.

5. Categoria de INTERAÇÃO NA PLATAFORMA

- O aplicativo usará os mecanismos de IPC (inter-process communication) de maneira segura.
- O aplicativo usará as WebViews de maneira segura.
- O aplicativo usará a interface de usuário de maneira segura.

6. Categoria de QUALIDADE DE CÓDIGO

- O aplicativo exigirá uma plataforma atualizada para a sua execução.
- O aplicativo apenas usará componentes de software que não possuem vulnerabilidades.
- O aplicativo validará e limpará qualquer "input" suspeito.

7. Categoria de PRIVACIDADE

- O aplicativo minimiza o acesso a dados sensíveis e recursos.
- O aplicativo previne a identificação do usuário.
- O aplicativo é transparente quanto a coleta de dados e seu uso.
- O aplicativo oferece ao usuário controle sobre os seus dados.

## Implantação

A implementação de nossa aplicação será realizada com a plataforma Expo, uma plataforma que simplifica o desenvolvimento e o deploy de aplicativos móveis utilizando JavaScript e React Native.

Os passos utilizados para a implementação da aplicação serão descritos posteriormente.

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








# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
