//Permite activar el popover
$(document).ready(function() {
  var btn = $('.btn');
  var loginBtn = $('.login-btn');

  btn.popover('show');

// Activa el subscribe-form
  loginBtn.on('click', function(){
    $('.subscribe-form').toggle();
  })



});
  



