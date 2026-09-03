# Especificação Técnica

## Visão Geral da Arquitetura de Dados
O **ValoPlaybook** adota uma estratégia híbrida para a gestão e exibição de dados:

1. **Dados Externos (Valorant-API):** Informações dinâmicas e ricas em mídia (imagens de mapas, radares, ícones de agentes e estatísticas de armas) são consumidas em tempo real diretamente da API oficial da comunidade (`https://valorant-api.com/`). Esses dados não dependem de armazenamento local.
2. **Dados Internos do Sistema (Banco de Dados Local):** Responsável por persistir unicamente os dados cadastrais dos usuários e seus registros de preferência (quais mapas o usuário marcou como difíceis).
3. **Dados Estáticos (Mock JSON):** A curadoria de dicas táticas e links de VODs recomendados é provida via arquivos estáticos estruturados em JSON no próprio front-end.

---

## Modelo de Dados (Diagrama)

```mermaid
erDiagram
    USUARIO ||--o{ MAPA_DIFICULDADE : cadastra
    
    USUARIO {
        string id PK
        string nickname
        string email
        string senha
    }
    
    MAPA_DIFICULDADE {
        string id PK
        string id_usuario FK
        string id_mapa_api "UUID do Mapa vindo da Valorant-API"
        string nivel_dificuldade "Ex: Alta, Média"
        string observacao "Anotações pessoais do jogador sobre o mapa"
    }
