# Product Requirements Document (PRD)

## Identificação
- **Aluno:** Kauan Felipe Kaveski Rutecki
- **Projeto:** ValoPlaybook (`valo-playbook`)

---

## Descrição
O **ValoPlaybook** é um guia tático interativo desenvolvido para auxiliar jogadores iniciantes e intermediários de Valorant no aprendizado do jogo. O sistema resolve a alta curva de aprendizado inicial agrupando informações vitais em um só lugar — como dicas sobre o papel dos agentes, utilidade das armas de acordo com a distância e características táticas dos mapas —, consumindo dados oficiais em tempo real via **Valorant-API**. 

Para além da consulta pública, a aplicação resolve a falta de foco no treino individual: ao criar uma conta, o jogador pode registrar em quais mapas possui mais dificuldade e receber uma curadoria de orientações táticas e links de partidas recomendadas (VODs) para estudo direcionado.

---

## Atores do Sistema
- **Visitante (Usuário Anônimo):** Fã do jogo que utiliza a plataforma para consultar dados de mapas, armas e agentes, além de dicas básicas de jogabilidade.
- **Jogador (Cliente Autenticado):** Usuário cadastrado que possui acesso ao seu painel pessoal, onde gerencia suas preferências de treino e seus mapas de maior dificuldade.

---

## Histórias de Usuário (Escopo)

1. **Como Visitante**, eu quero **consultar o catálogo de agentes, armas e mapas do jogo** para **entender os atributos básicos e visualizar imagens oficiais** *(Consumo de API)*.
2. **Como Visitante**, eu quero **filtrar armas por tipo e mapas por perfil (ex: mais favorável à defesa ou ataque)** para **aprender qual equipamento utilizar em cada situação** *(Consulta com dados estáticos/filtros)*.
3. **Como Visitante**, eu quero **me cadastrar na plataforma fornecendo meus dados básicos** para **criar um perfil e liberar a área de estudo personalizada** *(Formulário de Cadastro)*.
4. **Como Jogador**, eu quero **fazer login no sistema** para **acessar meu painel pessoal de evolução** *(Formulário de Autenticação)*.
5. **Como Jogador**, eu quero **marcar os mapas em que possuo maior dificuldade de vitória** para **registrar meus pontos fracos e organizar meu foco de treino** *(Formulário/Interação de seleção)*.
6. **Como Jogador**, eu quero **visualizar uma lista curada de dicas e links de VODs nos mapas que marquei com dificuldade** para **estudar partidas e melhorar meu desempenho tático** *(Conteúdo exclusivo do usuário logado)*.
