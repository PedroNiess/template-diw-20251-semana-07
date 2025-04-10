const receitas = [
    {
      id: 1,
      nome: "Pudim de Leite Condensado",
      imagem: "image.png",
      descricao: "Um clássico irresistível com calda caramelizada.",
      ingredientes: [
        "1 lata de leite condensado",
        "1 lata de leite",
        "3 ovos"
      ],
      modoPreparo: [
        "Bata os ovos no liquidificador.",
        "Adicione o leite condensado e o leite, bata novamente.",
        "Derreta o açúcar e adicione água para fazer a calda.",
        "Despeje a calda na forma e adicione a mistura do pudim.",
        "Asse em banho-maria por 45 minutos.",
        "Deixe esfriar e desenforme."
      ]
    },
    {
      id: 2,
      nome: "Brigadeiro",
      imagem: "brigadeiro.png",
      descricao: "Doce tradicional brasileiro feito com chocolate.",
      ingredientes: [
        "1 caixa de leite condensado",
        "1 colher de margarina sem sal",
        "7 colheres de achocolatado ou 4 de chocolate em pó",
        "Chocolate granulado"
      ],
      modoPreparo: [
        "Misture tudo em uma panela.",
        "Mexa até desgrudar do fundo.",
        "Deixe esfriar e enrole em bolinhas.",
        "Passe no granulado."
      ]
    }
  ];
  
  // Página Home
  function gerarCards() {
    const container = document.getElementById("cards-container");
    if (!container) return;
  
    receitas.forEach(receita => {
      const card = document.createElement("div");
      card.classList.add("card", "p-3", "m-2");
  
      card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.nome}" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">${receita.nome}</h3>
          <p class="card-text">${receita.descricao}</p>
          <a href="detalhes.html?id=${receita.id}" class="btn-detalhes">Ver detalhes</a>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Página Detalhes
  function gerarDetalhes() {
    const container = document.getElementById("detalhes-container");
    if (!container) return;
  
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
  
    const receita = receitas.find(r => r.id === id);
  
    if (!receita) {
      container.innerHTML = `<p>Receita não encontrada.</p>`;
      return;
    }
  
    container.innerHTML = `
      <div class="card detalhes">
        <img src="${receita.imagem}" alt="${receita.nome}" />
        <div class="card-body">
          <h2>${receita.nome}</h2>
          <p>${receita.descricao}</p>
          <h4>Ingredientes:</h4>
          <ul>${receita.ingredientes.map(i => `<li>${i}</li>`).join("")}</ul>
          <h4>Modo de Preparo:</h4>
          <ol>${receita.modoPreparo.map(p => `<li>${p}</li>`).join("")}</ol>
        </div>
      </div>
    `;
  }
  
  // Executa a função certa dependendo da página
  document.addEventListener("DOMContentLoaded", () => {
    gerarCards();
    gerarDetalhes();
  });
  