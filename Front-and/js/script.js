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
