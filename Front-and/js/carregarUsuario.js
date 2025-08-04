function carregar_perfil() {
    let id_carregarUser = window.location.search.split('=')[1];
      console.log(id_carregarUser);

  let txtNomeUsuario = document.getElementById("txtNomeUsuario");
  let txtTelefoneResiUsuario = document.getElementById("txtTelefoneResiUsuario");
  let txtTelefoneCeluUsuario = document.getElementById("txtTelefoneCeluUsuario");
  let txtRedeSociais = document.getElementById("txtRedeSociais");
  let txtIdentificador = document.getElementById("txtIdentificador");
  let txttipo = document.getElementById("txttipo");
  let txtraca = document.getElementById("txtraca");
  let txtcor = document.getElementById("txtcor");
  let txtdescricao = document.getElementById("txtdescricao");
  let txtimagempet = document.getElementById("txtimagempet");
  let txtnomepet = document.getElementById("txtnomepet");
  let txtporte = document.getElementById("txtporte");
  let txtsexo = document.getElementById("txtsexo");


  fetch(`http://127.0.0.1:5000/api/v1/usuario/perfil/6`)
    .then((res) => res.json())
    .then((dt) => {
        
      console.log(dt)
      console.log(dt[0].porte)
      txtNomeUsuario.value = dt[0].nome_Usuario;
      txtTelefoneResiUsuario.value = dt[0].telefone_residencial;
      txtTelefoneCeluUsuario.value = dt[0].telefone_celular;
      txtRedeSociais.value = dt[0].tipo_redes;
      txtIdentificador.value = dt[0].identificador;
      txttipo.value = dt[0].tipo_Animal;
      txtraca.value = dt[0].raca;
      txtcor.value = dt[0].cor;
      txtdescricao.value = dt[0].descricao;
      txtimagempet.value = dt[0].foto_Animal;
      txtnomepet.value = dt[0].nome;
      txtporte.value = `${dt[0].porte}`;
      txtsexo.value = dt[0].sexo;

      });
}
