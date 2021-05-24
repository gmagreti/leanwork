## Teste para a vaga de Front End Leanwork

## Estrutura do projeto criada com npx create-react-app --template typescript


## Inicialiar a aplicação.
    
    Clonar repositorio
    Com o projeto clonado e aberto no seu  visual studio code, rode npm install para instalar todas as dependencias  do projeto.
    Após a conclusão da instalação rode yarn start, ele vai rodar na porta localhost:3000
    Está pronto para abri-lo no navegador!
    
## Solucões aplicadas ao projeto.

    A estrutura da aplicação foi criada com npx create-react-app --template typescript
    Utilizei a lib styled-components para fazer a estilização da pagina 
    Utilizei Regex para a formatação das máscaras do CPF e Telefone.
    A persistência dos dados foi feita no localStorage com o nome '@Leankwork:dados'
    A maneira que utilizei para mostrar os dados foi a partir da lib react-modal de forma assíncrona, na mesma hora que grava um dado no 
        localStorage ele ja é carregado quando o modal é acionado
