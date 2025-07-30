function carregar_perfil() {
    let id_carregarUser = window.location.search.split('=')[1];
      console.log("ID do pet:", id_carregarUser);




  const div_nome = document.querySelector(".pet-nome")





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

      const pSexo = document.createElement("p");
      pSexo.innerHTML = `<strong>Sexo:</strong> ${Perfil.sexo}`;

      const pId_usuario = document.createElement("p");
      pId_usuario.innerHTML = `<strong>Id_usuario:</strong> ${Perfil.id_usuario}`;

      const pNome_usuario = document.createElement("p");
      pNome_usuario.innerHTML = `<strong>Nome_usuario:</strong> ${Perfil.nome_usuario}`;

      const pFoto_usuario = document.createElement("p");
      pFoto_usuario.innerHTML = `<strong>Foto_usuario:</strong> ${Perfil.foto_usuario}`;

      const pId_contato = document.createElement("p");
      pId_contato.innerHTML = `<strong>Id_contato:</strong> ${Perfil.id_contato}`;

      const pTelefone_residencial = document.createElement("p");
      pTelefone_residencial.innerHTML = `<strong>Telefone_residencial:</strong> ${Perfil.telefone_residencial}`;

      const pTelefone_comercial = document.createElement("p");
      pTelefone_comercial.innerHTML = `<strong>Telefone_comercial:</strong> ${Perfil.telefone_comercial}`;

      const pId_redes = document.createElement("p");
      pId_redes.innerHTML = `<strong>Id_redes:</strong> ${Perfil.id_redes}`;

      const pTipo_redes = document.createElement("p");
      pTipo_redes.innerHTML = `<strong>Tipo_redes:</strong> ${Perfil.tipo_redes}`;

      const pIdentificador = document.createElement("p");
      pIdentificador.innerHTML = `<strong>Identificador:</strong> ${Perfil.identificador}`;

      const pId_animal = document.createElement("p");
      pId_animal.innerHTML = `<strong>Id_animal:</strong> ${Perfil.id_animal}`;

      const pTipo_aniaml = document.createElement("p");
      pTipo_aniaml.innerHTML = `<strong>Tipo_aniaml:</strong> ${Perfil.tipo_aniaml}`;

      const pFoto_animal = document.createElement("p");
      pFoto_animal.innerHTML = `<strong>Foto_animal:</strong> ${Perfil.foto_animal}`;

      
      const infoContainer = document.createElement("div");
      infoContainer.className = "dados-pet";
      
      div_nome.appendChild(h3);
      infoContainer.appendChild(pDescricao);
      infoContainer.appendChild(pRaca);
      infoContainer.appendChild(pCor);
      infoContainer.appendChild(pPorte);
      infoContainer.appendChild(pSexo);
      infoContainer.appendChild(pId_usuario);
      infoContainer.appendChild(pNome_usuario);
      infoContainer.appendChild(pFoto_usuario);
      infoContainer.appendChild(pId_contato);
      infoContainer.appendChild(pTelefone_residencial);
      infoContainer.appendChild(pTelefone_comercial);
      infoContainer.appendChild(pId_redes);
      infoContainer.appendChild(pTipo_redes);
      infoContainer.appendChild(pIdentificador);
      infoContainer.appendChild(pId_animal);
      infoContainer.appendChild(pTipo_aniaml);
      infoContainer.appendChild(pFoto_animal);

      });
}
