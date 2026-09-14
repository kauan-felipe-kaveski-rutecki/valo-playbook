# 📄 Product Requirements Document (PRD) - ValoPlaybook

## 1. Visão Geral e Objetivo

O **ValoPlaybook** é uma aplicação web desenvolvida com o objetivo de simplificar o aprendizado e a evolução tática de jogadores iniciantes e intermediários do jogo **Valorant**. 

**O grande diferencial:** O sistema busca centralizar o conhecimento tático em uma única interface, consumindo informações em tempo real da API oficial do jogo (Valorant-API). Além de servir como uma enciclopédia interativa (agentes, armas e mapas), a plataforma permite que o jogador crie uma conta local para gerenciar um painel de estudo personalizado, mapeando suas maiores dificuldades e recebendo recomendações focadas em seus pontos fracos.

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que acessa a plataforma para consultar livremente o catálogo de agentes, armas e mapas do jogo.
- **Jogador (Cliente):** Usuário autenticado que possui um perfil no sistema, podendo salvar mapas na sua lista de dificuldades, adicionar anotações e acessar a área de estudos.
- **O Sistema (Valorant-API):** Ator que atua em segundo plano fornecendo os dados oficiais, imagens e status atualizados do jogo para renderização na interface.

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), escritas sob a perspectiva do usuário final e divididas por épicos.

### 👤 Épico 1: Autenticação e Perfil

- **US01 - Cadastro de Usuário:** Como um Visitante, quero preencher um formulário com meu nickname, e-mail e senha para criar uma nova conta na plataforma e salvar meu progresso de estudo.
- **US02 - Acesso ao Sistema (Login):** Como um Jogador, quero inserir meu e-mail e senha para acessar minha área restrita e meu painel de estudo personalizado.

### 📖 Épico 2: Consulta ao Catálogo Oficial

- **US03 - Consultar Agentes e Armas:** Como um Visitante ou Jogador, quero pesquisar e visualizar informações detalhadas (habilidades, status e categorias) de agentes e armas, para que eu possa entender melhor como utilizá-los nas minhas partidas.
- **US04 - Consultar Mapas:** Como um Visitante ou Jogador, quero visualizar os layouts e informações geográficas dos mapas do jogo, para conhecer melhor as rotas e pontos de interesse.

### 🎯 Épico 3: Mapeamento de Desempenho e Estudo

- **US05 - Registrar Dificuldade em Mapa:** Como um Jogador logado, quero adicionar mapas à minha lista de dificuldades no perfil, para manter um histórico de onde preciso focar meus estudos.
- **US06 - Adicionar Anotações de Desempenho:** Como um Jogador logado, quero poder adicionar observações textuais (ex: "dificuldade de defender o bomb B") e definir o nível de dificuldade em cada mapa salvo, visando uma personalização total do meu estudo.
- **US07 - Acessar Central de Estudos:** Como um Jogador logado, quero acessar dicas táticas e recomendações de VODs (vídeos) correspondentes aos mapas que eu salvei, para aprender novas estratégias e corrigir meus erros.
- **US08 - Remover Mapa do Painel:** Como um Jogador logado, quero poder remover um mapa da minha lista de dificuldades, atualizando meu perfil conforme eu melhoro meu desempenho no jogo.
