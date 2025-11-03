// ===== Dados =====

// Audiovisual
const audiovisual = [
  {title:"Um Filme de BR", role:"Pós-produção de Áudio", year:"2025", description:"Documentário longa-metragem de Wender Zanon (Canoas-RS)."},
  {title:"Ensaios Sobre Uma Cidade", role:"Pós-produção de Áudio", year:"2024", description:"Curta documentário de Wender Zanon (Canoas-RS).", link:"http://youtu.be/Bo4mRjjIRiA"},
  {title:"This Is Canoas Not POA", role:"Pós-produção de Áudio", year:"2021", description:"Documentário longa-metragem de Wender Zanon.", link:"http://youtu.be/s9QQOOeqh0w"},
  {title:"Sem Abrigo", role:"Trilha Original", year:"2017", description:"Curta de Leonardo Remor. Trilha 'V', dpsmkr. Premiado no 46º Festival de Cinema de Gramado.", link:"http://dpsmkr.bandcamp.com/track/v"},
  {title:"White", role:"Trilha Original", year:"2017", description:"Curta de Jaasiel Andrade. Trilha 'White', AKAAO.", link:"http://akaao.bandcamp.com/track/white"}
];

// Álbuns
const albums = [
  {title:"Idade da Desordem", artist:"Idade da Desordem", role:"Produção, Gravação, Edição, Mixagem, Masterização", year:"2025", link:"https://idadedadesordem.bandcamp.com/album/idade-da-desordem"},
  {title:"The Completers", artist:"The Completers", role:"Produção, Gravação, Edição, Mixagem", year:"2025", link:"http://thecompleters.bandcamp.com/album/the-completers"},
  {title:"deumdentrodooutro", artist:"Mal dos Trópicos", role:"Produção, Gravação, Edição, Mixagem, Masterização", year:"2024", link:"https://maldostropicos.bandcamp.com/album/deumdentrodooutro"},
  {title:"13072024", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2024", link:"http://dpsmkr.bandcamp.com/album/13072024-live"},
  {title:"Cortina de Fumaça", artist:"Cortina de Fumaça", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2024", link:"http://cortinadefumaca.bandcamp.com/album/cortina-de-fuma-a"},
  {title:"The Count", artist:"The Count", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2024", link:"http://the-count.bandcamp.com/album/the-count"},
  {title:"04122022", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2022", link:"http://dpsmkr.bandcamp.com/album/04122022-live"},
  {title:"This is Canoas, not POA! - Décadas - Trilha Sonora", artist:"VA", role:"Masterização", year:"2021", link:"http://youtube.com/watch?v=obe7u0jW2kk&list=PLrpkFGewjNOYGeE9NZXpt4tGVGZ6PkHau"},
  {title:"1554", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2020", link:"http://dpsmkr.bandcamp.com/album/1554"},
  {title:"Gizamaluke’s Exile", artist:"Cruise Noir", role:"Composição, Programação, Gravação, Edição, Mixagem, Masterização", year:"2020", link:"http://cruisenoir.bandcamp.com/album/gizamalukes-exile"},
  {title:"S/T", artist:"Conflito", role:"Pré-produção, Produção, Composição, Edição, Mixagem, Masterização", year:"2019", link:"http://sonsdoconflito.bandcamp.com/releases"},
  {title:"Pégaso", artist:"Subespectro", role:"Pré-produção, Produção, Composição, Gravação, Edição, Mixagem, Masterização", year:"2019", link:"http://subespectro.bandcamp.com/releases"},
  {title:"1562019", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2019", link:"http://dpsmkr.bandcamp.com/album/1562019-live"},
  {title:"Unspoken Signals", artist:"The Completers", role:"Pré-produção, Composição", year:"2018", link:"http://thecompleters.bandcamp.com/album/unspoken-signals"},
  {title:"O Fim", artist:"Velho de Câncer", role:"Pós-produção, Edição, Mixagem, Masterização", year:"2018", link:"http://velhodecancer.bandcamp.com/album/o-fim"},
  {title:"赤青", artist:"AKAAO", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://akaao.bandcamp.com/album/psychic-uprising"},
  {title:"Psychic Uprising", artist:"AKAAO", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://akaao.bandcamp.com/album/psychic-uprising"},
  {title:"LMR01A: Spectro", artist:"Spectro", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://limiar.bandcamp.com/album/lmr01a-spectro"},
  {title:"LMR01B: em extinção", artist:"em extinção", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://limiar.bandcamp.com/album/lmr01b-em-extin-o"},
  {title:"LMR01C: AKAAO", artist:"AKAAO", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://limiar.bandcamp.com/album/lmr01c-akaao"},
  {title:"1392018", artist:"dpsmkr", role:"Composição, Edição, Mixagem, Masterização", year:"2018", link:"http://dpsmkr.bandcamp.com/album/1392018-live"},
  {title:"desvio para o vermelho", artist:"Input Nulo", role:"Pós-produção, Edição, Mixagem, Masterização", year:"2018", link:"http://inputnulo.bandcamp.com"},
  {title:"Computer Music", artist:"Cruise Noir", role:"Composição, Programação, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://cruisenoir.bandcamp.com/album/computer-music"},
  {title:"Change Your Life", artist:"Change Your Life", role:"Composição, Produção", year:"2017", link:"http://changeyourlife.bandcamp.com"},
  {title:"592017", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://dpsmkr.bandcamp.com/album/592017"},
  {title:"1082017", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://dpsmkr.bandcamp.com/album/1082017"},
  {title:"digital waste", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://dpsmkr.bandcamp.com/album/1082017"},
  {title:"2552017", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://dpsmkr.bandcamp.com/album/2552017"},
  {title:"ghost", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://dpsmkr.bandcamp.com/album/ghost"},
  {title:"live @ minor house ocupa julinho", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2017", link:"http://dpsmkr.bandcamp.com/album/live-minor-house-ocupa-julinho"},
  {title:"quatorze", artist:"outubro", role:"Composição, Masterização", year:"2016", link:"http://outubro14.bandcamp.com/album/quatorze"},
  {title:"cineabacaxi #2", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2016", link:"http://dpsmkr.bandcamp.com/album/cineabacaxi-2"},
  {title:"Mas às vezes, as luzes e cores aparecem e desaparecem", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2015", link:"http://dpsmkr.bandcamp.com/album/mas-s-vezes-as-luzes-e-cores-aparecem-e-desaparecem"},
  {title:"1242015", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2015", link:"http://dpsmkr.bandcamp.com/album/1242015"},
  {title:"Leaving", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2014", link:"http://dpsmkr.bandcamp.com/album/leaving"},
  {title:"Hypnotic Regression Therapy", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2014", link:"http://dpsmkr.bandcamp.com/album/hypnotic-regression-therapy"},
  {title:"8122014", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2014", link:"http://dpsmkr.bandcamp.com/album/8122014"},
  {title:"Cinza", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2013", link:"http://dpsmkr.bandcamp.com/album/cinza"},
  {title:"I", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2013", link:"http://dpsmkr.bandcamp.com/album/i"}
];

// EPs / Mini-álbuns
const eps = [
  {title:"Aggressive & Top", artist:"MÄSKARA", role:"Composição, Pré-produção, Produção", year:"2023", link:"http://maskarabr.bandcamp.com/album/aggressive-top"},
  {title:"vol. 5", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2021", link:"http://dpsmkr.bandcamp.com/album/vol-5"},
  {title:"Living Under Society’s Thumb", artist:"L.U.S.T.", role:"Composição, Produção, Gravação, Edição, Mixagem, Masterização", year:"2020", link:"http://lustpunx.bandcamp.com/releases"},
  {title:"#1", artist:"Duplo Binário", role:"Mixagem, Masterização", year:"2019", link:"http://duplobinario.bandcamp.com/album/1"},
  {title:"experimentos com guitarra não-elétrica", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2016", link:"http://dpsmkr.bandcamp.com/album/experimentos-com-guitarra-n-o-el-trica"},
  {title:"vol. 3", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2015", link:"http://dpsmkr.bandcamp.com/album/vol-3"},
  {title:"transmission", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2015", link:"http://dpsmkr.bandcamp.com/album/transmission"},
  {title:"vol. 2", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2015", link:"http://dpsmkr.bandcamp.com/album/vol-2"},
  {title:"dpsmkr", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2014", link:"http://dpsmkr.bandcamp.com/album/dpsmkr"},
  {title:"ethereal pacing", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2013", link:"http://dpsmkr.bandcamp.com/album/ethereal-pacing"},
  {title:"solidus", artist:"dpsmkr", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2013", link:"http://dpsmkr.bandcamp.com/album/solidus"}
];

// Singles / Faixas
const singles = [
  {title:"Faixa Bônus", artist:"Paquetá", role:"Masterização", year:"2019", link:"http://paqueta.bandcamp.com/track/faixa-b-nus"},
  {title:"paguroidea", artist:"dpsmkr / collideorscapes", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2020", link:"http://dpsmkr.bandcamp.com/track/paguroidea"},
  {title:"Neal! Allen!", artist:"Cruise Noir", role:"Composição, Programação, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://cruisenoir.bandcamp.com/track/neal-allen"}
];

// Podcasts
const podcasts = [
  {title:"This is Canoas Podcast", role:"Gravação, Edição, Mixagem", year:"2021", link:"http://podcast.example.com"}
];

// Splits / Colaborações
const splits = [ 
	{title:"dpsmkr vs. corpo celeste", artist:"dpsmkr / corpo celeste", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2019", link:"http://dpsmkr.bandcamp.com/album/corpo-celeste-vs-dpsmkr-live"}, 
	{title:"LMR01D: em extinção + Spectro + AKAAO", artist:"Split", role:"Composição, Gravação, Edição, Mixagem, Masterização", year:"2018", link:"http://limiar.bandcamp.com/album/lmr01d-em-extin-o-spectro-akaao"}, 
	{title:"Split", artist:"Montana / Ornitorrincos", role:"Composição", year:"2016", link:"http://ornitorrincos.bandcamp.com/album/montana-ornitorrincos"}, 
	{title:"dopesmoked", artist:"satvrn / satvrn / dpsmkr", role:"Composição, Gravação", year:"2014", link:"http://dpsmkr.bandcamp.com/album/dopesmoked"} ];

// Seções
const sectionsData = [
  {name:"Todas", items:[...audiovisual,...albums,...eps,...singles,...podcasts,...splits]},
  {name:"Audiovisual", items:audiovisual},
  {name:"Álbuns", items:albums},
  {name:"EPs / Mini-álbuns", items:eps},
  {name:"Singles / Faixas", items:singles},
  {name:"Podcasts", items:podcasts},
  {name:"Splits / Colaborações", items:splits}
];

let currentFilter = { section: "Todas" };

// ===== Funções =====
function renderGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  const items = sectionsData.find(s => s.name === currentFilter.section).items;

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    setTimeout(() => card.classList.add("show"), index * 60);

    // Criando o link que envolve todo o card
    const linkWrapper = document.createElement("a");
    linkWrapper.className = "card-link";
    linkWrapper.target = "_blank";
    if (item.link) linkWrapper.href = item.link;

    let html = `<h3><span class="title">${item.title}</span>`;
    if (item.artist) html += ` — <span class="artist">${item.artist}</span>`;
    html += `</h3><div>${item.role} • ${item.year}</div>`;
    if (item.description) html += `<p>${item.description}</p>`;
    linkWrapper.innerHTML = html;
    card.appendChild(linkWrapper);
    grid.appendChild(card);
  });

  // Ajusta padding-top do main para alinhar com primeiro botão do menu
  const firstButton = document.querySelector("#sections button");
  if (firstButton) {
    const main = document.querySelector("main");
    const offsetTop = firstButton.getBoundingClientRect().top + window.scrollY;
    main.style.paddingTop = `${offsetTop}px`;
  }
}


function renderMenu() {
  const container = document.getElementById("sections");
  container.innerHTML = "";

  sectionsData.forEach(sec => {
    const btn = document.createElement("button");
    btn.textContent = sec.name;

    btn.addEventListener("click", () => {
      currentFilter.section = sec.name;
      renderGrid();
      updateActiveButtons();
      closeMenu();
    });

    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateX(5px)";
      btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = btn.classList.contains("active") ? "translateX(5px)" : "translateX(0)";
      btn.style.boxShadow = "none";
    });

    container.appendChild(btn);
  });
  
  // Após adicionar todos os botões
  const contact = document.createElement("div");
  contact.id = "contact";
  contact.innerHTML = `
    <p><a href="mailto:jonas.dalacorte@gmail.com">jonas.dalacorte@gmail.com</a></p>
  `;
  container.appendChild(contact);
  

  updateActiveButtons();
}

function updateActiveButtons() {
  document.querySelectorAll("#sections button").forEach(btn => {
    btn.classList.toggle("active", btn.textContent === currentFilter.section);
    btn.style.transform = btn.classList.contains("active") ? "translateX(5px)" : "translateX(0)";
    btn.style.boxShadow = btn.classList.contains("active") ? "0 4px 12px rgba(0,0,0,0.5)" : "none";
  });
}

function toggleMenu() { document.getElementById("sidebar").classList.toggle("open"); }
function closeMenu() { document.getElementById("sidebar").classList.remove("open"); }

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

window.addEventListener("scroll", () => {
  const topBtn = document.getElementById("topBtn");
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

document.getElementById("topBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Inicialização
renderMenu();
renderGrid();
