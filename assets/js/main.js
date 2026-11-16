$(document).ready(function () {
  const API_LOCAL = "http://localhost:3000/mapas";
  const VALORANT_API =
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR";

  // =========================================================================
  // ID 21: JQUERY MASK PLUGIN (Máscaras nos campos do modal do Painel)
  // =========================================================================
  if ($.fn.mask) {
    $("#wrNovoMapa").mask("00.0%", { reverse: true });
    $("#metaHorasMapa").mask("00:00");
  }

  // =========================================================================
  // ID 14: WEB STORAGE — Carrega sessão do usuário em todas as páginas
  // =========================================================================
  function obterSessao() {
    const dados =
      localStorage.getItem("valo_sessao") ||
      sessionStorage.getItem("valo_sessao");
    return dados ? JSON.parse(dados) : null;
  }

  function atualizarNavbarSessao() {
    const sessao = obterSessao();
    if (!sessao) return;

    $(".js-user-riotid").text(sessao.riotId);
    $(".js-user-region").text(sessao.regiao || "BR");
  }

  atualizarNavbarSessao();

  // =========================================================================
  // IDs 11, 12, 13, 14: FORMULÁRIOS, REGEX, RADIO/CHECKBOX E STORAGE (LOGIN)
  // =========================================================================
  const regexRiotId = /^[a-zA-Z0-9À-ÿ\s]{3,16}#[a-zA-Z0-9]{3,5}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  $("#formLoginRiot").on("submit", function (e) {
    e.preventDefault();

    const $input = $("#riotIdInput");
    const $feedback = $("#riotIdFeedback");
    const valor = $input.val().trim();
    const regiao = $("input[name='regiaoRadio']:checked").val() || "BR";
    const lembrar = $("#lembrarSessaoCheck").is(":checked");

    if (!regexRiotId.test(valor)) {
      $input.removeClass("is-valid").addClass("is-invalid");
      $feedback
        .removeClass("text-neon")
        .addClass("text-danger")
        .text("Formato inválido. Use Nick#TAG (ex: ViperTactics#BR1).");
      return;
    }

    $input.removeClass("is-invalid").addClass("is-valid");
    $feedback
      .removeClass("text-danger")
      .addClass("text-neon")
      .text("Riot ID validado! Sincronizando estação...");

    const payload = JSON.stringify({
      riotId: valor,
      regiao: regiao,
      conectadoEm: new Date().toLocaleString("pt-BR"),
    });

    if (lembrar) {
      localStorage.setItem("valo_sessao", payload);
      sessionStorage.removeItem("valo_sessao");
    } else {
      sessionStorage.setItem("valo_sessao", payload);
      localStorage.removeItem("valo_sessao");
    }

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 650);
  });

  $("#formLoginEmail").on("submit", function (e) {
    e.preventDefault();

    const $email = $("#emailLogin");
    const $senha = $("#senhaLogin");
    const $feedback = $("#emailFeedback");
    const emailVal = $email.val().trim();
    const senhaVal = $senha.val().trim();

    if (!regexEmail.test(emailVal) || senhaVal.length < 6) {
      $email.addClass("is-invalid");
      $feedback
        .removeClass("text-neon")
        .addClass("text-danger")
        .text("Informe um e-mail válido e senha com no mínimo 6 caracteres.");
      return;
    }

    $email.removeClass("is-invalid").addClass("is-valid");
    $feedback
      .removeClass("text-danger")
      .addClass("text-neon")
      .text("Acesso validado! Redirecionando...");

    const nickExtraido = emailVal.split("@")[0] + "#BR1";
    localStorage.setItem(
      "valo_sessao",
      JSON.stringify({ riotId: nickExtraido, regiao: "BR" }),
    );

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 650);
  });

  // =========================================================================
  // ID 24: CONSUMO DA API PÚBLICA VALORANT-API (INDEX.HTML & DETALHES.HTML)
  // =========================================================================
  async function carregarAgentesValorant() {
    const $container = $("#listaAgentesApi");
    const $status = $("#statusApiValorant");
    if (!$container.length) return;

    try {
      const resposta = await fetch(VALORANT_API);
      if (!resposta.ok) {
        throw new Error(`Erro HTTP ${resposta.status}`);
      }

      const json = await resposta.json();
      const agentes = json.data.slice(0, 8);

      $status
        .removeClass("badge-trk-red")
        .addClass("badge-trk-neon")
        .text(`API ONLINE • ${json.data.length} AGENTES`);

      $container.empty();

      agentes.forEach((agente) => {
        const funcao = agente.role ? agente.role.displayName : "Agente";
        const icone = agente.displayIcon;
        const desc = agente.description
          ? agente.description.slice(0, 85) + "..."
          : "Agente tático do protocolo Valorant.";

        const cardHtml = `
          <div class="col-12 col-sm-6 col-lg-3 js-agente-card" data-nome="${agente.displayName.toLowerCase()} ${funcao.toLowerCase()}">
            <article class="card-valo h-100 d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex align-items-center gap-3 mb-2">
                  <img src="${icone}" alt="${agente.displayName}" width="48" height="48" class="rounded border border-secondary-subtle bg-dark p-1" loading="lazy" />
                  <div>
                    <h3 class="h6 fw-bold text-white mb-0">${agente.displayName}</h3>
                    <span class="badge badge-trk-cyan font-mono">${funcao.toUpperCase()}</span>
                  </div>
                </div>
                <p class="text-secondary small mb-3">${desc}</p>
              </div>
              <a href="detalhes.html?agente=${encodeURIComponent(agente.displayName)}" class="btn btn-sm badge-trk-dark text-primary w-100 py-2 font-monospace fw-bold">
                ANALISAR KIT &gt;
              </a>
            </article>
          </div>
        `;
        $container.append(cardHtml);
      });
    } catch (erro) {
      $status
        .removeClass("badge-trk-neon")
        .addClass("badge-trk-red")
        .text("API INDISPONÍVEL");
      $container.html(`
        <div class="col-12">
          <div class="alert alert-danger font-mono small mb-0">
            Falha ao conectar na Valorant-API (${erro.message}). Os cards locais acima permanecem ativos.
          </div>
        </div>
      `);
    }
  }

  carregarAgentesValorant();

  // ID 20: Busca dinâmica com jQuery no catálogo
  $("#buscaGlobalInput").on("keyup", function () {
    const termo = $(this).val().toLowerCase().trim();
    $(".js-agente-card, #pane-comp .col-12").each(function () {
      const texto = $(this).text().toLowerCase();
      $(this).toggle(texto.includes(termo));
    });
  });

  // Preenche detalhes dinâmicos via URL (?agente=Nome) na página detalhes.html
  async function carregarDetalheAgenteUrl() {
    const params = new URLSearchParams(window.location.search);
    const nomeAgente = params.get("agente");
    if (!nomeAgente || !$("#agenteNomeTitulo").length) return;

    try {
      const resp = await fetch(VALORANT_API);
      const json = await resp.json();
      const encontrado = json.data.find(
        (a) => a.displayName.toLowerCase() === nomeAgente.toLowerCase(),
      );

      if (encontrado) {
        $("#agenteNomeTitulo").text(encontrado.displayName.toUpperCase());
        $("#agenteBreadcrumb").text(encontrado.displayName);
        $("#agenteDescricao").text(encontrado.description);
        if (encontrado.role) {
          $("#agenteFuncaoBadge").text(
            `${encontrado.role.displayName.toUpperCase()} / API SYNC`,
          );
        }
        if (encontrado.displayIcon) {
          $("#agenteAvatarImg").attr("src", encontrado.displayIcon);
        }
      }
    } catch (e) {
      console.warn("Mantendo dados padrão de Jett:", e);
    }
  }

  carregarDetalheAgenteUrl();

  // =========================================================================
  // IDs 22 e 23: FAKE API (JSON SERVER) + FALLBACK LOCALSTORAGE (DASHBOARD)
  // =========================================================================
  const mapasIniciaisFallback = [
    {
      id: 1,
      nome: "LOTUS",
      prioridade: "PRIORIDADE ALTA",
      winRate: "38.0%",
      jogos: 13,
      metaHoras: "04:30",
      notas:
        "Treinar retake do Bombsite C e lineups tóxicos de Viper para retardar o avanço na Cascata.",
      atualizadoEm: "há 2 horas",
    },
    {
      id: 2,
      nome: "SUNSET",
      prioridade: "DIFICULDADE MÉDIA",
      winRate: "42.0%",
      jogos: 19,
      metaHoras: "03:00",
      notas:
        "Dominar o controle da Bóia no Meio e aprender setups de one-way na entrada do B Principal.",
      atualizadoEm: "ontem",
    },
  ];

  function renderizarMapasPainel(lista) {
    const $listaEl = $("#listaMapasDificuldade");
    if (!$listaEl.length) return;

    $("#contadorMapasFoco").text(`${lista.length} EM FOCO`);
    $listaEl.empty();

    lista.forEach((mapa) => {
      const badgeClass =
        mapa.prioridade === "PRIORIDADE ALTA"
          ? "badge-trk-red"
          : "bg-warning bg-opacity-25 text-warning border border-warning";

      const card = `
        <article class="card-valo p-3 mb-3" data-id="${mapa.id}">
          <div class="d-flex align-items-start justify-content-between mb-2">
            <div>
              <div class="d-flex align-items-center flex-wrap gap-2">
                <h3 class="h6 mb-0 text-white fw-bold font-mono">${mapa.nome}</h3>
                <span class="badge ${badgeClass} font-mono">${mapa.prioridade}</span>
                <span class="badge badge-trk-cyan font-mono">META ${mapa.metaHoras || "02:00"}H</span>
              </div>
              <div class="d-flex align-items-center gap-2 mt-1 small">
                <span class="text-secondary">Taxa de Vitória:</span>
                <span class="fw-bold font-mono text-primary">${mapa.winRate}</span>
                <span class="text-secondary">(${mapa.jogos} Jogos)</span>
              </div>
            </div>

            <button class="btn btn-outline-danger btn-sm px-2 py-1 d-inline-flex align-items-center gap-1 js-remover-mapa" data-id="${mapa.id}" type="button">
              <i class="bi bi-trash"></i>
              <span>Remover</span>
            </button>
          </div>

          <div class="mt-3">
            <label class="form-label text-secondary mb-1 font-mono d-flex align-items-center gap-1 small text-uppercase">
              <i class="bi bi-pencil-square"></i> Anotações Táticas de Estudo
            </label>
            <textarea class="form-control form-control-sm p-2 js-nota-textarea" rows="2">${mapa.notas}</textarea>

            <div class="d-flex align-items-center justify-content-between mt-2">
              <span class="text-secondary font-mono small">Atualizado: ${mapa.atualizadoEm}</span>
              <button class="btn btn-sm badge-trk-dark text-white py-1 px-2 font-mono d-inline-flex align-items-center gap-1 js-salvar-nota" data-id="${mapa.id}" type="button">
                <i class="bi bi-floppy text-neon"></i>
                <span>Salvar Notas</span>
              </button>
            </div>
          </div>
        </article>
      `;
      $listaEl.append(card);
    });
  }

  async function carregarMapasPainel() {
    if (!$("#listaMapasDificuldade").length) return;

    try {
      const resp = await fetch(API_LOCAL);
      if (!resp.ok) throw new Error("JSON Server offline");
      const dados = await resp.json();
      localStorage.setItem("valo_mapas_cache", JSON.stringify(dados));
      renderizarMapasPainel(dados);
    } catch {
      const cache = localStorage.getItem("valo_mapas_cache");
      const lista = cache ? JSON.parse(cache) : mapasIniciaisFallback;
      localStorage.setItem("valo_mapas_cache", JSON.stringify(lista));
      renderizarMapasPainel(lista);
    }
  }

  carregarMapasPainel();

  // ID 22: POST no JSON Server ao adicionar novo mapa pelo Modal
  $("#formAdicionarMapa").on("submit", async function (e) {
    e.preventDefault();

    const novoMapa = {
      nome: $("#selectMapaFoco").val().toUpperCase(),
      prioridade: $("#selectPrioridadeMapa").val(),
      winRate: $("#wrNovoMapa").val() || "44.5%",
      jogos: 10,
      metaHoras: $("#metaHorasMapa").val() || "02:00",
      notas:
        $("#notaNovoMapa").val().trim() ||
        "Revisar posicionamento defensivo e execuções de retake.",
      atualizadoEm: "agora mesmo",
    };

    try {
      const resp = await fetch(API_LOCAL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoMapa),
      });
      if (!resp.ok) throw new Error("Falha POST");
      await carregarMapasPainel();
    } catch {
      const cache = JSON.parse(
        localStorage.getItem("valo_mapas_cache") || "[]",
      );
      novoMapa.id = Date.now();
      cache.push(novoMapa);
      localStorage.setItem("valo_mapas_cache", JSON.stringify(cache));
      renderizarMapasPainel(cache);
    }

    this.reset();
    const modalEl = document.getElementById("modalAdicionarMapa");
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) modalInstance.hide();
  });

  // PATCH: Salvar anotações editadas
  $(document).on("click", ".js-salvar-nota", async function () {
    const id = $(this).data("id");
    const $card = $(this).closest("article");
    const novaNota = $card.find(".js-nota-textarea").val();
    const $btn = $(this);

    try {
      const resp = await fetch(`${API_LOCAL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          notas: novaNota,
          atualizadoEm: "agora mesmo",
        }),
      });
      if (!resp.ok) throw new Error("Falha PATCH");
    } catch {
      const cache = JSON.parse(
        localStorage.getItem("valo_mapas_cache") || "[]",
      );
      const item = cache.find((m) => String(m.id) === String(id));
      if (item) {
        item.notas = novaNota;
        item.atualizadoEm = "agora mesmo";
        localStorage.setItem("valo_mapas_cache", JSON.stringify(cache));
      }
    }

    $btn
      .empty()
      .append(
        $("<i>", { class: "bi bi-check2 text-neon" }),
        $("<span>", { text: "Salvo!" }),
      );
    setTimeout(() => {
      $btn
        .empty()
        .append(
          $("<i>", { class: "bi bi-floppy text-neon" }),
          $("<span>", { text: "Salvar Notas" }),
        );
    }, 1500);
  });

  // DELETE: Remover mapa do foco
  $(document).on("click", ".js-remover-mapa", async function () {
    const id = $(this).data("id");
    const $card = $(this).closest("article");

    try {
      const resp = await fetch(`${API_LOCAL}/${id}`, { method: "DELETE" });
      if (!resp.ok) throw new Error("Falha DELETE");
    } catch {
      let cache = JSON.parse(localStorage.getItem("valo_mapas_cache") || "[]");
      cache = cache.filter((m) => String(m.id) !== String(id));
      localStorage.setItem("valo_mapas_cache", JSON.stringify(cache));
    }

    $card.fadeOut(250, function () {
      carregarMapasPainel();
    });
  });
});
