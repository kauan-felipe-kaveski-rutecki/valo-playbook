# 📐 Especificação Técnica — ValoPlaybook

## 1. Visão Geral do Sistema
O **ValoPlaybook** é um guia tático e central de estudos interativa para jogadores de Valorant. O sistema permite consultar agentes, mapas, habilidades e rotinas de treino, além de gerenciar um painel de estudo personalizado no navegador.

---

## 2. Dependências & Especificações de Software

### 2.1 Framework CSS
- **Framework**: Bootstrap
- **Versão Exata**: `v5.3.3`
- **Licença**: MIT
- **Método de Integração**: CDN (Content Delivery Network)
- **Links Oficiais**:
  - CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
  - JS Bundle: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
- **Componentes Bootstrap Utilizados**: Grid System, Navbar, Cards, Nav-pills, Nav-tabs, Form Controls, Badges, Offcanvas/Modais.
- **Regra de Estilo**: Uso exclusivo de componentes e utilitários do Bootstrap 5. Estritamente proibida a adição de bibliotecas baseadas em Tailwind CSS.

### 2.2 API Pública Externa
- **Nome**: Valorant-API
- **Domínio**: `valorant-api.com`
- **Versão da API**: `v1`
- **URL Base**: `https://valorant-api.com/v1`
- **Autenticação**: Aberta / Não requer API Key
- **Formato de Dados**: JSON (UTF-8)
- **Endpoints Mapeados**:
  - `GET /agents?language=pt-BR` — Obtém a lista de agentes, biografias, papéis (Duelista, Iniciador, etc.) e ícones de habilidades.
  - `GET /maps` — Obtém a lista de mapas do jogo e suas artes promocionais.
  - `GET /weapons` — Obtém dados do arsenal, categorias de armas e métricas básicas.

---

## 3. Design System e Regras de Layout

### 3.1 Paleta de Cores (Inspirada em Tracker.gg)
- **Background Principal**: `#0E1217` (Navy Escuro)
- **Superfície dos Cards**: `#18222D` (Slate Navy)
- **Bordas & Divisores**: `#24303F` (Linhas finas de 1px)
- **Cor Primária / Destaque**: `#FF4655` (Vermelho Valorant)
- **Métricas / Destaque Positivo**: `#00F5A0` (Verde Tático)
- **Texto Principal**: `#FFFFFF` (Branco)
- **Texto Muted / Secundário**: `#8F9CAE` (Cinza Muted)

### 3.2 Estrutura Responsiva
- **Mobile (< 992px)**: 
  - Header compacto no topo com logo e busca.
  - Barra de navegação principal fixada no rodapé (`fixed-bottom d-lg-none`).
- **Desktop (>= 992px)**: 
  - Navbar superior expandida (`navbar-expand-lg d-none d-lg-flex`) contendo busca e links do sistema.
  - Ocultação automática da navegação inferior via classes utilitárias do Bootstrap (`d-none d-lg-flex`).

---

## 4. Mapeamento de Telas da Aplicação

1. **`index.html` (Home / Catálogo)**:
   - Hero banner introdutório e navegação por abas (`nav-pills`).
   - Grid adaptável (`col-12 col-sm-6 col-lg-3`) exibindo cards de agentes e mapas consumidos da API.

2. **`detalhes.html` (Visão Detalhada de Agente/Mapa)**:
   - Header com imagem em alta resolução e métricas táticas.
   - Grid 2x2 com cards de estatísticas (Pick Rate, Win Rate, Damage/Round).
   - Lista de habilidades com ícones dinâmicos.

3. **`login.html` (Autenticação)**:
   - Card centralizado com formulários de entrada e cadastro.
   - Alternância entre formulários usando `nav-tabs` nativo do Bootstrap.

4. **`dashboard.html` (Central de Estudos do Jogador)**:
   - Card de perfil com nickname, elo e avatar do jogador.
   - Lista de mapas com maior taxa de dificuldade e campo de anotações persistido localmente via `localStorage`.
