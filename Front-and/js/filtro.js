let pets = []; // variável global

function carregar_animal() {

  
  let idpet = window.location.search.split('=');
  idpet = idpet[1];
  console.log(idpet)

  // const div_animal = document.getElementById("animais");
  // fetch(`http://127.0.0.1:5000/api/v1/animal/listarporid/${idpet}`)
  //     .then((res) => res.json())
  //     .then((dt) => {
  //         console.log(dt);
  //         let div_img = document.createElement("div");
  //         div_img.setAttribute("id", "div_img");
  //         let div_capa = document.createElement("div");
  //         div_capa.setAttribute("id", "div_capa");
  //         let img_capa = document.createElement("img");
  //         img_capa.src = dt[0].foto_animal;

  //         //adicionar a imagem da capa a div capa
  //         div_capa.appendChild(img_capa)

  //         //adicionar a div capa a div imagem
  //         div_img.appendChild(div_capa)



  //         let div_miniatura = document.createElement("div");
  //         div_miniatura.setAttribute("id", "div_miniatura");
  //         let img_miniatura1 = document.createElement("img");
  //         let img_miniatura2 = document.createElement("img");
  //         let img_miniatura3 = document.createElement("img");
  //         img_miniatura1.src = dt[0].foto1;
  //         img_miniatura2.src = dt[0].foto2;
  //         img_miniatura3.src = dt[0].foto3;

  //         //Colocar as fotos de miniatura dentro da div miniatura
  //         div_miniatura.appendChild(img_miniatura1);
  //         div_miniatura.appendChild(img_miniatura2);
  //         div_miniatura.appendChild(img_miniatura3);

  //         img_miniatura1.addEventListener("click", () => img_capa.src = dt[0].foto1);
  //         img_miniatura2.addEventListener("click", () => img_capa.src = dt[0].foto2);
  //         img_miniatura3.addEventListener("click", () => img_capa.src = dt[0].foto3);

  //         //Colocar a div miniatura dentro da div imagem
  //         div_img.appendChild(div_miniatura);

  //         //Colocar a div de imagens dentro da div animais
  //         div_animal.appendChild(div_img)

  //         let div_titulo_descricao = document.createElement("div");
  //         div_titulo_descricao.setAttribute("id", "div_titulo_descricao");

  //         let h3_titulo = document.createElement("h3");
  //         h3_titulo.innerHTML = dt[0].nome;

  //         let p_descricao = document.createElement("p");
  //         p_descricao.innerHTML = dt[0].descricao;

  //         //adicionar o titulo e a descricao dentro da div titulo descricao
  //         div_titulo_descricao.appendChild(h3_titulo);
  //         div_titulo_descricao.appendChild(p_descricao);

  //         div_animal.appendChild(div_titulo_descricao);

  //     })

}

function renderPets(petsFiltrados = []) {
  const container = document.getElementById("fotodopet");
  let saida = `<div class="pets-container">`;

  petsFiltrados.forEach((pet) => {
    saida += `
    <a class="gay" href="carregar.html?idpet=${pet.id_animal}">
      <div class="pet-card" onclick="carregar_animal()">
        <img src="${pet.foto_animal}" alt="Imagem de ${pet.nome || 'Sem nome'}" class="pet-img">
        <div class="card-info"> 
          <h3 class="card-name">${pet.nome || "Sem nome"}</h3>
          <p class="card-location">${pet.sexo || 'Desconhecido'} | ${pet.status || 'Desconhecido'} | ${pet.tipo_animal || 'Desconhecido'} </p>
        </div>
      </div>
      </a>
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