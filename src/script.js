(function (doc, win) {
  "use strict"

  const types = [
    {
      title: "feat",
      description: "Commits do tipo feat indicam que seu trecho de código está incluindo um novo recurso",
      summary: "Indicam que um trecho de código foi incluindo criando um novo recurso",
      keyword: "novo"
    },
    {
      title: "fix",
      description: "Commits do tipo fix indicam que seu trecho de código do commit está solucionando um problema (bug fix)",
      summary: "Indicam que um trecho de código foi alterado solucionando um problema",
      keyword: "correção"
    },
    {
      title: "refactor",
      description: "Commits do tipo refactor referem-se a mudanças devido a refatorações que não alterem sua funcionalidade, como por exemplo, uma alteração no formato como é processada determinada parte da tela, mas que manteve a mesma funcionalidade, ou melhorias de performance devido a um code review",
      summary: "Indicam que um trecho de código foi alterado não modificando a funcionalidade",
      keyword: "alteração"
    },
    {
      title: "perf",
      description: "Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a performance",
      summary: "Indicam que um trecho de código foi alterado melhorando a performance",
      keyword: "performance"
    },
    {
      title: "docs",
      description: "Commits do tipo docs indicam que houveram mudanças na documentação, como por exemplo no readme do seu repositório (não inclui alterações em código)",
      summary: "Indicam que houveram modificações na documentação sem alterar o código",
      keyword: "documentação"
    },
    {
      title: "test",
      description: "Commits do tipo test são utilizados quando são realizadas alterações em testes, seja criando, alterando ou excluindo testes unitários (não inclui alterações em código)",
      summary: "Indicam que houveram modificações nos testes sem alterar o código",
      keyword: "teste"
    },
    {
      title: "style",
      description: "Commits do tipo style indicam que houveram alterações referentes a formatações de código, semicolons, trailing spaces, lint e outros (não inclui alterações em código)",
      summary: "Indicam que houveram alterações referente a formatação sem alterar o código",
      keyword: "visual"
    },
    {
      title: "build",
      description: "Commits do tipo build são utilizados quando são realizadas modificações em arquivos de build e dependências",
      summary: "Utilizado quando é realizado modificações em arquivo de build e dependência",
      keyword: "construção"
    },
    {
      title: "chore",
      description: "Commits do tipo chore indicam atualizações de tarefas de build, configurações de administrador, pacotes e outros como por exemplo adicionar um pacote no gitignore (não inclui alterações em código)",
      summary: "Utilizado quando é realizado atualizações de tarefa de build",
      keyword: "tarefa"
    },
    {
      title: "ci",
      description: "Commits do tipo ci indicam mudanças relacionadas a integração contínua (continuous integration)",
      summary: "Utilizado quando é realizado modificações relacionado a integração contínua",
      keyword: "integração"
    }
  ]

  const emojis = [
    {
      color: "#f74d5f",
      iconSymbol: "🎉",
      iconCode: "&#127881",
      keyword: "base",
      descriptionSubtitled: "Begin a project",
      descriptionDubbed: "Iniciar um projeto"
    },
    {
      color: "#ffe55f",
      iconSymbol: "✨",
      iconCode: "&#10024",
      keyword: "criação",
      descriptionSubtitled: "Introduce new feature",
      descriptionDubbed: "Introduzir novo recurso"
    },
    {
      color: "#00a9f0",
      iconSymbol: "🚀",
      iconCode: "&#128640",
      keyword: "implementação",
      descriptionSubtitled: "Deploy stuff",
      descriptionDubbed: "Implantar coisas"
    },
    {
      color: "#ff7281",
      iconSymbol: "🎨",
      iconCode: "&#127912",
      keyword: "estrutura",
      descriptionSubtitled: "Improve structure/format of the code",
      descriptionDubbed: "Melhorar a estrutura/formato do código"
    },
    {
      color: "#40c4ff",
      iconSymbol: "⚡️",
      iconCode: "&#9889",
      keyword: "desempenho",
      descriptionSubtitled: "Improve performance",
      descriptionDubbed: "Melhorar o desempenho"
    },
    {
      color: "#80deea",
      iconSymbol: "💄",
      iconCode: "&#128132",
      keyword: "estilo",
      descriptionSubtitled: "Add or update the UI and style file",
      descriptionDubbed: "Adicionar ou atualizar a interface do usuário e o arquivo de estilo"
    },
    {
      color: "#ffb74d",
      iconSymbol: "🚧",
      iconCode: "&#128679",
      keyword: "andamento",
      descriptionSubtitled: "Work in progress",
      descriptionDubbed: "Trabalho em progresso"
    },
    {
      color: "#77e856",
      iconSymbol: "♻️",
      iconCode: "&#",
      keyword: "refatorar",
      descriptionSubtitled: "Refactor code",
      descriptionDubbed: "Refatorar código"
    },
    {
      color: "#a78674",
      iconSymbol: "💩",
      iconCode: "&#128169",
      keyword: "melhorar",
      descriptionSubtitled: "Write bad code that needs to be improved",
      descriptionDubbed: "Escrever código ruim que precisa ser melhorado"
    },
    {
      color: "#ffce49",
      iconSymbol: "✏️",
      iconCode: "&#9999",
      keyword: "ortografia",
      descriptionSubtitled: "Fix typo",
      descriptionDubbed: "Corrigir erro de digitação"
    },
    {
      color: "#7f39fb",
      iconSymbol: "⚗️",
      iconCode: "&#",
      keyword: "experimento",
      descriptionSubtitled: "Perform experiment",
      descriptionDubbed: "Realizar experimento"
    },
    {
      color: "#77e856",
      iconSymbol: "✅",
      iconCode: "&#9989",
      keyword: "teste",
      descriptionSubtitled: "Add, update, or pass test",
      descriptionDubbed: "Adicionar, atualizar ou passar no teste"
    },
    {
      color: "#fb584a",
      iconSymbol: "🧪",
      iconCode: "&#",
      keyword: "falha",
      descriptionSubtitled: "Add a failing test",
      descriptionDubbed: "Adicionar um teste com falha"
    },
    {
      color: "#e88849",
      iconSymbol: "💥",
      iconCode: "&#128165",
      keyword: "quebra",
      descriptionSubtitled: "Introduce breaking change",
      descriptionDubbed: "Introduzir mudança de quebra"
    },
    {
      color: "#ffce49",
      iconSymbol: "🔒️",
      iconCode: "&#128274",
      keyword: "segurança",
      descriptionSubtitled: "Fix security issue",
      descriptionDubbed: "Corrigir problema de segurança"
    },
    {
      color: "#4dc6dc",
      iconSymbol: "🛂",
      iconCode: "&#128706",
      keyword: "autorização",
      descriptionSubtitled: "Work on code related to authorization, role and permission",
      descriptionDubbed: "Trabalhar no código relacionado à autorização"
    },
    {
      color: "#83beec",
      iconSymbol: "🔐",
      iconCode: "&#128272",
      keyword: "segredo",
      descriptionSubtitled: "Add or update secret",
      descriptionDubbed: "Adicionar ou atualizar segredo"
    },
    {
      color: "#ba8049",
      iconSymbol: "🗃️",
      iconCode: "&#128451",
      keyword: "database",
      descriptionSubtitled: "Perform database related change",
      descriptionDubbed: "Realizar alteração relacionada ao banco de dados"
    },
    {
      color: "#c5e763",
      iconSymbol: "🌱",
      iconCode: "&#127793",
      keyword: "seeder",
      descriptionSubtitled: "Add or update seed file",
      descriptionDubbed: "Adicionar ou atualizar o arquivo de semente"
    },
    {
      color: "#e25631",
      iconSymbol: "🍱",
      iconCode: "&#127857",
      keyword: "ativo",
      descriptionSubtitled: "Add or update assets",
      descriptionDubbed: "Adicionar ou atualizar ativo"
    },
    {
      color: "#8bdfe7",
      iconSymbol: "🙈",
      iconCode: "&#128584",
      keyword: "git",
      descriptionSubtitled: "Add or update a gitignore file",
      descriptionDubbed: "Adicionar ou atualizar um arquivo gitignore"
    },
    {
      color: "#cb63e6",
      iconSymbol: "🏷️",
      iconCode: "&#127991",
      keyword: "tipagem",
      descriptionSubtitled: "Add or update type",
      descriptionDubbed: "Adicionar ou atualizar tipo"
    },
    {
      color: "#00e676",
      iconSymbol: "📝",
      iconCode: "&#128221",
      keyword: "documentação",
      descriptionSubtitled: "Add or update documentation",
      descriptionDubbed: "Adicionar ou atualizar a documentação"
    },
    {
      color: "#c35f76",
      iconSymbol: "📄",
      iconCode: "&#128196",
      keyword: "licença",
      descriptionSubtitled: "Add or update license",
      descriptionDubbed: "Adicionar ou atualizar licença"
    },
    {
      color: "#80deea",
      iconSymbol: "🔖",
      iconCode: "&#128278",
      keyword: "versão",
      descriptionSubtitled: "Release/version tag",
      descriptionDubbed: "Tag de lançamento/versão"
    },
    {
      color: "#ffce49",
      iconSymbol: "🚩",
      iconCode: "&#128681",
      keyword: "flag",
      descriptionSubtitled: "Add, update, or remove feature flag",
      descriptionDubbed: "Adicionar, atualizar ou remover sinalizador de recurso"
    },
    {
      color: "#ff9d44",
      iconSymbol: "🔥",
      iconCode: "&#128293",
      keyword: "remover",
      descriptionSubtitled: "Remove code or file",
      descriptionDubbed: "Remover código ou arquivo"
    },
    {
      color: "#b0bcc2",
      iconSymbol: "⚰️",
      iconCode: "&#",
      keyword: "obsoleto",
      descriptionSubtitled: "Remove dead code",
      descriptionDubbed: "Remover código morto"
    },
    {
      color: "#7a6c57",
      iconSymbol: "🗑️",
      iconCode: "&#128465",
      keyword: "limpo",
      descriptionSubtitled: "Deprecate code that needs to be cleaned up",
      descriptionDubbed: "Descontinuar código que precisa ser limpo"
    },
    {
      color: "#8cd842",
      iconSymbol: "🐛",
      iconCode: "&#128027",
      keyword: "erro",
      descriptionSubtitled: "Fix a bug",
      descriptionDubbed: "Corrigir um erro"
    },
    {
      color: "#fbcfb7",
      iconSymbol: "🩹",
      iconCode: "&#",
      keyword: "simples",
      descriptionSubtitled: "Simple fix for a non-critical issue",
      descriptionDubbed: "Correção simples para um problema não crítico"
    },
    {
      color: "#fb584a",
      iconSymbol: "🚑️",
      iconCode: "&#128657",
      keyword: "grave",
      descriptionSubtitled: "Critical hotfix",
      descriptionDubbed: "Correção crítica"
    },
    {
      color: "#c7cb12",
      iconSymbol: "🥅",
      iconCode: "&#129349",
      keyword: "catch",
      descriptionSubtitled: "Catch error",
      descriptionDubbed: "Erro de captura"
    },
    {
      color: "#ffe55f",
      iconSymbol: "🧐",
      iconCode: "&#129488",
      keyword: "inspeção",
      descriptionSubtitled: "Data exploration/inspection",
      descriptionDubbed: "Exploração/inspeção de dados"
    },
    {
      color: "#ef5350",
      iconSymbol: "⬇️",
      iconCode: "&#11015",
      keyword: "desatualizar",
      descriptionSubtitled: "Downgrade dependency",
      descriptionDubbed: "Desatualizar dependência"
    },
    {
      color: "#00e676",
      iconSymbol: "⬆️",
      iconCode: "&#10133",
      keyword: "atualizar",
      descriptionSubtitled: "Upgrade dependency",
      descriptionDubbed: "Atualizar dependência"
    },
    {
      color: "#39c2f1",
      iconSymbol: "📌",
      iconCode: "&#128204",
      keyword: "fixar",
      descriptionSubtitled: "Pin dependency to specific version",
      descriptionDubbed: "Fixar versão da dependência"
    },
    {
      color: "#00e676",
      iconSymbol: "➕",
      iconCode: "&#11014",
      keyword: "adicionar",
      descriptionSubtitled: "Add dependency",
      descriptionDubbed: "Adicionar dependência"
    },
    {
      color: "#ef5350",
      iconSymbol: "➖",
      iconCode: "&#11015",
      keyword: "remover",
      descriptionSubtitled: "Remove dependency",
      descriptionDubbed: "Remove dependência"
    },
    {
      color: "#d8568c",
      iconSymbol: "⏪️",
      iconCode: "&#9194",
      keyword: "reverter",
      descriptionSubtitled: "Revert change",
      descriptionDubbed: "Reverter alteração"
    },
    {
      color: "#dfc011",
      iconSymbol: "🔀",
      iconCode: "&#128256",
      keyword: "mesclar",
      descriptionSubtitled: "Merge branch",
      descriptionDubbed: "Mesclar ramificação"
    },
    {
      color: "#e6a97a",
      iconSymbol: "📦️",
      iconCode: "&#128230",
      keyword: "pacote",
      descriptionSubtitled: "Add or update compiled file or package",
      descriptionDubbed: "Adicionar ou atualizar arquivo ou pacote compilado"
    },
    {
      color: "#23b4d2",
      iconSymbol: "🔊",
      iconCode: "&#128266",
      keyword: "log",
      descriptionSubtitled: "Add or update log",
      descriptionDubbed: "Adicionar ou atualizar registro"
    },
    {
      color: "#ffc400",
      iconSymbol: "🔇",
      iconCode: "&#128263",
      keyword: "log",
      descriptionSubtitled: "Remove log",
      descriptionDubbed: "Remover registro"
    },
    {
      color: "#c661df",
      iconSymbol: "💡",
      iconCode: "&#128161",
      keyword: "comentário",
      descriptionSubtitled: "Add or update comment in source code",
      descriptionDubbed: "Adicionar ou atualizar comentário no código fonte"
    },
    {
      color: "#43a182",
      iconSymbol: "🔧",
      iconCode: "&#128295",
      keyword: "configuração",
      descriptionSubtitled: "Add or update configuration file",
      descriptionDubbed: "Adicionar ou atualizar arquivo de configuração"
    },
    {
      color: "#8cb7da",
      iconSymbol: "🔨",
      iconCode: "&#128296",
      keyword: "script",
      descriptionSubtitled: "Add or update development script",
      descriptionDubbed: "Adicionar ou atualizar script de desenvolvimento"
    },
    {
      color: "#ee5353",
      iconSymbol: "📈",
      iconCode: "&#128172",
      keyword: "análise",
      descriptionSubtitled: "Add or update analytics or track code",
      descriptionDubbed: "Adicione ou atualize análises ou código de rastreamento"
    },
    {
      color: "#b38188",
      iconSymbol: "🌐",
      iconCode: "&#127760",
      keyword: "localização",
      descriptionSubtitled: "Internationalization and localization",
      descriptionDubbed: "Internacionalização e localização"
    },
    {
      color: "#c5e763",
      iconSymbol: "👽️",
      iconCode: "&#128125",
      keyword: "api",
      descriptionSubtitled: "Update code due to external API change",
      descriptionDubbed: "Atualizar código devido a alteração de API externa"
    },
    {
      color: "#ef584a",
      iconSymbol: "🚚",
      iconCode: "&#128666",
      keyword: "caminho",
      descriptionSubtitled: "Move or rename resource (File, path, route)",
      descriptionDubbed: "Mover ou renomear recurso (Arquivo, caminho, rota)"
    },
    {
      color: "#00b1fb",
      iconSymbol: "♿️",
      iconCode: "&#9855",
      keyword: "acessibilidade",
      descriptionSubtitled: "Improve accessibility",
      descriptionDubbed: "Melhorar a acessibilidade"
    },
    {
      color: "#ffce49",
      iconSymbol: "🚸",
      iconCode: "&#128696",
      keyword: "usabilidade",
      descriptionSubtitled: "Improve user experience/usability",
      descriptionDubbed: "Melhore a experiência/usabilidade do usuário"
    },
    {
      color: "#f15df7",
      iconSymbol: "📱",
      iconCode: "&#128241",
      keyword: "responsividade",
      descriptionSubtitled: "Work on responsive design",
      descriptionDubbed: "Trabalhe em design responsivo"
    },
    {
      color: "#89e79d",
      iconSymbol: "💫",
      iconCode: "&#128171",
      keyword: "animação",
      descriptionSubtitled: "Add or update animation and transition",
      descriptionDubbed: "Adicionar ou atualizar animação e transição"
    },
    {
      color: "#83beec",
      iconSymbol: "👔",
      iconCode: "&#128084",
      keyword: "logo",
      descriptionSubtitled: "Add or update business logi",
      descriptionDubbed: "Adicionar ou atualizar o logo comercial"
    },
    {
      color: "#b589e7",
      iconSymbol: "📸",
      iconCode: "&#128248",
      keyword: "instantâneo",
      descriptionSubtitled: "Add or update snapshot",
      descriptionDubbed: "Adicionar ou atualizar instantâneo"
    },
    {
      color: "#ffe55f",
      iconSymbol: "🔍️",
      iconCode: "&#128269",
      keyword: "busca",
      descriptionSubtitled: "Improve SEO",
      descriptionDubbed: "Melhore a otimização para motores de busca"
    },
    {
      color: "#cedae6",
      iconSymbol: "💬",
      iconCode: "&#128172",
      keyword: "literal",
      descriptionSubtitled: "Add or update text and literal",
      descriptionDubbed: "Adicionar ou atualizar texto e literal"
    },
    {
      color: "#f5b11f",
      iconSymbol: "👥",
      iconCode: "&#128101",
      keyword: "colaborador",
      descriptionSubtitled: "Add or update contributor",
      descriptionDubbed: "Adicionar ou atualizar colaborador"
    },
    {
      color: "#a3f1eb",
      iconSymbol: "🏗️",
      iconCode: "&#127959",
      keyword: "arquitetura",
      descriptionSubtitled: "Make architectural change",
      descriptionDubbed: "Faça uma mudança arquitetônica"
    },
    {
      color: "#8cf56c",
      iconSymbol: "🩺",
      iconCode: "&#",
      keyword: "integridade",
      descriptionSubtitled: "Add or update healthcheck",
      descriptionDubbed: "Adicionar ou atualizar verificação de integridade"
    },
    {
      color: "#fd7f45",
      iconSymbol: "🧱",
      iconCode: "&#",
      keyword: "infraestrutura",
      descriptionSubtitled: "Infrastructure related change",
      descriptionDubbed: "Mudança relacionada à infraestrutura"
    },
    {
      color: "#b66a6a",
      iconSymbol: "🥚",
      iconCode: "&#129370",
      keyword: "surpresa",
      descriptionSubtitled: "Add or update an easter egg",
      descriptionDubbed: "Adicionar ou atualizar um ovo de páscoa"
    },
    {
      color: "#86B837",
      iconSymbol: "🧑‍💻",
      iconCode: "&#129489 &#128187",
      keyword: "dev",
      descriptionSubtitled: "Improve developer experienc",
      descriptionDubbed: "Melhore a experiência do desenvolvedor"
    },
    {
      color: "#b3c0b1",
      iconSymbol: "💸",
      iconCode: "&#128184",
      keyword: "dinheiro",
      descriptionSubtitled: "Add sponsorships or money related infrastructure",
      descriptionDubbed: "Adicione patrocínios ou infraestrutura relacionada a dinheiro"
    },
    {
      color: "#536dfe",
      iconSymbol: "🚨",
      iconCode: "&#128680",
      keyword: "compilador",
      descriptionSubtitled: "Fix compiler/linter warning",
      descriptionDubbed: "Corrigir aviso do compilador/linter"
    },
    {
      color: "#c5e763",
      iconSymbol: "💚",
      iconCode: "&#128154",
      keyword: "CI",
      descriptionSubtitled: "Fix CI build",
      descriptionDubbed: "Corrigir compilação de CI"
    },
    {
      color: "#64b5f6",
      iconSymbol: "👷",
      iconCode: "&#128119",
      keyword: "CI",
      descriptionSubtitled: "Add or update CI build system",
      descriptionDubbed: "Adicionar ou atualizar o sistema de compilação de CI"
    },
    {
      color: "#fbb64b",
      iconSymbol: "🍻",
      iconCode: "&#127867",
      keyword: "bêbado",
      descriptionSubtitled: "Write code drunkenly",
      descriptionDubbed: "Escrever código embriagado"
    },
    {
      color: "#ff7281",
      iconSymbol: "🤡",
      iconCode: "&#129313",
      keyword: "zombar",
      descriptionSubtitled: "Mock thing",
      descriptionDubbed: "Coisa simulada"
    },
  ]

  for (let index = 0; index < types.length; index++) {
    doc.getElementById("types").innerHTML += `
      <div class="type">
        <strong class="title">${types[index].title}</strong>
        <span class="divisor"></span>
        <b class="keyword">${types[index].keyword}</b>
      </div>
    `

    doc.getElementById("descriptionsType").innerHTML += `
      <aside id="${types[index].title}" class="descriptionType hide">
        <div class="titleKeyword">
          <b class="title">${types[index].title}</b>
          <span class="divisor"></span>
          <b class="keyword">${types[index].keyword}</b>
        </div>

        <p
          title="${types[index].description}"
          class="summary"
        >
          ${types[index].summary}
        </p>
      </aside>
    `
  }

  doc.querySelectorAll(".type").forEach((type) => {
    type.addEventListener("click", () => {
      doc.querySelectorAll(".type").forEach((data) => {
        data.removeAttribute("isChecked", "")
      })

      doc.querySelectorAll(".descriptionType").forEach((data) => {
        data.setAttribute("class", "descriptionType hide")
      })

      const title = type.querySelector(".title").innerHTML

      type.setAttribute("isChecked", "")
      doc.querySelector(`#${title}`).setAttribute("class", "descriptionType")

      doc.querySelector("#descriptionsType").setAttribute("class", "")
    })
  })

  doc.querySelectorAll(".type")[0].setAttribute("isChecked", "")
  doc.querySelectorAll(".descriptionType")[0].setAttribute("class", "descriptionType")

  for (let index = 0; index < emojis.length; index++) {
    doc.getElementById("emojis").innerHTML += `
      <div class="emoji">
        <header class="header" style="background-color: ${emojis[index].color}">
          <strong class="iconSymbolG">${emojis[index].iconSymbol}</strong>

          <p class="iconSymbolP" hidden>${emojis[index].iconSymbol}</p>
          <p class="descriptionDubbed" hidden>${emojis[index].descriptionDubbed}</p>
        </header>

        <main
          title="${emojis[index].descriptionSubtitled}"
          class="main"
        >
          <h1 class="keyword">${emojis[index].keyword}</h1>
        </main>
      </div>
    `
  }

  doc.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", () => {
      emoji.querySelectorAll("strong").forEach((strong) => {
        emoji.querySelectorAll("p").forEach((p) => {
          if (p.hasAttribute("hidden")) {
            strong.setAttribute("hidden", "")
            p.removeAttribute("hidden")
          } else {
            strong.removeAttribute("hidden")
            p.setAttribute("hidden", "")
          }
        })
      })
    })
  })
})(document, window)
