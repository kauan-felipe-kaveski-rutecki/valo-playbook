# 📄 Product Requirements Document (PRD) - ValoPlaybook

## 1. Visão Geral e Objetivo

O **ValoPlaybook** é uma aplicação web desenvolvida com o objetivo de simplificar o aprendizado e a evolução tática de jogadores iniciantes e intermediários do jogo **Valorant**. 

**O grande diferencial:** O sistema busca centralizar o conhecimento tático em uma única interface, consumindo informações em tempo real da API oficial do jogo (Valorant-API). Além de servir como uma enciclopédia interativa (agentes, armas e mapas), a plataforma permite que o jogador crie uma conta para gerenciar um painel de estudo personalizado, mapeando suas maiores dificuldades e recebendo recomendações focadas em seus pontos fracos.

## 2. Atores do Sistema

- **Visitante:** Usuário não autenticado que acessa a plataforma para consultar livremente o catálogo de agentes, armas e mapas do jogo.
- **Jogador (Cliente):** Usuário autenticado que possui um perfil no sistema, podendo salvar mapas na sua lista de dificuldades, adicionar anotações e acessar a área de estudos.
- **O Sistema (Valorant-API):** Ator que atua em segundo plano fornecendo os dados oficiais, imagens e status atualizados do jogo para renderização na interface.

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), escritas sob a perspectiva do usuário final e divididas por épicos.

### 👤 Épico 1: Autenticação e Perfil

- **US01 - Cadastro de Usuário:** Como um Visitante, quero preencher um formulário com meu nickname, e-mail e senha para criar uma nova conta na plataforma e salvar meu progresso de estudo.
  - **Critérios de Aceitação:**
    - O formulário deve exigir o preenchimento obrigatório de `nickname`, `email` e `senha`.
    - O sistema deve validar se o formato do e-mail é válido e impedir o cadastro caso o e-mail já esteja em uso.
    - Ao concluir o cadastro com sucesso, o usuário deve ser registrado na base de dados e redirecionado para o login ou painel autenticado.

- **US02 - Acesso ao Sistema (Login):** Como um Jogador, quero inserir meu e-mail e senha para acessar minha área restrita e meu painel de estudo personalizado.
  - **Critérios de Aceitação:**
    - O sistema deve validar se o `email` e a `senha` correspondem a um usuário cadastrado.
    - Caso as credenciais estejam incorretas, uma mensagem de erro clara deve ser exibida na tela sem recarregar a página.
    - Com o login válido, a sessão do jogador deve ser mantida (via `localStorage`) e o acesso ao `dashboard.html` deve ser liberado.

### 📖 Épico 2: Consulta ao Catálogo Oficial

- **US03 - Consultar Agentes e Armas:** Como um Visitante ou Jogador, quero pesquisar e visualizar informações detalhadas (habilidades, status e categorias) de agentes e armas, para que eu possa entender melhor como utilizá-los nas minhas partidas.
  - **Critérios de Aceitação:**
    - A listagem deve carregar dinamicamente os agentes (`GET /agents?language=pt-BR`) e armas (`GET /weapons`) da Valorant-API.
    - O usuário deve conseguir filtrar os itens por categoria/função (ex: Duelista, Iniciador) ou pesquisar pelo nome na barra de busca.
    - Ao clicar em um card, o sistema deve abrir a visualização detalhada (`detalhes.html`) exibindo descrição, ícones de habilidades e atributos técnicos.

- **US04 - Consultar Mapas:** Como um Visitante ou Jogador, quero visualizar os layouts e informações geográficas dos mapas do jogo, para conhecer melhor as rotas e pontos de interesse.
  - **Critérios de Aceitação:**
    - Os mapas devem ser consumidos dinamicamente via endpoint `GET /maps` da Valorant-API, filtrando mapas jogáveis válidos.
    - Cada card de mapa deve exibir seu nome oficial e imagem promocional.
    - Na tela de detalhes, devem ser exibidas as coordenadas e o minimapa/layout tático em alta resolução.

### 🎯 Épico 3: Mapeamento de Desempenho e Estudo

- **US05 - Registrar Dificuldade em Mapa:** Como um Jogador logado, quero adicionar mapas à minha lista de dificuldades no perfil, para manter um histórico de onde preciso focar meus estudos.
  - **Critérios de Aceitação:**
    - A funcionalidade deve estar acessível apenas para jogadores autenticados.
    - O jogador deve poder selecionar um mapa oficial (vinculado pelo `mapa_api_id`) e salvá-lo em sua lista pessoal.
    - O novo registro deve ser persistido na base de dados vinculado ao `usuario_id` e aparecer imediatamente no painel.

- **US06 - Adicionar Anotações de Desempenho:** Como um Jogador logado, quero poder adicionar observações textuais (ex: "dificuldade de defender o bomb B") e definir o nível de dificuldade em cada mapa salvo, visando uma personalização total do meu estudo.
  - **Critérios de Aceitação:**
    - Cada mapa salvo deve permitir selecionar um nível de dificuldade (`Baixa`, `Média` ou `Alta`) e preencher um campo de texto livre para anotações.
    - O jogador deve conseguir editar tanto o nível quanto a observação a qualquer momento.
    - As alterações devem ser salvas e permanecer visíveis após recarregar a página.

- **US07 - Acessar Central de Estudos:** Como um Jogador logado, quero acessar dicas táticas e recomendações de VODs (vídeos) correspondentes aos mapas que eu salvei, para aprender novas estratégias e corrigir meus erros.
  - **Critérios de Aceitação:**
    - O Dashboard deve exibir uma seção dedicada com dicas táticas e recomendações de estudo associadas aos mapas cadastrados na lista de dificuldades do jogador.
    - Caso o jogador ainda não tenha mapas salvos, o painel deve exibir um estado vazio orientando-o a adicionar seu primeiro mapa.

- **US08 - Remover Mapa do Painel:** Como um Jogador logado, quero poder remover um mapa da minha lista de dificuldades, atualizando meu perfil conforme eu melhoro meu desempenho no jogo.
  - **Critérios de Aceitação:**
    - Cada card de mapa salvo no Dashboard deve conter um botão visível de exclusão/remoção.
    - Ao acionar a remoção, o registro correspondente deve ser excluído da base de dados e removido da interface sem necessidade de recarregar a página manualmente.
