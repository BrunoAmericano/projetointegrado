document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastro-form');
  const cpfInput = document.getElementById('cpf');
  const dataNascimentoInput = document.getElementById('data-nascimento');
  const telefoneInput = document.getElementById('telefone');

  const cpfError = document.getElementById('cpf-error');
  const dataError = document.getElementById('data-error');
  const telefoneError = document.getElementById('telefone-error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

  const cpf = cpfInput.value.replace(/\D/g, '');
  if (cpf.length !== 11 || !/^[0-9]+$/.test(cpf)) {
    cpfError.textContent = 'CPF inválido. Deve conter 11 dígitos numéricos.';
    isValid = false;
  } else {
    cpfError.textContent = '';
  }

  const dataNascimento = new Date(dataNascimentoInput.value);
  const hoje = new Date();
  if (isNaN(dataNascimento.getTime()) || dataNascimento >= hoje) {
    dataError.textContent = 'Data de nascimento inválida. Deve ser uma data passada.';
    isValid = false;
  } else {
    dataError.textContent = '';
  }

  const telefone = telefoneInput.value.replace(/\D/g, '');
  if (telefone.length < 10 || telefone.length > 11 || !/^[0-9]+$/.test(telefone)) {
    telefoneError.textContent = 'Telefone inválido. Deve conter 10 ou 11 dígitos numéricos.';
    isValid = false;
  } else {
    telefoneError.textContent = '';
  }

    if (isValid) {
      alert('Formulário enviado com sucesso!');
    }


  });
});
