# valo-playbook

### **Autor:** Kauan Felipe Kaveski Rutecki

Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web inspirada em um guia tático de Valorant, sendo o diferencial a criação de um painel de estudo personalizado, focando nos mapas e situações de maior dificuldade registradas pelo próprio jogador.

O frontend da aplicação foi desenvolvido com HTML5, Sass (SCSS), Bootstrap 5, JavaScript e jQuery. Os dados oficiais do jogo são consumidos de forma dinâmica através da integração com uma API pública (**Valorant-API**), enquanto o backend/banco de dados é simulado utilizando **JSON Server (`db.json`)** para persistência dos registros e **Web Storage (`localStorage` / `sessionStorage`)** para controle de sessão do usuário no navegador.

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

- [📄 Product Requirements Document (PRD)](./docs/prd.md) — Visão geral, atores, histórias de usuário e critérios de aceitação.
- [📐 Arquitetura e Especificação Técnica](./docs/architecture.md) — Stack tecnológica, DER, dicionário de dados, rotas de API e estrutura inicial do `db.json`.

## 🎨 Design

- [🎨 Design System](./docs/design-system.md) — Identidade visual (*Tactical Dark Ops*), paleta de cores, tipografia (`Inter` e `JetBrains Mono`) e mapeamento de componentes Bootstrap.
- [🖼️ Protótipo Interativo no Stitch](https://stitch.withgoogle.com/projects/6512120559904811507) — Telas responsivas e navegação da aplicação.

## 🌐 Site em Produção - GitHub Pages

*(Link será disponibilizado posteriormente após o deploy)*

## 💻 Tecnologias e Dependências

- **Framework CSS & Ícones:** Bootstrap (`v5.3.3`) e Bootstrap Icons (`v1.13.1`)
- **Pré-processador CSS:** Sass (`sass` via NPM) com arquitetura modular (`_variables.scss`, `_mixins.scss`, `_layout.scss` e `main.scss`)
- **Otimização de Mídia:** Imagens responsivas em formato `.webp` com `<picture>` e `srcset`
- **Bibliotecas JavaScript:** jQuery (`v3.7.1`) e jQuery Mask Plugin (`v1.14.16`)
- **Qualidade de Código:** ESLint (`v9`) e Prettier (`v3`)
- **API Pública Externa:** Valorant-API (`v1`)
- **JavaScript & Persistência:**
  - **Fetch API** — Para realizar requisições assíncronas à Valorant-API e à API local.
  - **JSON Server** — Para simular a API REST e persistir os dados no arquivo `db.json`.
  - **Web Storage (`localStorage` e `sessionStorage`)** — Para manter a sessão do usuário autenticado localmente.

### 💡 Justificativa das Escolhas

- **Framework CSS — Bootstrap 5.3.3**:
  A escolha do Bootstrap 5 se deve à sua maturidade, excelente suporte à abordagem *mobile-first* e biblioteca robusta de componentes prontos (cards, navbars, offcanvas, modais, tabs e collapse). Possui licença MIT amigável e é mantido ativamente no GitHub, garantindo estabilidade e facilidade de manutenção.

- **Pré-processador CSS — Sass (SCSS)**:
  Utilizado para centralizar os tokens do Design System (*Tactical Dark Ops*) em variáveis, criar mixins reutilizáveis para superfícies e bordas táticas e aplicar funções de espaçamento, gerando um CSS final limpo e padronizado em `assets/css/main.css`.

- **API Pública — Valorant-API (`valorant-api.com`)**:
  Para alimentar o *ValoPlaybook* com dados reais do jogo, foi selecionada a **Valorant-API**. Ela é uma API pública e gratuita que não exige chave de autenticação (API Key) para consumo básico. Fornece endpoints completos com dados atualizados a cada patch do jogo (agentes, funções, habilidades e imagens) em formato JSON com suporte a `pt-BR`.

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

#### RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.

- [x] ID 01 - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design tradicionais (Figma, Quant UX ou Sketch) ou IA (Stitch).
- [x] ID 02 - Implementa layout responsivo com Framework CSS (Bootstrap, Materialize, Tailwind + DaisyUI) usando Flexbox ou Grid do próprio framework.
- [x] ID 03 - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [x] ID 04 - Utiliza componentes prontos de um Framework CSS (ex.: card, button) e componentes JavaScript do framework (ex.: modal, carousel).
- [x] ID 05 - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem) no lugar de unidades fixas (px).
- [x] ID 06 - Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
- [x] ID 07 - Utiliza Sass (SCSS) com ou sem framework, aplicando variáveis, mixins e funções para modularizar o código.
- [x] ID 08 - Aplica tipografia responsiva (media queries mobile first) ou tipografia fluida (função clamp() + unidades relativas).
- [x] ID 09 - Aplica técnicas de responsividade de imagens usando CSS (object-fit, containers com unidades relativas).
- [x] ID 10 - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo (srcset, picture, ou parâmetros do Cloudinary).

#### RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente.

- [x] ID 11 - Implementa validação HTML nativa (campos obrigatórios, tipos, limites de caracteres) com mensagens de erro/sucesso no lado cliente.
- [x] ID 12 - Aplica expressões regulares (REGEX) para validações customizadas (e-mail, telefone, datas, etc.)
- [x] ID 13 - Utiliza elementos de seleção em formulários (checkbox, radio, select) para coleta de dados.
- [x] ID 14 - Implementa leitura e escrita no Web Storage (localStorage/sessionStorage) para persistir dados localmente.

#### RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web.

- [x] ID 15 - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
- [x] ID 16 - Utiliza boas práticas de versionamento no Git/GitHub (branch main ou branches específicos, uso de .gitignore).
- [x] ID 17 - Mantém um README.md padronizado, conforme template da disciplina, com checklist preenchido.
- [x] ID 18 - Organiza arquivos do projeto de forma modular, seguindo padrão de exemplo fornecido.
- [x] ID 19 - Configura linters e formatadores (ESLint, Prettier) para manter qualidade e padronização do código.

#### RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade de páginas web.

- [x] ID 20 - Utiliza jQuery para manipulação do DOM e interatividade (eventos, animações, manipulação de elementos)
- [x] ID 21 - Integra e configura um plugin jQuery relevante (ex.: jQuery Mask Plugin).

#### RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas, permitindo a obtenção e manipulação de dados dinamicamente.

- [x] ID 22 - Realiza requisições assíncronas para uma API fake (ex.: JSON Server) para persistir dados de um formulário.
- [x] ID 23 - Realiza requisições assíncronas para uma API fake para exibir dados na página.
- [x] ID 24 - Realiza requisições assíncronas para APIs públicas reais (OpenWeather, ViaCEP etc.), exibindo os dados e tratando erros.

## 🚀 Manual de execução

1. Clonar o repositório e instalar as dependências:
   ```bash
   git clone https://github.com/kauan-felipe-kaveski-rutecki/valo-playbook.git
   cd valo-playbook
   npm install