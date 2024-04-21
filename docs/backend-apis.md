# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

[Inclua uma breve descrição do projeto.]


Minas unidas é um projeto  que visa ajudar mulheres a se defender ou denunciar atos que atentam contra sua dignidade/vida. Através de um website/ app, as reclamantes podem registrar os maus tratos sofridos. A serviço  também permite uma lista de denuncias ja realizadas pelo usuário , funcionalidade que poderá ser utilizada no futuro a critério da necessidade dos usuários.

## Objetivos da API

O primeiro passo é definir os objetivos da sua API. O que você espera alcançar com ela? Você quer que ela seja usada por clientes externos ou apenas por aplicações internas? Quais são os recursos que a API deve fornecer?

[Inclua os objetivos da sua api.]


Comunicar  com a central das  autoridades competentes de forma segura e eficiente.

Fornecer operações CRUD (Create, Read, Update, Delete) para entidades principais, como usuários.
Facilitar a integração de novos recursos e funcionalidades caso seja necessário.
Garantir a segurança dos dados dos usuários por meio de autenticação e autorização adequadas.
Fornecer uma lista de atividade(denuncia) quando for solicitado.


## Arquitetura

[Descrição da arquitetura das APIs, incluindo os componentes e suas interações.]

A arquitetura do nossa solução seque o modelo MPAs (Multi-Page Application) que contará com Controladores: Responsáveis por receber as requisições HTTP, Serviço que manipula as operações CRUD ,E sistema de Segurança: Responsável por autenticar e autorizar os usuários antes de permitir o acesso aos endpoints da API.A API da Web tem muitas ações, estas ações na arquitetura REST representam o uso dos verbos HTTP para manipulação dos recursos.


## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]
A aplicação contará com as seguites entidades realizando as seguites ações:
  Usuario acessa o site/app ->se cadastra  -> realiza a denuncia e envia para nosso banco de dados.

  ![Captura de tela 2024-04-07 124838](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/f6dcd96b-24fc-46eb-a12e-00a70a0aecbe)



## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

O cliente após logado solicita a adição de um novo dado o que faz a API invocar a ação  HttpPost  que a depender das acões do cliente pode Salvar(HttpPut) deletar(HttpDelete) ou consultar os dados armazenados .

## Requisitos Funcionais

Lista dos principais requisitos funcionais da API:

|ID	   |    Descrição do Requisito                                                                      |   	Prioridade|
|------|------------------------------------------------------------------------------------------------|--------|
|RF-001|   A API deve permitir que os usuários realizem denúncia através da página |    Alta|
|RF-002|   A API deve permitir gerenciar os depoimentos cadastrados (incluir, alterar, excluir e consultar).       |   Alta|





## Tecnologias Utilizadas



Principais tecnologoas utilizadas no projeto.

- Framework ASP.NET Core
- JWT (Json Web Token)
- OAuth (Open Authorization)
- Microsoft entity framework core
- Microsoft entity framework core tools
- Microsoft entity framework core sqlserver

## API Endpoints

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

### Endpoint 1
- Método: GET
- URL: /endpoint1
- Parâmetros:
  - param1: [descrição]
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Error",
      "error": {
        ...
      }
    }
    ```


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]
- Todo acesso será concedido atráves de login e senha
- Cada usuário tera acesso somente ao seu hitorico.
- A senha do usuário sera armazenada criptografada.
## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.



 

  Resposta  1 Requisitos de hardware e software necessários:
Hardware: Um servidor com pelo menos 4 núcleos de CPU e 8 GB de RAM é recomendado para lidar com a carga esperada .
Software: Sistema operacional linux e windows, com as ferramentas de desenvolvimento necessárias instaladas, como VSCode.

Resposta 2 Hospedagem:- AWS

3.Configuração do ambiente de implantação:

Dependências necessárias no servidor:
Variáveis de ambiente necessárias: credenciais do banco de dados, chaves de API.
4.Deploy da aplicação:

5.Testes no ambiente de produção

## Testes

Foram realizados testes de validação da API que possui as funcões CRUD conforme observado abaixo pode se notar o retorno do codigo "200" 
 "201" que valida a funcionalidade dos mesmos.
Dessa forma consta-se abaixo os prints dos testes de denuncia :
1.<img width="960" alt="denuncia_getbyid" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/0895c983-4c1a-4213-8c1b-d1bc59ff0c64">
<img width="960" alt="denuncia_update" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/95ac90c0-451c-41c5-b608-ccb05ff34277">
<img width="960" alt="depoimento_create" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/1768cd03-15e9-48d1-986f-d44ae6d85072">
<img width="960" alt="depoimento_getall" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/27f5e577-c1bd-4288-a824-b45aa404a394">
  E logo abaixo a funcionalidade depoimento funcionando :
<img width="960" alt="depoimento_getbyid" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/19ae21a2-1f4a-4b10-9f9d-1a3131e06995">
<img width="960" alt="denuncia_create" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/65e499d4-4769-4054-b1de-26ac09109e59">
<img width="960" alt="denuncia_delete" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/170839f5-fef8-46ea-8456-d915ae33fa57">
<img width="960" alt="denuncia_getall" src="https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t2-g4-minas-unidas/assets/89945405/8aae019f-5418-41fe-8929-e64bc023f272">

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.

COULOURIS, George F. et al. Sistemas distribuídos: conceitos e projeto. 5. ed. Porto Alegre: Bookman, 2013.

GOUGH, James; BRYANT, Daniel; AUBURN, Matthew. Mastering API Architecture. O'Reilly Media, Inc.. 2021. 

LAURET, Arnaud. The Design of Web APIs. Manning Publications. 2019.
