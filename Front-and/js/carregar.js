function carregar_animal() {
    let idpet = window.location.search.split('=')[1];
    console.log("ID do pet:", idpet);
  
    const div_imagens = document.querySelector(".pet-images");
    const div_info = document.querySelector(".pet-info");
  
    // Função para formatar a data
    function formatarData(dataISO) {
      if (!dataISO) return '';
      const data = new Date(dataISO);
      return data.toLocaleDateString('pt-BR');
    }
  
    fetch(`http://127.0.0.1:5000/api/v1/animal/listarporid/${idpet}`)
      .then((res) => res.json())
      .then((dt) => {
        const pet = dt[0];
  
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
  
        div_info.appendChild(h3);
        div_info.appendChild(pDescricao);
        div_info.appendChild(pRaca);
        div_info.appendChild(pCor);
        div_info.appendChild(pPorte);
        div_info.appendChild(pSexo);
        div_info.appendChild(pEncontrado);
        div_info.appendChild(pPerdido);
        div_info.appendChild(pStatus);
      })
      .catch((erro) => {
        console.error("Erro ao carregar pet:", erro);
      });
  }
  



//-------- FIM - codigo front, carregar animais --------//



