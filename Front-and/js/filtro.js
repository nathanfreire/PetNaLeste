let pets = []; // variável global

function renderPets(petsFiltrados = []) {
  const container = document.getElementById("fotodopet");
  let saida = `<div class="pets-container">`;

  petsFiltrados.forEach((pet) => {
    saida += `
      <div class="pet-card">
        <img src="${pet.foto_animal}" alt="Imagem de ${pet.nome || 'Sem nome'}" class="pet-img">
        <div class="card-info"> 
          <h3 class="card-name">${pet.nome || "Sem nome"}</h3>
          <p class="card-location">${pet.sexo || 'Desconhecido'} | ${pet.status || 'Desconhecido'} | ${pet.tipo_animal || 'Desconhecido'} </p>
        </div>
      </div>
    `;
  });

  saida += `</div>`;
  container.innerHTML = saida;
}

function carregarPets() {
  fetch("http://127.0.0.1:5000/api/v1/animal/listar")
    .then((res) => res.json())
    .then((dados) => {
      pets = dados || []; // garante array mesmo que dados seja null ou undefined
      renderPets(pets);
    })
    .catch((err) => {
      console.error("Erro ao carregar pets:", err);
      renderPets([]); // limpa a lista em caso de erro
    });
}

// Chama a função para carregar os pets ao carregar a página
window.onload = carregarPets;


function aplicarFiltros(fromModal = false) {
  const especieCheckboxes = document.querySelectorAll(".filtro-especie:checked");
  const statusCheckboxes = document.querySelectorAll(".filtro-status:checked");
  const generoCheckboxes = document.querySelectorAll(".filtro-genero:checked");

  const corInput = fromModal
    ? document.getElementById("filtro-cor-modal").value.toLowerCase()
    : document.getElementById("filtro-cor").value.toLowerCase();

    const especies = Array.from(especieCheckboxes).map(cb => cb.value.toLowerCase());
    const status = Array.from(statusCheckboxes).map(cb => cb.value.toLowerCase());
    const generos = Array.from(generoCheckboxes).map(cb => cb.value.toLowerCase());
    

  const filtrados = pets.filter(pet => {
    const especieOk = especies.length === 0 || especies.includes(pet.tipo_animal?.toLowerCase());
    const statusOk = status.length === 0 || status.includes(pet.status?.toLowerCase());
    const generoOk = generos.length === 0 || generos.includes(pet.sexo?.toLowerCase());
    const corOk = !corInput || pet.cor?.toLowerCase().includes(corInput);
  
    return especieOk && statusOk && generoOk && corOk;
  });

  renderPets(filtrados);
  fecharModal(); // opcional: se estiver usando um modal
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