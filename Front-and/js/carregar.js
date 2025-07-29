function carregar_animal() {
  let idpet = window.location.search.split('=')[1];
  console.log("ID do pet:", idpet);

  const div_imagens = document.querySelector(".pet-images");
  const div_info = document.querySelector(".pet-info");
  const div_map = document.querySelector(".pet-map");
  const div_nome = document.querySelector(".pet-nome")

  // Função para formatar a data
  function formatarData(dataISO) {
    if (!dataISO) return '';
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR');
  }

  fetch(`http://127.0.0.1:5000/api/v1/animal/listarporid/${idpet}`)
    .then((res) => res.json())
    .then(async (dt) => {
        

      let pet = dt[0];
      let enderecoPet
     await fetch(`http://127.0.0.1:5000/api/v1/endereco/listarporid/${pet.id_endereco}`)
      .then((res) => res.json())
      .then((end) => {
       enderecoPet = end [0]
       console.log (enderecoPet)
      })
      
      console.log (enderecoPet)
      // === IMAGEM PRINCIPAL ===
      const capa = document.createElement("div");
      capa.className = "capa";
      const imgCapa = document.createElement("img");
      imgCapa.id = "img-capa";
      imgCapa.src = pet.foto_animal;
      capa.appendChild(imgCapa);

      // === MINIATURAS ===
      const miniaturas = document.createElement("div");
      miniaturas.className = "miniaturas";

      const mini1 = document.createElement("img");
      const mini2 = document.createElement("img");
      const mini3 = document.createElement("img");

      mini1.src = pet.foto_animal;
      mini2.src = pet.foto2;
      mini3.src = pet.foto3;

      // Trocar capa ao clicar
      mini1.addEventListener("click", () => imgCapa.src = pet.foto_animal);
      mini2.addEventListener("click", () => imgCapa.src = pet.foto2);
      mini3.addEventListener("click", () => imgCapa.src = pet.foto3);

      miniaturas.appendChild(mini1);
      miniaturas.appendChild(mini2);
      miniaturas.appendChild(mini3);

      div_imagens.appendChild(capa);
      div_imagens.appendChild(miniaturas);

      // === INFORMAÇÕES COM RÓTULOS ===
      const h3 = document.createElement("h3");
      h3.textContent = pet.nome;

      const pDescricao = document.createElement("p");
      pDescricao.innerHTML = `<strong>Descrição:</strong> ${pet.descricao}`;

      const pRaca = document.createElement("p");
      pRaca.innerHTML = `<strong>Raça:</strong> ${pet.raca}`;

      const pCor = document.createElement("p");
      pCor.innerHTML = `<strong>Cor:</strong> ${pet.cor}`;

      const pPorte = document.createElement("p");
      pPorte.innerHTML = `<strong>Porte:</strong> ${pet.porte}`;

      const pSexo = document.createElement("p");
      pSexo.innerHTML = `<strong>Sexo:</strong> ${pet.sexo}`;

      const pEncontrado = document.createElement("p");
      pEncontrado.innerHTML = `<strong>Encontrado em:</strong> ${formatarData(pet.data_encontrado)}`;

      const pPerdido = document.createElement("p");
      pPerdido.innerHTML = `<strong>Perdido em:</strong> ${formatarData(pet.data_perdido)}`;

      const pStatus = document.createElement("p");
      pStatus.innerHTML = `<strong>Status:</strong> ${pet.status}`;

      const bairro = document.createElement("p");
      bairro.innerHTML = `<strong>Bairro:</strong> ${enderecoPet.bairro}`;

      const cep = document.createElement("p");
      cep.innerHTML = `<strong>CEP:</strong> ${enderecoPet.cep}`;

      const complemento = document.createElement("p");
      complemento.innerHTML = `<strong>Complemento:</strong> ${enderecoPet.complemento}`;

      const logradouro = document.createElement("p");
      logradouro.innerHTML = `<strong>Logradouro:</strong> ${enderecoPet.logradouro}`;

      const numero = document.createElement("p");
      numero.innerHTML = `<strong>Número:</strong> ${enderecoPet.numero}`;

      const tipoLogradouro = document.createElement("p");
      tipoLogradouro.innerHTML = `<strong>Tipo do Logradouro:</strong> ${enderecoPet.tipo_logradouro}`;
      
      const infoContainer = document.createElement("div");
      infoContainer.className = "dados-pet";
      
      div_nome.appendChild(h3);
      infoContainer.appendChild(pDescricao);
      infoContainer.appendChild(pRaca);
      infoContainer.appendChild(pCor);
      infoContainer.appendChild(pPorte);
      infoContainer.appendChild(pSexo);
      infoContainer.appendChild(pEncontrado);
      infoContainer.appendChild(pPerdido);
      infoContainer.appendChild(pStatus);
      infoContainer.appendChild(bairro);
      infoContainer.appendChild(cep);
      infoContainer.appendChild(complemento);
      infoContainer.appendChild(logradouro);
      infoContainer.appendChild(numero);
      infoContainer.appendChild(tipoLogradouro);
      

      const mapaDiv = document.createElement("div");
      mapaDiv.id = "map";
      mapaDiv.style.height = "300px";
      mapaDiv.style.marginTop = "20px";
      div_info.innerHTML = ""; // limpa o conteúdo anterior
      div_info.appendChild(infoContainer);
      div_map.appendChild(mapaDiv);


    // 2. Montar o endereço completo
    const enderecoCompleto = `${enderecoPet.tipo_logradouro} ${enderecoPet.logradouro}, ${enderecoPet.numero}, ${enderecoPet.bairro}`;

    // 3. Buscar coordenadas via Nominatim
    fetch(`http://localhost:5000/api/v1/geolocalizacao?q=${encodeURIComponent(enderecoCompleto)}`)
      .then(res => res.json())
      .then(loc => {
       if (!loc || !loc.latitude || !loc.longitude) {
        mapaDiv.innerHTML = "<p>Localização não encontrada.</p>";
        return;
      }

      const lat = loc.latitude;
      const lon = loc.longitude;

        // 4. Criar e exibir o mapa
        const map = L.map('map').setView([lat, lon], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([lat, lon]).addTo(map)
          .bindPopup("Local do pet")
          .openPopup();
      })
      .catch(err => {
        console.error("Erro ao buscar localização:", err);
        mapaDiv.innerHTML = "<p>Erro ao carregar o mapa.</p>";
      });
        })
        .catch((erro) => {
          console.error("Erro ao carregar pet:", erro);
        });
}

