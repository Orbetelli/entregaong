// ======== Máscaras de Input ========

// CPF: 000.000.000-00
const cpfInput = document.getElementById("cpf");
if (cpfInput) {
  cpfInput.addEventListener("input", () => {
    let cpf = cpfInput.value.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpfInput.value = cpf;
  });
}

// Telefone: (00) 00000-0000
const telefoneInput = document.getElementById("telefone");
if (telefoneInput) {
  telefoneInput.addEventListener("input", () => {
    let tel = telefoneInput.value.replace(/\D/g, "");
    tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2");
    tel = tel.replace(/(\d{5})(\d)/, "$1-$2");
    telefoneInput.value = tel;
  });
}

// CEP: 00000-000
const cepInput = document.getElementById("cep");
if (cepInput) {
  cepInput.addEventListener("input", () => {
    let cep = cepInput.value.replace(/\D/g, "");
    cep = cep.replace(/(\d{5})(\d)/, "$1-$2");
    cepInput.value = cep;
  });
}

// ======== Validação Simples do Formulário ========
const form = document.getElementById("cadastroForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert("Cadastro enviado com sucesso! Obrigado por se voluntariar. 💙");
    form.reset();
  });
}