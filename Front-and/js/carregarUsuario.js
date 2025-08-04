function carregar_perfil() {
    
    let dadosString = localStorage.getItem("usuario_logado");
  console.log(dadosString)
  let dadosObj = JSON.parse(dadosString);
let idUsuario = dadosObj.payload.id_usuario; // Agora sim, 45
console.log(idUsuario)
  let txtNomeUsuario = document.getElementById("txtNomeUsuario");
  let FotoUsuario = document.getElementById("FotoUsuariotxt")
  let txtTelefoneResiUsuario = document.getElementById("txtTelefoneResiUsuario");
  let txtTelefoneCeluUsuario = document.getElementById("txtTelefoneCeluUsuario");
  let txtRedeSociais = document.getElementById("txtRedeSociais");
  let txtIdentificador = document.getElementById("txtIdentificador");
  let txttipo = document.getElementById("txttipo");
  let txtnomepet = document.getElementById("txtnomepet");
  let txtraca = document.getElementById("txtraca");
  let txtcor = document.getElementById("txtcor");
  let txtdescricao = document.getElementById("txtdescricao");
  let txtimagempet = document.getElementById("FotoPet");
  

 


  fetch(`http://127.0.0.1:5000/api/v1/usuario/perfil/${idUsuario}`)
    .then((res) => res.json())
    .then((dt) => {
        
      console.log(dt)
      console.log(dt[0].porte)
      FotoUsuario.src = dt[0].foto_Usuario
      txtNomeUsuario.value = dt[0].nome_Usuario;
      txtTelefoneResiUsuario.value = dt[0].telefone_residencial;
      txtTelefoneCeluUsuario.value = dt[0].telefone_celular;
     // txtRedeSociais.value = dt[0].tipo_redes;
     // txtIdentificador.value = dt[0].identificador;
      txttipo.value = dt[0].tipo_Animal;
      txtnomepet.value = dt[0].nome;
      txtraca.value = dt[0].raca;
      txtcor.value = dt[0].cor;
      txtdescricao.value = dt[0].descricao;
      txtimagempet.src = dt[0].foto_Animal;

  

      });
}
