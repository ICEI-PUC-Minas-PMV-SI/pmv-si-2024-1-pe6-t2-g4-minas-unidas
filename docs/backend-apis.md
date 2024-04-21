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

[Liste os principais requisitos funcionais da aplicação.]

|ID	   |    Descrição do Requisito                                                                      |   	Prioridade|
|------|------------------------------------------------------------------------------------------------|--------|
|RF-001|   A API deve permitir que os usuários realizem denúncia através da página |    Alta|
|RF-002|   A API deve permitir gerenciar os depoimentos cadastrados (incluir, alterar, excluir e consultar).       |   Alta|





## Tecnologias Utilizadas

Existem muitas tecnologias diferentes que podem ser usadas para desenvolver APIs Web. A tecnologia certa para o seu projeto dependerá dos seus objetivos, dos seus clientes e dos recursos que a API deve fornecer.

[Lista das tecnologias principais que serão utilizadas no projeto.]

- linguagem de programação C#
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

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.


 ##  Testes a serem realizados:Requisitos Funcionais

- ID: 01
  
1.	Caso de teste: Verificar se esta disponivel informações sobre a violência contra a mulher e os tipos de violência.
2.	Passo-a-passo : Acessar a home do website e verificar disponibilidade
3.Resultado esperado:Encontrar pagina com informações;
4.	Resultado obtido: ; 
5.Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.

-	ID:04 Verificar disponibilidade da área dedepoimentos.
  
1.	Passo-a-passo : Acessar a home do website e verificar disponibilidade d área de depoimento
2.	Resultado esperado:Encontrar pagina de depoimentos;
3.Resultado obtido: ; 
4.Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.

-	ID:05 Verificar disponibilidade da área de leitura de depoimentos.
  
1. Passo-a-passo : Acessar a home do website e verificar disponibilidade da área de leitura de  depoimentos
2.	Resultado esperado:Encontrar pagina de leitura de  depoimentos;
3.	Resultado obtido: ; 
4.	Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.


  
  ## Testes a serem realizados:Requisitos não Funcionais

-	ID:01 Verificar se o sistema é compativel com todos os principais navegadores.
1.	Passo-a-passo : Acessar a home do website através dos principais navegadores
2.	Resultado esperado:Sistema usual e disponivel;
3.	Resultado obtido: ; 
4.	Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.


-	ID:02 Verificar se a interface grafica é responsiva.
1.	Passo-a-passo : Acessar a home do website e realizar testes de responsividade
2.	Resultado esperado:Sistema responsivo;
3.	Resultado obtido: ; 
4.	Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável

-	ID:03 Verificar se o sistema esta disponivel 90% do tempo.
1.	Resultado esperado:Sistema  disponivel;
2.	Resultado obtido: ; 
3.	Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.

-  ID:04 Verificar se o sistema  esta tem o tempo de resposta inferior a 3 segundos para a solicitação do usuário
1.	Resultado esperado:Resposta inferior a 3 segundos;
2.	Resultado obtido: ; 
3.	Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.

-  ID:05 Verificar se o sistema  atende as normas e padrões exigidos por lei
  1. Resultado esperado:Atende;
  2. Resultado obtido: ; 
  3. Estado: Indica se o teste passou, falhou, ficou pendente (bloqueado) ou sem efeito, no caso de se perceber que afinal não era aplicável.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.

COULOURIS, George F. et al. Sistemas distribuídos: conceitos e projeto. 5. ed. Porto Alegre: Bookman, 2013.

GOUGH, James; BRYANT, Daniel; AUBURN, Matthew. Mastering API Architecture. O'Reilly Media, Inc.. 2021. 

LAURET, Arnaud. The Design of Web APIs. Manning Publications. 2019.
