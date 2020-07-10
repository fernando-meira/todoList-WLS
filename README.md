<center>![WLS Soluções](https://wlssistemas.com.br/wp-content/uploads/2020/06/wls-face.png)</center>

# Projeto

O Projeto mostra uma lista de tarefas, onde é possível criar, excluir e listar tarefas. No desafio precisamos fazer consumo de API.

- Tempo levado para finalizar: 8horas 10m

### Melhorias

- O projeto pode ter melhoria em relação a usabilidade e pode ser feita uma chamada utilizando o método PUT para edição das tarefas.

## Starting locally

Execute o seguinte comando no terminal para clonar o projeto:

     $ git clone https://github.com/fernando-meira/todoList-WLS.git

Para a instalação das dependências digite:

    yarn

Inicie o projeto com o comando:

    yarn start

## Built With

- [ReactJS](https://github.com/facebook/react) - Biblioteca utilizada para criar a interface da aplicação.
- [Context API](https://pt-br.reactjs.org/docs/context.html) - Contexto (context) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

- [Axios](https://github.com/axios/axios) - Utilizado para requisições Ajax e por algumas vantagens em relação a biblioteca padrão do navegador(fetch). Exemplo a definição de uma baseURL para repetir em todas as requisições.

- [PropTypes](https://github.com/facebook/prop-types) - Biblioteca declarativa, utilizada para auxiliar na criação da interface.
- [React Icons](https://github.com/react-icons/react-icons) - Um dos pacotes de ícones mais populares para React.
- [Styled Components](https://styled-components.com/) - Toda estilização da aplicação foi feita com Styled Components devido a grande gama de opções que a biblioteca disponibiliza.
- [Styled Media Query](https://www.npmjs.com/package/styled-media-query) - Utilizado para a responsividade da aplicação, como possui breakpoints definidos facilitou o desenvolvimento, quando necessário a lib ainda me permitiu criar meus próprios breakpoints.
- [React Custom Scrollbars](https://www.npmjs.com/package/react-custom-scrollbars) - Para scroll customizado da aplicação.
- [uuidv4](https://www.npmjs.com/package/uuidv4) - Criação de id's unicos na aplicação.

## Workspace

- [Yarn](https://yarnpkg.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitizen](https://github.com/commitizen/cz-cli)

# Teste Front

Tarefas
Lista dos métodos disponíveis.

> Método: [GET](https://tarefas.viniciuss.dev/api/tarefas)

Lista todas as tarefas.

> Método: [POST](https://tarefas.viniciuss.dev/api/tarefas)

Cria uma nova tarefa.

JSON exemplo:

```
    {
        "titulo" : "tarefa 1",
        "descricao" : "descrição tarefa 1",
        "concluido" : 0
    }
```

> Método: [DELETE](https://tarefas.viniciuss.dev/api/tarefas/id)

> Link ex.: https://tarefas.viniciuss.dev/api/tarefas/5

Remove a tarefa com o id que foi passado.

> Método: [PUT](https://tarefas.viniciuss.dev/api/tarefas/id)

> Link ex.: https://tarefas.viniciuss.dev/api/tarefas/1

Altera tarefa com o id informado.

JSON exemplo:
```
    {
        "titulo" : "Tarefa Um",
        "descricao" : "Descrição alterada",
        "concluido" : 1
    }
```
