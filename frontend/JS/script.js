
$(document).ready(function () {

  $('#idcadastro').mask('000.000.000-00', {
    onKeyPress: function (value, e, field, options) {
      var masks = ['000.000.000-00', '00.000.000/0000-00'];
      $('#idcadastro').mask((value.length > 14) ? masks[1] : masks[0], options);
    }
  });

  $('#idcep').mask('00000-000');

  $('#idtelefone').mask('(00) 00000-0000');

});

