// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#gh-form').on('submit', function(e) {
   e.preventDefault();
   var userName = $('#name').val();
   clearForm();
   greetUser(userName);
 });

  function clearForm(){
       ('body').removeClass('page');
  }

  function greetUser(usname){
   var greeting='<ul><li>Hi, '+usname+'!</li><li>Thank you for signing up!</li></ul>';
   $('#greetings').append(greeting);
 }
});
