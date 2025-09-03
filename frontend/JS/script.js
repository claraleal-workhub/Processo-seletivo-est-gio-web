$(document).ready(() => {
  const applyMasks = () => {
    $('#idcadastro').trigger('input'); 
    $('#idcep').mask('00000-000');
    $('#idtelefone').mask('(00) 00000-0000');
  };

  applyMasks();
});

