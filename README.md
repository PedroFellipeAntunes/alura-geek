# ProdutosGeek

Projeto feito para o curso web front-end da Alura. ProdutosGeek é uma aplicação web simples para gerenciamento de produtos. O projeto é ideal para quem está aprendendo a trabalhar com operações de CRUD (Create, Read, Update, Delete) utilizando JavaScript e um backend simulado.

## Descrição do Projeto

A aplicação permite que o usuário visualize, adicione e remova produtos de uma lista, integrando uma interface front-end com operações assíncronas em um backend. Os principais recursos incluem:

- **Visualização de produtos**: Uma lista de produtos é exibida, com informações como nome, valor (convertido para formato monetário brasileiro) e imagem.
- **Adição de novos produtos**: Os usuários podem adicionar produtos preenchendo um formulário com os campos: nome, valor e URL da imagem.
- **Remoção de produtos**: Cada produto exibido na lista possui um botão para remoção, que realiza a exclusão no backend.
- **Interatividade**: A interface é atualizada dinamicamente com as operações realizadas.

### Estrutura do Front-End

- **HTML**: Estrutura básica da interface, contendo uma seção para exibir os produtos e um formulário para adicionar novos.
- **CSS**: Design simples para organizar os elementos visuais.
- **JavaScript**: Funções que conectam o front-end ao backend, lidando com chamadas HTTP para listar, adicionar e remover produtos.

### Funcionalidades Técnicas

- **CRUD**:
  - `GET`: Busca a lista de produtos do backend e renderiza na página.
  - `POST`: Adiciona um novo produto ao backend e atualiza a lista exibida.
  - `DELETE`: Remove um produto do backend e reflete a alteração na interface.
- **Conversão de valores**:
  - Os valores dos produtos são manipulados em centavos para evitar problemas de precisão e convertidos para o formato `R$` no front-end.
- **Formulário Dinâmico**:
  - Campos de entrada validados para nome, valor e URL da imagem.
  - Botão para limpar os campos do formulário após a submissão.

### Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Fetch API**
- **JSON Server** (simulação de backend)
