# 🎬 Catálogo de Séries --- Fase 1 (PUCRS)

Aplicação desenvolvida para a **disciplina de Desenvolvimento
Front-End**, no curso de **ADS -- PUCRS**.

O projeto consiste em um catálogo onde é possível **cadastrar, listar,
editar e excluir séries**, utilizando React, componentização e uma API
Node.js local para persistência dos dados.

------------------------------------------------------------------------

# 🚀 Como executar o projeto (Front-end)

## 1️⃣ Pré-requisitos

-   **Node.js** instalado (versão 18+ recomendada)
-   **npm** instalado

## 2️⃣ Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/catalogo-series.git
cd catalogo-series
```

## 3️⃣ Instalar dependências

``` bash
npm install
```

## 4️⃣ Executar o front-end

``` bash
npm run dev
```

A aplicação estará disponível em:

👉 **http://localhost:5173**

------------------------------------------------------------------------

# 🔌 Como executar a API (Back-end)

O projeto utiliza uma API local construída em **Node.js + Express**.

## 📂 Caminho da API

A API fica dentro da pasta:

    /api

## ▶️ Para iniciar a API

1.  Acesse a pasta:

``` bash
cd api
```

2.  Instale as dependências:

``` bash
npm install
```

3.  Inicie a API:

``` bash
node server.js
```

A API ficará disponível em:

👉 **http://localhost:5000**

------------------------------------------------------------------------

# 🧪 Execução de Testes (Vitest + Testing Library)

O projeto possui testes automatizados para: - NavBar\
- SerieForm\
- SerieList

Para rodar os testes:

``` bash
npm run test
```

------------------------------------------------------------------------

# 🧩 Estrutura da aplicação

📁 src/
│
├── 📁 components/
│ │
│ ├──   📁 NavBar/
│ │ ├──  NavBar.css
│ │ ├──  NavBar.jsx
│ │ └──  NavBar.test.jsx
│ │
│ ├──   📁 SerieForm/
│ │ ├──  SerieForm.jsx
│ │ └──  SerieForm.test.jsx
│ │
│ └──   📁 SerieList/
│   ├──  SerieList.jsx
│   └──  SerieList.test.jsx
│
├── 📁 pages/
│ ├── Home.jsx
│ └── Sobre.jsx
│
├── 📁 service/
│ └── api.js
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── setupTests.js

------------------------------------------------------------------------

# 📃 Descrição dos componentes

### 🧭 NavBar

-   Barra de navegação superior.
-   Links: **Home**, **Sobre**, **Cadastrar**, **Listar Séries**.

------------------------------------------------------------------------

### 🏠 Home

-   Página inicial e informativa da aplicação.

------------------------------------------------------------------------

### ℹ️ Sobre

-   Página explicando propósito e tecnologias utilizadas.

------------------------------------------------------------------------

### 📝 SerieForm

Formulário usado para **cadastrar** ou **editar** séries.

Campos: - Título\
- Temporadas\
- Data de Lançamento\
- Diretor\
- Produtora\
- Categoria\
- Data em que assistiu

------------------------------------------------------------------------

### 📃 SerieList

Lista todas as séries cadastradas.

Funcionalidades: - Editar - Excluir - Navegar para cadastro

------------------------------------------------------------------------

# 🧠 Decisões de desenvolvimento

-   Criado com **Vite** pela performance.
-   Uso de **React Router DOM** para rotas.
-   Componentização organizada em pastas.
-   **Axios** para consumir a API.
-   API construída com **Express + fs**, garantindo persistência local.

------------------------------------------------------------------------

# 🖼️ Imagens do projeto

![Tela Inicial](./pictures/inicio.png)

![Sobre](./pictures/sobre.png)

![Formulário de Cadastro](./pictures/cadastrar.png)

![Listagem de Séries](./pictures/listagem.png)

![Estrutura](./pictures/arquivos.png)

------------------------------------------------------------------------

# 👨‍💻 Autor

**Dionatan Castro**\
Estudante de Análise e Desenvolvimento de Sistemas -- PUCRS\
Projeto desenvolvido para fins acadêmicos.

------------------------------------------------------------------------
