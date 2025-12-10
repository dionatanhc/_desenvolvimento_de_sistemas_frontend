# 🎬 Catálogo de Séries

Este projeto foi desenvolvido como parte da **Fase 1** da disciplina de **Desenvolvimento Front-End**, do curso de **Análise e Desenvolvimento de Sistemas da PUCRS**.

O objetivo é criar uma aplicação React para **cadastrar, listar, editar e excluir séries**, com navegação entre páginas e componentização adequada.

---

## 🚀 **Como executar o projeto**

### 1️⃣ Pré-requisitos
- Node.js instalado
- npm (gerenciador de pacotes)

### 2️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/catalogo-series.git
cd catalogo-series

### 3️⃣ Instalar as dependências
npm install

### 4️⃣ Executar o projeto
npm run dev

Após executar o comando, abra o navegador pelo link que aparecerá no terminal. Provavelmente será o http://localhost:5173

### 🧪 Execução de testes

⚠️ Este projeto não possui testes automatizados implementados nesta fase.
Os testes são realizados manualmente, navegando entre as páginas e validando as funcionalidades:

Cadastro de uma nova série

Edição de uma série existente

Exclusão de uma série

Navegação entre Home, Sobre, Cadastro e Listagem

### 🧩 Descrição dos componentes
🧭 NavBar

Componente responsável pela barra de navegação superior da aplicação.
Contém links para as páginas: Início, Sobre, Cadastro e Listagem.

🏠 Home

Página inicial que recepciona o usuário e orienta a navegação no sistema.

ℹ️ Sobre

Página informativa explicando o propósito do projeto e suas funcionalidades.

📝 SerieForm

Formulário de cadastro de séries.
Permite adicionar os seguintes campos obrigatórios:

Título

Número de Temporadas

Data de Lançamento

Diretor

Produtora

Categoria

Data em que assistiu

📃 SerieList

Lista todas as séries cadastradas e oferece botões de Editar e Excluir.
A edição pode ser feita diretamente nos campos, e o botão “Salvar” confirma as alterações.

### 🧠 Decisões de desenvolvimento

O projeto foi criado com Vite para garantir performance e simplicidade de configuração.

A biblioteca React Router DOM foi utilizada para gerenciar as rotas entre as páginas.

Os dados das séries são armazenados em estado local (useState), atendendo ao requisito de manipulação estática.

Cada componente foi separado em pastas específicas dentro de src/components para manter uma estrutura organizada.

O CSS do menu de navegação foi criado separadamente (NavBar.css) para estilizar o layout principal.

### 👨‍💻 Autor
Dionatan Castro
Estudante de Análise e Desenvolvimento de Sistemas – PUCRS