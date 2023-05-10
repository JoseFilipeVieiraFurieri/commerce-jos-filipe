<h4 align="center">
  <img width="180px" alt="trybe wallet logo" src="https://assets.revistacultivar.com.br/4357c-Caixa-Manga-12Kg.jpg" />
  <br /><br />
</h4>

<hr />


# Projeto Commerce

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.

<details>
  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto coloquei em prática métodos e operadores para alterar dados no banco de dados não relacional commerce (MongoDB).
  A aplicação foi desenvolvida com:

- `MongoDb`
- `mongosh`
- `docker`

</details>
<details>
  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

- [ ] `docker run -d --name=mongo-commerce -v "$PWD:/app" -p 27017:27017 mongo:5.0`
- [ ] `docker exec -it mongo-commerce bash`
- [ ] `cd app/`
- [ ] `mongorestore -d commerce -c produtos assets/produtos/produtos.bson`

**Localmente:**

**Necessita ter um banco de dados(MongoDb) instalado localmente**

</details>

<details>
  <summary><strong>:memo: Tecnologias utilizadas</strong></summary><br />
  
- `MongoDb`
- `mongosh`
- `docker`

</details>
<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

- Alterar documentos utilizando métodos de update com operadores simples;
- Alterar documentos utilizando operadores complexos e modificadores;
- Construir queries e expressões complexas utilizando índices textuais e expressões regulares.  

</details>
