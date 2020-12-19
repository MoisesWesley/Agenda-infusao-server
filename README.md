# Agenda-Server 

## Esta e uma API RESTful criado com:

- Nodejs
- Docker
- Express
- Sequelize
- Postgres

O principal objetivo da API e fornecer dados para o controle de infusões sobre usuários de uma empresa se dispondo das informações de usuários, diagnósticos, endereços, contatos além das informações pertinentes tempo de medicamento e agenda das infusões

## Sobre este projeto

Este e um projeto para meu portifólio pessoal ficarei feliz se você puder me fornecer algum feedback sobre o projeto sobre código, estrutura ou qualquer coisa que você possa relatar que possa me crescer como desenvolvedor melhor

Meu e-mail: moises.wesley.s@gmail.com

Conecte-se comigo no LinkedIn

Além disso, você pode usar este projeto como desejar, estudar, fazer melhorias ou ganhar dinheiro com ele!

## Modelo entidade relacionamento

O sistema contem os seguintes recursos; create, delete, index, show das seguintes entidades usuários, endereços, diagnósticos, contatos, infusões e medicamentos. Onde as informações se relacionam da seguinte forma.

![Diagrama ER](/.github/Agenda.png)


## Começando

### Pré-requisitos

Para executar este projeto você vai precisar do NodeJS 8+, postgres ou imagem do postgres rodando no Docker na máquina.

### Installing

**Clonando repositório**

```
$ git clone https://github.com/MoisesWesley/Agenda-infusao-server

$ cd Agenda-infusao-server
```

**Instalando dependência**

```
$ yarn
```

_ou_

```
$ npm install
```

**Instalando Postgres via docker**

Baixando imagem

```
$ docker pull postgres
```
Subindo imagem do postgres para o docker

```
$ docker run --name docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres 
```

**Configurando usuario no postgres**

Entrar no container "docker"

```
$ docker exec -it docker bash
```

### Conectando ao Postgres

```
$ psql -U postgres
```

Criando usuário

```
$ CREATE USER docker SUPERUSER INHERIT CREATEDB CREATEROLE;
```

Alterando senha do usuario

```
$ ALTER USER nomedousuario PASSWORD 'docker';    
```

### Executando ambiente de desenvolvimento

Após a instalação de todas as dependências junto com o postgres, para iniciar o servidor rode.

```
$ yarn dev
```

_ou_

```
$ npm run dev
```

### Preparando ambiente da aplicação  - sequelize

Criando banco de dados

```
$ yarn sequelize db:create 
```

Criando as tabelas atraves das migrates

```
$ yarn sequelize db:migrate
```
_ou para desfazer_
```
$ yarn sequelize db:migrate:undo:all
```

## Rotas 

### Rota de teste 

Para verificar se a API está sendo executada corretamente.

Acesse a URL base: http://localhost:3333

- Resultado esperado
```
{
  "Server": "Running"
}
```
### Rota Usuarios

> http://localhost:3333/users

> http://localhost:3333/users/1

> http://localhost:3333/users

> http://localhost:3333/users/1

### Rota Informações Usuários 

> http://localhost:3333/user/infusers

> http://localhost:3333/user/1/infusers

> http://localhost:3333/users/1/infusers

> http://localhost:3333/user/infuser/1

### Rota Contatos

> http://localhost:3333/user/contact

> http://localhost:3333/user/1/contacts

> http://localhost:3333/user/1/contact

> http://localhost:3333/user/contact/1

### Rota Infusões 

> http://localhost:3333/infusions

> http://localhost:3333/user/1/infusions

> http://localhost:3333/user/1/infusions

> http://localhost:3333/user/infusion/1

### Rota Diagnósticos 

> http://localhost:3333/diagnosis/users

> http://localhost:3333/user/1/diagnosis

> http://localhost:3333/user/1/diagnosis

> http://localhost:3333/user/diagnosis/1

### Rota Medicações 

> http://localhost:3333/diagnosis/medications

> http://localhost:3333/diagnosis/1/mediactions

> http://localhost:3333/diagnosis/1/medication

> http://localhost:3333/diagnosis/medication/1

### Rota Endereços 

> http://localhost:3333/addresses

> http://localhost:3333/users/addresses/1

> http://localhost:3333/user/1/address

> http://localhost:3333/user/1/address

## Contribuindo

Para contribuir faca um fork e/ou abra uma issue, ficarei feliz em analisar. E se tiver qualquer dúvida sobre o projeto...

Meu email: moises.wesley.s@gmail.com

Conect-se comigo no LinkedIn

## Licenca

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](https://github.com/MoisesWesley/Agenda-infusao-server/blob/master/LICENSE) para obter detalhes.
