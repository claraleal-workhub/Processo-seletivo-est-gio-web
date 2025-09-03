$(document).ready(() => {
  const applyMasks = () => {
    $('#idcadastro').trigger('input'); 
    $('#idcep').mask('00000-000');
    $('#idtelefone').mask('(00) 00000-0000');
  };

  const validateForm = () => {
    $('#cadastroForm').on('submit', function (e) {
      let valid = true;
      let msg = '';

      if (!$('#idrazaosocial').val()) {
        msg = 'Preencha o nome/razão social.';
        valid = false;
        $('#idrazaosocial').focus();
      } else if (!$('#idcadastro').val()) {
        msg = 'Preencha o CPF/CNPJ.';
        valid = false;
        $('#idcadastro').focus();
      } else if (!$('#idemail').val()) {
        msg = 'Preencha o e-mail.';
        valid = false;
        $('#idemail').focus();
      } else if (!$('#idtelefone').val()) {
        msg = 'Preencha o telefone.';
        valid = false;
        $('#idtelefone').focus();
      } else if (!$('#idcep').val()) {
        msg = 'Preencha o CEP.';
        valid = false;
        $('#idcep').focus();
      }

      if (!valid) {
        $('#form-messages').text(msg);
        e.preventDefault();
        return false;
      } else {
        $('#form-messages').text('');
      }
    });
  };

  applyMasks();
  validateForm();
  });