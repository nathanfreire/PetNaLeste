const pets = [
    {
      nome: "Arcor",
      especie: "gato",
      status: "perdido",
      genero: "macho",
      cor: "preto",
      imagem: "https://static.wixstatic.com/media/a80dc2_2a25fc56961e48cca2bb43a0fab1fd9f~mv2.jpg/v1/fill/w_640,h_720,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a80dc2_2a25fc56961e48cca2bb43a0fab1fd9f~mv2.jpg"
    },
    {
      nome: "Luzinha",
      especie: "gato",
      status: "perdido",
      genero: "femea",
      cor: "cinza",
      imagem: "https://placekitten.com/301/200"
    },
    {
      nome: "Desconhecido",
      especie: "gato",
      status: "encontrado",
      genero: "macho",
      cor: "branco",
      imagem: "https://placekitten.com/302/200"
    },   
    
  ];
  
  function renderPets(petsFiltrados) {
    const container = document.getElementById("lista-pets");
    container.innerHTML = "";
  
    petsFiltrados.forEach(pet => {
      const card = document.createElement("div");
      card.className = "pet-card";
      card.innerHTML = `
        <img src="${pet.imagem}" alt="Imagem de ${pet.nome}" class="pet-img">
        <strong>${pet.nome}</strong><br>
        Espécie: ${pet.especie}<br>
        Status: ${pet.status}<br>
        Gênero: ${pet.genero}<br>
        Cor: ${pet.cor}
      `;
      container.appendChild(card);
    });
  }
  
  

function aplicarFiltros(fromModal = false) {
  const especieCheckboxes = document.querySelectorAll(".filtro-especie:checked");
  const statusCheckboxes = document.querySelectorAll(".filtro-status:checked");
  const generoCheckboxes = document.querySelectorAll(".filtro-genero:checked");

  const corInput = fromModal
    ? document.getElementById("filtro-cor-modal").value.toLowerCase()
    : document.getElementById("filtro-cor").value.toLowerCase();

  const especies = Array.from(especieCheckboxes).map(cb => cb.value);
  const status = Array.from(statusCheckboxes).map(cb => cb.value);
  const generos = Array.from(generoCheckboxes).map(cb => cb.value);

  const filtrados = pets.filter(pet => {
    const especieOk = especies.length === 0 || especies.includes(pet.especie);
    const statusOk = status.length === 0 || status.includes(pet.status);
    const generoOk = generos.length === 0 || generos.includes(pet.genero);
    const corOk = !corInput || pet.cor.toLowerCase().includes(corInput);

    return especieOk && statusOk && generoOk && corOk;
  });

  renderPets(filtrados);
  fecharModal(); // fecha o modal após aplicar
}

function abrirModal() {
  document.getElementById("modalFiltros").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modalFiltros").style.display = "none";
}

// Eventos (desktop)
document.querySelectorAll(".filtros input").forEach(input => {
  input.addEventListener("change", () => aplicarFiltros(false));
});

// Inicial
renderPets(pets);