# EssiaFrontEndAngular

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.1.
Vc também vai precisar do Node js mais atual, bootstrap mais atual.
Comando para instalar o angular/cli no Windows, no linux tem que usar o sudo apt caso vc não esteja com o usuário root: npm install -g @angular/cli
Comando para instalar o node js no Windows, no linux tem que usar o sudo apt caso vc não esteja com o usuário root: install nodejs

## Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Estrutura de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate Directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Executando testes de ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral e referência de comando do Angular CLI](https://angular.dev/tools/cli).

## Docker
Comando para gerar o build do docker, vc precisa estar dentro da pasta do projeto: docker build -t angular-essia .
Comando para subir o container: docker run -p 4200:4200 angular-essia
Node versão: 20
Angular: 18

# passos para subir os containers na network
Comando para fazer o build da aplicação back-end
docker image build -t testeessia .

Comando para subir o container do MySQL
docker container run -d -p 3307:3307 -e MYSQL_ROOT_PASSWORD=12345 --network testeessia-network --name testeessia-mysql mysql:8.0

Comando para subir a aplicação back-end
docker container run -d -p 8080:8080 -e DB_HOST=testeessia-mysql --network testeessia-network  testeessia


Comando para subir a network com o Front-end
docker container run -d -p 4200:4200 -e angular-essia --network testeessia-network  angular-essia 
