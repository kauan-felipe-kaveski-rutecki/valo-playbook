# Design System — ValoPlaybook (Tactical Dark Ops)

Este documento define a identidade visual, tokens de design e o mapeamento de componentes para o **Bootstrap 5.3.3** utilizados no **ValoPlaybook**.

---

## 1. Paleta de Cores

A interface adota um tema escuro (*Dark Mode*) de alto contraste inspirado no universo tático de *Valorant* e em plataformas de estatísticas como o *Tracker.gg*.

| Token / Papel | Cor | Hexadecimal | Uso na Interface |
| :--- | :--- | :--- | :--- |
| **Primary** | Vermelho Tático | `#FF4655` | Botões de ação principal (CTA), estados ativos, alertas críticos e destaques da marca. |
| **Secondary** | Verde Neon | `#00F5A0` | Indicadores positivos, taxas de vitória (*winrate*), status de progresso e métricas concluídas. |
| **Tertiary** | Verde Esmeralda | `#009F78` | Elementos de suporte, ícones secundários, estados intermediários e badges de confirmação. |
| **Neutral (Background)** | Preto Azulado Profundo | `#0B0E14` / `#0E1217` | Fundo principal das páginas (`body`). |
| **Neutral (Surface)** | Cinza Grafite Escuro | `#18222D` | Fundo de cards, modais, barras de navegação e contêineres elevados. |
| **Text Primary** | Branco Gelo | `#F8F9FA` | Títulos, cabeçalhos e textos de leitura principal. |
| **Text Muted** | Cinza Neutro | `#94A3B8` | Subtítulos, placeholders, legendas e metadados secundários. |

---

## 2. Tipografia

O projeto combina uma fonte sem serifa geométrica para legibilidade em telas com uma fonte monoespaçada para dados técnicos, estatísticas e etiquetas táticas.

* **Headline & Body — `Inter`** (Google Fonts)
  * **Pesos utilizados:** `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold).
  * **Aplicação:** Títulos de páginas, nomes de agentes/mapas, descrições de habilidades, textos corridos e rótulos de formulários.
* **Label & Dados Técnicos — `JetBrains Mono`** (Google Fonts)
  * **Pesos utilizados:** `400` (Regular), `500` (Medium), `700` (Bold).
  * **Aplicação:** Tags de função (*Duelista, Controlador*), badges de elo, códigos hexadecimais, estatísticas numéricas (K/D, Winrate) e metadados técnicos.

---

## 3. Componentes e Mapeamento Bootstrap 5

Nenhum framework utilitário externo (como Tailwind CSS) é utilizado. Toda a estrutura responsiva e os componentes visuais são construídos com **Bootstrap 5.3.3** e customizados via variáveis CSS (`--bs-*`):

* **Navegação (`.navbar` / `.nav-pills`):**
  * **Mobile:** Barra de navegação fixa no rodapé (*Bottom Navigation*) para acesso rápido com o polegar entre Catálogo, Busca e Perfil/Dashboard.
  * **Desktop:** Barra superior expandida com logo clicável (`VP`), links de seção e botão de autenticação.
  * **Filtros:** Abas em formato `nav-pills` para filtrar agentes por função ou mapas.
* **Cards (`.card`):**
  * Estrutura padrão para exibição dos agentes no catálogo, cards de estatísticas de desempenho, mapas de dificuldade e central de VODs no Dashboard.
* **Botões (`.btn`):**
  * `.btn-primary` customizado com `#FF4655` para ações principais (*Entrar*, *Salvar Anotação*, *Ver Detalhes*).
  * `.btn-outline-light` / `.btn-secondary` para ações secundárias e botões de retorno (*Voltar ao Catálogo*).
* **Formulários (`.form-control` / `.form-label`):**
  * Campos estilizados em fundo escuro para busca no catálogo, tela de login e criação/edição de anotações táticas no Dashboard.
* **Badges e Indicadores (`.badge` / `.progress`):**
  * Etiquetas em `JetBrains Mono` para identificar funções dos agentes, rank do jogador e barras de progresso para métricas de domínio por mapa.
