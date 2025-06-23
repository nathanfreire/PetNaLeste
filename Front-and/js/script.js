//======================== TELA DE CADASTRO ===============================// 
    // Máscara para telefone residencial (XX) XXXX-XXXX
    function mascaraTelResidencial(valor) {
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
        return valor;
      }
  
      // Máscara para telefone celular (XX) 9XXXX-XXXX
      function mascaraTelCelular(valor) {
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
        return valor;
      }
  
      // Máscara para CEP 00000-000
      function mascaraCEP(valor) {
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
        return valor;
      }
  
      const telResidencial = document.getElementById("telResidencial");
      telResidencial.addEventListener("input", (e) => {
        e.target.value = mascaraTelResidencial(e.target.value);
      });
  
      const telCelular = document.getElementById("telCelular");
      telCelular.addEventListener("input", (e) => {
        e.target.value = mascaraTelCelular(e.target.value);
      });
  
      const cep = document.getElementById("cep");
      cep.addEventListener("input", (e) => {
        e.target.value = mascaraCEP(e.target.value);
      });
  
      // Validação simples no submit
      const form = document.getElementById("cadastroForm");
  
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Limpar erros anteriores
        [...form.elements].forEach((el) => el.classList.remove("error"));
  
        let valid = true;
  
        // Campos obrigatórios
        const obrigatorios = [
          "usuario", "senha", "email",
          "tipoLogradouro", "logradouro", "numero", "cep", "bairro",
          "tipo", "raca", "cor", "porte", "sexo", "status"
        ];
  
        obrigatorios.forEach((id) => {
          const campo = document.getElementById(id);
          if (!campo.value || campo.value.trim() === "") {
            campo.classList.add("error");
            valid = false;
          }
        });
  
        // Validação email básica
        const email = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailRegex.test(email.value)) {
          email.classList.add("error");
          valid = false;
        }
  
        if (!valid) {
          alert("Por favor, preencha todos os campos obrigatórios corretamente.");
          return;
        }
  
        alert("Formulário enviado com sucesso!");
        form.reset();
      });
//=========================== FIM DA TELA DE CADASTRO ===============================//