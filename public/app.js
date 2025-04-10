const produtos = [
    {
      id: 1,
      nome: "Brigadeiro Gourmet",
      imagem: "brigadeiro.png",
      descricao: "Delicioso brigadeiro feito com chocolate belga.",
      preco: "R$ 4,00"
    },
    {
      id: 2,
      nome: "Pudim de leite condensado",
      imagem: "image.png",
      descricao: "Cupcake com recheio de morango e cobertura de chantilly.",
      preco: "R$ 6,50"
    },
  ];
  
  function gerarCards() {
    const container = document.getElementById("cards-container");
  
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" />
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span>${produto.preco}</span>
      `;
  
      container.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", gerarCards);
  