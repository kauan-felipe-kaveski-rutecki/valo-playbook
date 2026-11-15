# 📐 Arquitetura e Especificação Técnica — ValoPlaybook

## 1. Visão Geral e Stack Tecnológica

O **ValoPlaybook** é uma aplicação web responsiva de guia tático e central de estudos para jogadores de *Valorant*. A arquitetura combina o consumo de dados estáticos/oficiais de uma API pública externa com uma API REST simulada (`json-server`) para persistência dos dados personalizados de cada jogador.

### 1.1 Dependências e Regras de Front-end
- **Framework CSS:** Bootstrap `v5.3.3` (Licença MIT), integrado via CDN oficial:
  - CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
  - JS Bundle: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
- **Componentes Bootstrap:** Grid System, Navbar, Cards, Nav-pills, Nav-tabs, Form Controls, Badges e Modais.
- **Restrição Técnica:** Uso exclusivo de Bootstrap 5 e CSS customizado (`design-system.md`). É estritamente proibido o uso de Tailwind CSS.
- **Persistência de Dados e Sessão:** `json-server` (`db.json`) para armazenamento das entidades do sistema e `localStorage` para controle de sessão do usuário autenticado.
- **Identidade Visual:** Documentada em [`docs/design-system.md`](./design-system.md).

---

## 2. Diagrama Entidade-Relacionamento (DER)

O sistema armazena os dados cadastrais dos jogadores e o registro personalizado de quais mapas eles possuem maior dificuldade para fins de estudo.

Um usuário pode registrar diversos mapas em sua lista de dificuldades (relação `1:N` entre `USUARIO` e `MAPA_DIFICULDADE`). Os dados ricos dos mapas (nome, splash art, minimapa) não são duplicados no banco local, sendo obtidos dinamicamente da **Valorant-API** através do identificador `mapa_api_id`.

```mermaid
erDiagram

    USUARIO ||--o{ MAPA_DIFICULDADE : registra

    USUARIO {
        string id PK
        string nickname
        string email
        string senha
    }

    MAPA_DIFICULDADE {
        string id PK
        string usuario_id FK
        string mapa_api_id "UUID da Valorant-API"
        string nivel_dificuldade
        string observacao
    }
