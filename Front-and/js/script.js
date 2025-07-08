let usuario_logado = "usuario_logado"

if (window.localStorage.getItem(usuario_logado)) {

  let us = window.localStorage.getItem(usuario_logado)
  //converter a variavel us para json
  //console.log(us)
  us = JSON.parse(us)

  let foto_usuario = `<img src=${us.payload.foto_usuario} class="foto_usuario">`;
  let nome_usuario = `<p class="nome_usuario"> ${us.payload.nome_usuario} </p>`;


  document.getElementById("usuario").style.padding="10px";

  document.getElementById("usuario").innerHTML = foto_usuario + nome_usuario
}

function carregar_animal() {



  let idpet = window.location.search.split('=');

  idpet = idpet[1]

  console.log(idpet)


  const div_animal = document.getElementById("animais");
  fetch(`http://127.0.0.1:5000/api/v1/animal/listarporid/${idpet}`)
      .then((res) => res.json())
      .then((dt) => {
          console.log(dt)
          
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
          img_miniatura1.src = dt[0].foto_animal;
          img_miniatura2.src = dt[0].foto2;
          img_miniatura3.src = dt[0].foto3;

          //Colocar as fotos de miniatura dentro da div miniatura
          div_miniatura.appendChild(img_miniatura1);
          div_miniatura.appendChild(img_miniatura2);
          div_miniatura.appendChild(img_miniatura3);

          img_miniatura1.addEventListener("click", () => img_capa.src = dt[0].foto_animal);
          img_miniatura2.addEventListener("click", () => img_capa.src = dt[0].foto2);
          img_miniatura3.addEventListener("click", () => img_capa.src = dt[0].foto3);

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

function carregar_pet() {
  const pet_foto = document.getElementById("fotodopet");
  let saida = "";

  fetch("http://127.0.0.1:5000/api/v1/animal/listar")
    .then((res) => res.json())
    .then((dados) => {
      // Limita a exibição aos 5 primeiros animais
      dados.slice(0, 4).forEach((pet) => {
        saida += `
        <a href="carregar.html?idpet=${pet.id_animal}">
        <div class="card" onclick="carregar_animal()">
          <img src="${pet.foto_animal}" alt="Capa" class="card-img"/>
          <div class="card-info"> 
            <h3 class="card-name">${pet.nome || "Sem nome"}</h3>
            <p class="card-location">${pet.sexo} | ${pet.status}</p>
          </div>
        </div>
        </a>
        `;
      });

      pet_foto.innerHTML = saida;
    });
}

const form = document.getElementById("cadastroForm");
const cepInput = document.getElementById("cep");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validarFormulario(form)) {
      alert("Cadastro realizado com sucesso!");
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
}

function validarFormulario(formulario) {
  const camposObrigatorios = formulario.querySelectorAll("[required]");
  let valido = true;

  camposObrigatorios.forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("error");
      valido = false;
    } else {
      campo.classList.remove("error");
    }
  });

  return valido;
}

// ✅ Só adiciona o eventListener se o input existir
if (cepInput) {
  cepInput.addEventListener("blur", () => {
    const cep = cepInput.value.replace(/\D/g, "");

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (data.erro) {
            alert("CEP não encontrado.");
            return;
          }

          document.getElementById("logradouro").value = data.logradouro || "";
          document.getElementById("bairro").value = data.bairro || "";
        })
        .catch(() => {
          alert("Erro ao buscar o CEP. Tente novamente.");
        });
    } else {
      alert("CEP inválido. Digite 8 números.");
    }
  });
}



function efetuarlogin(){
  const usuario = document.getElementById("email_login")
  const senha = document.getElementById("senha_login")

  fetch("http://127.0.0.1:5000/api/v1/usuario/login",{
      method:"POST",
      headers:{
          "accept":"application/json",
          "content-type":"application/json"
      },
      body:JSON.stringify({
          usuario:usuario.value,
          senha:senha.value
      })
      
  } ).then((rs)=>rs.json())
  .then((dados)=>{
      console.log(dados)
      window.localStorage.setItem(usuario_logado,JSON.stringify(dados))
      usuario.value = ""
      senha.value = ""
      window.location.href = "index.html";

  }).catch((erro)=>console.error(erro))
}

