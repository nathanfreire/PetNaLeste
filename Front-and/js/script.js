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

function carregar_pet() {
  const pet_foto = document.getElementById("fotodopet");
  let saida = "";

  fetch("http://127.0.0.1:5000/api/v1/animal/listar")
    .then((res) => res.json())
    .then((dados) => {
      // Limita a exibição aos 5 primeiros animais
      dados.slice(0, 4).forEach((pet) => {
        saida += `<div class="card">
          <img src="${pet.foto_animal}" alt="Capa" class="card-img"/>
          <div class="card-info"> 
            <h3 class="card-name">${pet.nome || "Sem nome"}</h3>
            <p class="card-location">${pet.sexo}</p>
          </div>
        </div>`;
      });

      pet_foto.innerHTML = saida;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // Formulário contato
  document.getElementById('formContato').addEventListener('submit', async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    const email = emailInput.value;
    const mensagem = mensagemInput.value;

    try {
      const res = await fetch('http://127.0.0.1:5000/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, mensagem })
      });

      if (!res.ok) {
        const result = await res.json();
        alert("Erro ao enviar: " + (result.error || 'Erro desconhecido'));
        return;
      }

      alert("Mensagem enviada com sucesso!");
      emailInput.value = '';
      mensagemInput.value = '';

    } catch (error) {
      console.error(error);
      alert("Erro na conexão com o servidor.");
    }
  });

  // Formulário cadastro e CEP
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

          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          // Se quiser também: cidade e estado
          // document.getElementById("cidade").value = data.localidade;
          // document.getElementById("estado").value = data.uf;
        })
        .catch(() => {
          alert("Erro ao buscar o CEP. Tente novamente.");
        });
    } else {
      alert("CEP inválido. Digite 8 números.");
    }
  });
});


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



