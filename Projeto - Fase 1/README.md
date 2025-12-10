# 🎬 Catálogo de Séries

Projeto desenvolvido como parte da **Fase 1** da disciplina **Desenvolvimento Front-End** do curso de **Análise e Desenvolvimento de Sistemas – PUCRS**.

O objetivo é criar uma aplicação **React** para **cadastrar, listar, editar e excluir séries**, com navegação entre páginas e componentização organizada.

---

## 🚀 Como executar o projeto

### 1️⃣ Pré-requisitos
- Node.js instalado  
- npm (gerenciador de pacotes)

### 2️⃣ Instalar as dependências
```bash
npm install
```

### 3️⃣ Executar o projeto
```bash
npm run dev
```

Após executar o comando, abra o navegador no link exibido no terminal, normalmente:  
👉 **http://localhost:5173**

---

## 🧪 Execução de testes

⚠️ Este projeto **não possui testes automatizados** nesta fase.  
Os testes foram realizados **manualmente**, verificando:

- Cadastro de uma nova série  
- Edição de uma série existente  
- Exclusão de uma série  
- Navegação entre as páginas **Home**, **Sobre**, **Cadastro** e **Listagem**

---

## 🧩 Descrição dos componentes

### 🧭 NavBar
Barra de navegação superior da aplicação.  
Contém links para as páginas **Início**, **Sobre**, **Cadastro** e **Listagem**.

### 🏠 Home
Página inicial que recepciona o usuário e orienta sobre o funcionamento do sistema.

### ℹ️ Sobre
Página informativa explicando o propósito do projeto e suas funcionalidades.

### 📝 SerieForm
Formulário para cadastro de séries, com os seguintes campos obrigatórios:

- Título  
- Número de Temporadas  
- Data de Lançamento  
- Diretor  
- Produtora  
- Categoria  
- Data em que assistiu

### 📃 SerieList
Exibe todas as séries cadastradas, com botões de **Editar** e **Excluir**.  
A edição pode ser feita diretamente nos campos e confirmada com o botão **Salvar**.

---

## 🧠 Decisões de desenvolvimento

- Projeto criado com **Vite**, garantindo performance e simplicidade.  
- Utilização do **React Router DOM** para gerenciar as rotas.  
- Dados armazenados em **estado local (useState)**, conforme o escopo do projeto.  
- Estrutura organizada em pastas dentro de `src/components`.  
- Estilos criados em **NavBar.css** para uma navegação consistente.

---

## 📸 Visual do projeto

![Home](./picture/home.png) 

---

## 👨‍💻 Autor

**Dionatan Castro**  
Estudante de **Análise e Desenvolvimento de Sistemas – PUCRS**
