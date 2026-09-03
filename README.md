# 🎯 ValoPlaybook

> Guia tático de Valorant com consulta de agentes, armas e mapas via Valorant-API e área de estudo de desempenho para iniciantes.

---

## 👤 Autor
- **Nome:** Kauan Felipe Kaveski Rutecki
- **Curso:** Tecnologia em Análise e Desenvolvimento de Sistemas
- **Instituição:** UTFPR - Câmpus Guarapuava
- **Repositório:** `valo-playbook`

---

## 📌 Sobre o Projeto
O **ValoPlaybook** é uma aplicação web desenvolvida como laboratório prático para a disciplina de Frameworks e CSS. A plataforma visa simplificar o aprendizado de jogadores iniciantes e intermediários de Valorant, exibindo dados oficiais consumidos da **Valorant-API** e fornecendo uma área logada personalizada para mapeamento de dificuldades e estudo de mapas.

---

## 📚 Documentação do Projeto
Para entender o propósito, escopo e estrutura técnica da aplicação, consulte os documentos abaixo:
- 📄 [Product Requirements Document (PRD)](docs/prd.md) — Descrição do sistema, objetivo, atores e histórias de usuário.
- 🛠️ [Especificação Técnica](docs/architecture.md) — Modelo de dados, diagrama ER e detalhamento das entidades.

---

## 🌐 Site em Produção
*Status:* Em desenvolvimento.  
A aplicação será disponibilizada publicamente através do **GitHub Pages**.

---

## 💻 Tecnologias e Dependências

### Frontend
- **HTML5** — Estruturação semântica das páginas.
- **CSS3** — Estilização personalizada, Flexbox, CSS Grid e variáveis CSS.
- **JavaScript (ES6+)** — Lógica de aplicação e manipulação do DOM.
- **Framework CSS** — Framework responsivo (Bootstrap ou Tailwind CSS) para auxílio na interface.

### Consumo de Dados & Persistência
- **Valorant-API** — API REST pública oficial para consulta de mapas, agentes e armas.
- **LocalStorage** — Persistência de dados do usuário e preferências de estudo no navegador.
- **Mock JSON** — Dados estáticos estruturados para curadoria de VODs e dicas táticas.

### Ferramentas de Desenvolvimento
- **Git & GitHub** — Controle de versão e hospedagem do código-fonte.
- **VS Code** — Editor de código-fonte.

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

📱 Funcionalidades
🔎 Consulta Geral: Catálogo completo de agentes, armas e mapas via Valorant-API.

🎯 Filtros Táticos: Filtragem de armas por categoria e mapas por perfil de jogo.

📝 Cadastro e Autenticação: Formulários com validação para criação de conta e login.

📌 Mapeamento de Dificuldades: Painel restrito para o jogador registrar seus mapas de menor desempenho.

🎥 Central de Estudos: Exibição de VODs e dicas táticas personalizadas para os mapas selecionados.

💾 Persistência Local: Armazenamento das preferências do usuário via LocalStorage.

📝 Checklist | Indicadores de Desempenho (24 IDs)
RA1 — Documentação, Versionamento e Estrutura
[x] ID01 - Criar repositório público no GitHub seguindo o padrão dashed-case.

[x] ID02 - Documentar a ideia do projeto, atores e Histórias de Usuário no arquivo docs/prd.md.

[x] ID03 - Documentar o Modelo de Dados e Diagrama ER Mermaid no arquivo docs/architecture.md.

[ ] ID04 - Manter o arquivo README.md atualizado com a apresentação e o checklist dos 24 IDs.

[ ] ID05 - Manter o histórico de commits frequente, claro e organizado.

RA2 — HTML5 Semântico e Organização do Projeto
[ ] ID06 - Utilizar tags semânticas do HTML5 (header, nav, main, section, article, footer).

[ ] ID07 - Estruturar a aplicação em pelo menos 3 páginas HTML interligadas e funcionais.

[ ] ID08 - Configurar adequadamente as meta tags essenciais (charset, viewport, title, description).

[ ] ID09 - Organizar a estrutura de pastas do projeto de forma limpa (css/, js/, assets/, docs/).

RA3 — CSS3, Responsividade e Framework Visual
[ ] ID10 - Definir uma identidade visual coesa com paleta de cores, tipografia e espaçamentos padronizados.

[ ] ID11 - Utilizar recursos de layout moderno com CSS Grid e/ou Flexbox.

[ ] ID12 - Aplicar responsividade para navegação em dispositivos móveis (Mobile First / Media Queries).

[ ] ID13 - Utilizar variáveis CSS (CSS Custom Properties) ou reutilização de classes utilitárias.

[ ] ID14 - Integrar e utilizar um Framework CSS ou metodologia de estilização no projeto.

RA4 — Formulários e Validações
[ ] ID15 - Implementar formulário de cadastro de usuário com diferentes tipos de input e validação visual.

[ ] ID16 - Implementar formulário de login/autenticação funcional.

[ ] ID17 - Implementar formulário ou controle interativo para seleção de mapas de maior dificuldade pelo usuário.

RA5 — Consumo de APIs e Manipulação do DOM
[ ] ID18 - Consumir dados assíncronos da Valorant-API utilizando Fetch API ou biblioteca equivalente.

[ ] ID19 - Renderizar elementos dinamicamente na tela com base na resposta da API externa.

[ ] ID20 - Tratar estados de carregamento (loading) e cenários de erro nas requisições da API.

[ ] ID21 - Utilizar dados estáticos/simulados (Mock JSON) para exibir dicas táticas e VODs recomendados.

[ ] ID22 - Simular a persistência de preferências do usuário logado através do LocalStorage.

RA6 — Acessibilidade e Publicação
[ ] ID23 - Aplicar boas práticas de acessibilidade (atributos alt, contraste adequado de cores e navegação acessível).

[ ] ID24 - Realizar o deploy e disponibilizar a aplicação em ambiente de hospedagem web (GitHub Pages/Vercel).

📌 Status
Em desenvolvimento.
