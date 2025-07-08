function carregar_animal() {
<<<<<<< HEAD

    let idpet = window.location.search.split('=');
<<<<<<< HEAD
    idpet = idpet[1];

=======

    idpet = dt.id_animal;
>>>>>>> 9a0624e783b6ac1f658c24af3b743a17130c4949
    const div_animal = document.getElementById("animais");
    fetch(`http://127.0.0.1:5000/api/v1/animal/listarporid/${idpet}`)
        .then((res) => res.json())
        .then((dt) => {
<<<<<<< HEAD
            console.log(dt);
=======
            console.log(dt)
            
>>>>>>> 9a0624e783b6ac1f658c24af3b743a17130c4949
            let div_img = document.createElement("div");
            div_img.setAttribute("id", "div_img");
            let div_capa = document.createElement("div");
            div_capa.setAttribute("id", "div_capa");
            let img_capa = document.createElement("img");
            img_capa.src = dt[0].foto_animal;

            //adicionar a imagem da capa a div capa
            div_capa.appendChild(img_capa)

            //adicionar a div capa a div imagem
            div_img.appendChild(div_capa)



            let div_miniatura = document.createElement("div");
            div_miniatura.setAttribute("id", "div_miniatura");
            let img_miniatura1 = document.createElement("img");
            let img_miniatura2 = document.createElement("img");
            let img_miniatura3 = document.createElement("img");
            img_miniatura1.src = dt[0].foto1;
            img_miniatura2.src = dt[0].foto2;
            img_miniatura3.src = dt[0].foto3;

            //Colocar as fotos de miniatura dentro da div miniatura
            div_miniatura.appendChild(img_miniatura1);
            div_miniatura.appendChild(img_miniatura2);
            div_miniatura.appendChild(img_miniatura3);

<<<<<<< HEAD
=======
            img_miniatura1.addEventListener("click", () => img_capa.src = dt[0].foto1);
            img_miniatura2.addEventListener("click", () => img_capa.src = dt[0].foto2);
            img_miniatura3.addEventListener("click", () => img_capa.src = dt[0].foto3);

>>>>>>> 9a0624e783b6ac1f658c24af3b743a17130c4949
            //Colocar a div miniatura dentro da div imagem
            div_img.appendChild(div_miniatura);

            //Colocar a div de imagens dentro da div animais
            div_animal.appendChild(div_img)

            let div_titulo_descricao = document.createElement("div");
            div_titulo_descricao.setAttribute("id", "div_titulo_descricao");

            let h3_titulo = document.createElement("h3");
            h3_titulo.innerHTML = dt[0].nome;

            let p_descricao = document.createElement("p");
            p_descricao.innerHTML = dt[0].descricao;

            //adicionar o titulo e a descricao dentro da div titulo descricao
            div_titulo_descricao.appendChild(h3_titulo);
            div_titulo_descricao.appendChild(p_descricao);

            div_animal.appendChild(div_titulo_descricao);

        })

}

<<<<<<< HEAD
img_miniatura1.addEventListener("click", () => img_capa.src = dt[0].foto1);
img_miniatura2.addEventListener("click", () => img_capa.src = dt[0].foto2);
img_miniatura3.addEventListener("click", () => img_capa.src = dt[0].foto3);
=======
=======
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
  
>>>>>>> 99e8d07ea5d911a9185c4e0b186616736f0043c4

>>>>>>> 9a0624e783b6ac1f658c24af3b743a17130c4949


//-------- FIM - codigo front, carregar animais --------//



