function carregar_perfil() {
    let id_carregarUser = window.location.search.split('=')[1];
      console.log("ID do pet:", id_carregarUser);
}

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





  fetch(`http://127.0.0.1:5000/api/v1/usuario/perfil/:id${id_carregarUser}`)
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

      // === INFORMAÇÕES COM RÓTULOS ===
      const h3 = document.createElement("h3");
      h3.textContent = perfil.nome;

      const pDescricao = document.createElement("p");
      pDescricao.innerHTML = `<strong>Descrição:</strong> ${Perfil.descricao}`;

      const pRaca = document.createElement("p");
      pRaca.innerHTML = `<strong>Raça:</strong> ${Perfil.raca}`;

      const pCor = document.createElement("p");
      pCor.innerHTML = `<strong>Cor:</strong> ${Perfil.cor}`;

      const pPorte = document.createElement("p");
      pPorte.innerHTML = `<strong>Porte:</strong> ${Perfil.porte}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      // const pSexo = document.createElement("p");
      // pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;


      
      const infoContainer = document.createElement("div");
      infoContainer.className = "dados-pet";
      
      div_nome.appendChild(h3);
      infoContainer.appendChild(pDescricao);
      infoContainer.appendChild(pRaca);
      infoContainer.appendChild(pCor);
      infoContainer.appendChild(pPorte);
      infoContainer.appendChild(pSexo);
     
    

      });
}


usuario: 
id_usuario
nome_usuario
foto_usuario

contato:
id_contato
telefone_residencial
telefone_celular

redes:
id_redes
tipo_redes
identificador

animal:
id_animal
tipo_animal
raca
cor
porte
sexo
foto_animal
descricao
