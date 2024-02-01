<h1 align="center">Bem vindo ao Bitcoin42 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Um simples simulador de compras de Bitcoin, usando API Gateway com Kong, mensageria com RabbitMQ, Node com Typescript, MongoDB e Docker. Espero que se divirta o quanto me diverti fazendo.

## Docs

Se não for incomodar, veja a arquitetura da plataforma abaixo:

- [System design](docs/system-design-high-level)

## Instalação - Ambiente de desenvolvimento local

Clone o repositório:

```sh
git clone --depth 1 https://github.com/alexandresalvatierra/bitcoin42.git
cd football42
```

## Como executar

Por gentileza, renomeie .env.example para .env e configure as variáveis de ambiente. Após concluído, execute no terminal:

```sh
docker compose up
```

Aguarde um pouco toda a configuração terminar. Depois que terminar veja o diretório **http** nele contém alguns arquivos, que podem ser executados usando o [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code plugin.

## Endpoints

- Mongo Express: http://localhost:8081
- Konga: http://localhost:1337
- Criação de usuários: http://localhost:8000/account

### What could come next

There are few important activities to improve this project like:

- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Teste E2E

## Author

👤 **Alexandre**

- Github: [@alexandresalvatierra](https://github.com/alexandresalvatierra)
- LinkedIn: [@https:\/\/br.linkedin.com\/in\/alexandre-salvatierra](https://linkedin.com/in/https://br.linkedin.com/in/alexandre-salvatierra)

## Show your support

Give a ⭐️ if this project helped you!
