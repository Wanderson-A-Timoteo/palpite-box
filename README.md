# <p align="center">  &nbsp; Palpite Box &nbsp;   </p>

<p align="justify">
  Aplicação desenvolvida durante o workshop Semana Fullstack Master, disponibilizada pela plataforma DevPleno e lecionada pelo mestre em SI e desenvolvedor Tulio Faria. Consiste num sistema de avaliação na qual os clientes podem deixar sua nota de 0 a 5, sobre os estabelecimentos comerciais e, em troca, receber cupons de descontos e vantagens. A aplicação conta com integração à uma Planilha do Google, na qual o dono do estabelecimento pode definir as configurações do cupom de desconto, além de ter a listagem completa dos clientes e suas avaliações.
</p> <br />

## Pré-Vizualização do Projeto:

![Preview](https://github.com/Wanderson-A-Timoteo/palpite-box/blob/master/public/interface.png?raw=true)

## Acessar o web site Palpite Box:

[Clique aqui](https://palpite-box.wanderson-a-timoteo.vercel.app/)

## Layout:

Layout criado utilizando o Figma. O arquivo pode ser encontrado [aqui](https://www.figma.com/file/HxvAYhS6l7UDI49u8uLdaC/palpite-box?node-id=0%3A1).

## Dependências do Projeto:
Durante o desenvolvimento do projeto foi preciso instalar
```
npm install next react react-dom

npm install react react-dom

npm install tailwindcss

npx tailwindcss init

npm install postcss-import

npm install autoprefixer

npm install google-spreadsheet

npm install swr

npm install google-spreadsheet

npm install moment
```

## Pré-requisitos:

Para rodar a aplicação na máquina com um servidor local, é necessário apenas o NodeJS e NPM.

```
npm install
npm run dev
```

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o [Vercel](http://vercel.com/). É necessário criar as variáveis de ambiente para configurar o acesso às planilhas do Google:

```
SHEET_CLIENT_EMAIL = client email do service credential
SHEET_PRIVATE_KEY = private key do service credential - (As quebras de linha com "\n" contidas nesta chave devem ser removidas e a chave deve ser codificar em base 64)
SHEET_DOC_ID = id da planilha
```

## Desenvolvido com:

* [NextJS](https://nextjs.org/) - The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Planilhas online do Google

## Autor:

* **Wanderson A. Timóteo** - [wanderson.ga](https://wanderson.ga)


## Licença

* Licenciado sob a licença MIT - veja [LICENSE](LICENSE) para mais informações.

## Agradecimentos

* Projeto construído durante a Semana Fullstack Master da [DevPleno](https://devpleno.com), em julho/2020. 

* Agradecimento ao [@tuliofaria](https://github.com/tuliofaria/) por compartilhar conteúdo relevante e com qualidade de ensino.

