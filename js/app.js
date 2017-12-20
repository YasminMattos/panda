//Permite activar el popover
$(document).ready(function() {
  var btn = $('.btn');

  btn.on('click', function() {
    btn.popover('show');
  });
});

// Activa el modal form
