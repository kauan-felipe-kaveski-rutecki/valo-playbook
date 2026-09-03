# ValoPlaybook

### **Autor:** Kauan Felipe Kaveski Rutecki

O **ValoPlaybook** é uma aplicação web desenvolvida com o objetivo de simplificar o aprendizado e a evolução tática de jogadores iniciantes e intermediários do jogo **Valorant**.

A aplicação permite que o usuário pesquise agentes, armas e mapas do jogo, consulte suas informações oficiais e monte um painel de estudo personalizado focando nos seus mapas de maior dificuldade.

O frontend da aplicação será desenvolvido utilizando **HTML, CSS e JavaScript**, com suporte de um **Framework CSS** (Bootstrap ou Tailwind CSS) para a construção da interface e layout responsivo.

Os dados são consumidos em tempo real da **Valorant-API** pública, e a persistência de preferências do jogador é realizada via **LocalStorage**.

---

## 📚 Documentação do Projeto

Para entender o propósito, escopo e estrutura técnica da aplicação, consulte os documentos abaixo:

* [📄 Product Requirements Document (PRD)](./docs/prd.md) — Descrição do sistema, objetivo, atores e histórias de usuário.
* [🛠️ Especificação Técnica](./docs/architecture.md) — Modelo de dados e relacionamentos das entidades da aplicação.
* [🎨 Design System](#) — Identidade visual, cores, tipografia e padrões de componentes. *(em breve)*
* [🖼️ Protótipo no Figma](#) — Protótipo das principais telas da aplicação.

---

## 🎨 Design

O projeto contará com uma interface visual inspirada no universo do Valorant, priorizando clareza, acessibilidade e responsividade entre dispositivos.

O protótipo das interfaces será desenvolvido no **Figma**, contemplando as versões:

* 📱 Mobile
* 💻 Desktop

### Protótipo no Figma

*(link será adicionado posteriormente)*

---

## 🌐 Site em Produção

**Ainda em desenvolvimento.**

O projeto será disponibilizado posteriormente por meio do GitHub Pages.

---

## 💻 Tecnologias e Dependências

### Frontend

* **HTML5** — Estrutura semântica das páginas.
* **CSS3** — Estilização complementar, Flexbox, Grid e variáveis CSS.
* **JavaScript (ES6+)** — Lógica de aplicação, manipulação do DOM e requisições assíncronas.
* **Framework CSS** — Framework utilizado para componentes e layout responsivo.

### Consumo de Dados & Persistência

* **Valorant-API** — API REST pública oficial para consulta de dados de agentes, mapas e armas.
* **LocalStorage** — Persistência de dados cadastrais e preferências de estudo no navegador.
* **Mock JSON** — Dados estáticos para curadoria de VODs e dicas táticas.

### Ferramentas de desenvolvimento

* **Git**
* **GitHub**
* **VS Code**

---

## 🗂️ Estrutura do Projeto

```text
valo-playbook/
│
├── docs/
│   ├── prd.md
│   └── architecture.md
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── pages/
├── index.html
└── README.md
```

A organização poderá ser ajustada durante o desenvolvimento, mantendo o princípio de modularização e separação de responsabilidades.

---

## 🚀 Manual de Execução

### 1. Clonar o repositório

```bash
git clone [https://github.com/seu-usuario/valo-playbook.git](https://github.com/seu-usuario/valo-playbook.git)
```

### 2. Acessar o diretório do projeto

```bash
cd valo-playbook
```

### 3. Executar o frontend

O frontend poderá ser executado utilizando a extensão **Live Server** do Visual Studio Code ou abrindo diretamente o arquivo `index.html` em seu navegador.

---

## 📱 Funcionalidades

As principais funcionalidades previstas para o ValoPlaybook são:

* 🔎 Pesquisa e consulta completa de agentes, armas e mapas via Valorant-API.
* 🎯 Filtragem de armas por categoria e mapas por perfil de jogo.
* 📝 Formulário de cadastro de usuário com validação de dados.
* 🔐 Autenticação e login de usuários na plataforma.
* 📌 Mapeamento e seleção dos mapas em que o jogador possui maior dificuldade.
* 🎥 Central de estudos com dicas táticas e VODs recomendados.
* 💾 Persistência de dados do usuário e preferências via LocalStorage.
* 📱 Interface responsiva para mobile e desktop.

---

## 📝 Checklist | Indicadores de Desempenho

### RA1 — Documentação, Versionamento e Estrutura

* [x] ID 01 — Criar repositório público no GitHub seguindo o padrão *dashed-case*.
* [x] ID 02 — Documentar a ideia do projeto, atores e Histórias de Usuário no arquivo `docs/prd.md`.
* [x] ID 03 — Documentar o Modelo de Dados e Diagrama ER Mermaid no arquivo `docs/architecture.md`.
* [ ] ID 04 — Manter o arquivo `README.md` atualizado com a apresentação e o checklist dos 24 IDs.
* [ ] ID 05 — Manter o histórico de commits frequente, claro e organizado.

### RA2 — HTML5 Semântico e Organização do Projeto

* [ ] ID 06 — Utilizar tags semânticas do HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`).
* [ ] ID 07 — Estruturar a aplicação em pelo menos 3 páginas HTML interligadas e funcionais.
* [ ] ID 08 — Configurar adequadamente as *meta tags* essenciais (`charset`, `viewport`, `title`, `description`).
* [ ] ID 09 — Organizar a estrutura de pastas do projeto de forma limpa (`css/`, `js/`, `assets/`, `docs/`).

### RA3 — CSS3, Responsividade e Framework Visual

* [ ] ID 10 — Definir uma identidade visual coesa com paleta de cores, tipografia e espaçamentos padronizados.
* [ ] ID 11 — Utilizar recursos de layout moderno com CSS Grid e/ou Flexbox.
* [ ] ID 12 — Aplicar responsividade para navegação em dispositivos móveis (*Mobile First* / *Media Queries*).
* [ ] ID 13 — Utilizar variáveis CSS (*CSS Custom Properties*) ou reutilização de classes utilitárias.
* [ ] ID 14 — Integrar e utilizar um Framework CSS ou metodologia de estilização no projeto.

### RA4 — Formulários e Validações

* [ ] ID 15 — Implementar formulário de cadastro de usuário com diferentes tipos de `input` e validação visual.
* [ ] ID 16 — Implementar formulário de login/autenticação funcional.
* [ ] ID 17 — Implementar formulário ou controle interativo para seleção de mapas de maior dificuldade pelo usuário.

### RA5 — Consumo de APIs e Manipulação do DOM

* [ ] ID 18 — Consumir dados assíncronos da **Valorant-API** utilizando Fetch API ou biblioteca equivalente.
* [ ] ID 19 — Renderizar elementos dinamicamente na tela com base na resposta da API externa.
* [ ] ID 20 — Tratar estados de carregamento (*loading*) e cenários de erro nas requisições da API.
* [ ] ID 21 — Utilizar dados estáticos/simulados (Mock JSON) para exibir dicas táticas e VODs recomendados.
* [ ] ID 22 — Simular a persistência de preferências do usuário logado através do `LocalStorage`.

### RA6 — Acessibilidade e Publicação

* [ ] ID 23 — Aplicar boas práticas de acessibilidade (atributos `alt`, contraste adequado de cores e navegação acessível).
* [ ] ID 24 — Realizar o *deploy* e disponibilizar a aplicação em ambiente de hospedagem web (GitHub Pages/Vercel).

---

## 📌 Status

**Em desenvolvimento.**

O escopo e as funcionalidades poderão ser refinados conforme o desenvolvimento do projeto e os requisitos da disciplina.
