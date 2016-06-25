import $ from 'jquery'
import Valid from './validation'

const valid= new Valid();
const regexEmail = /^([A-Za-z\._\-0-9])*[@]([A-Za-z\._\-0-9])*[\.]([A-Za-z]{2,4})$/;


$(function(){

  const $form = $('#contact-form');

  $form.on('change', function(e){
    if(e.target.id === 'contact-name'){
      valid.Length(e.target, e.target.value, 0)
    }
    if(e.target.id === 'contact-email'){
      valid.Regex(e.target, e.target.value, regexEmail, 1);
    }
    if(e.target.id === 'contact-message'){
      valid.Length(e.target, e.target.value, 2)
    }
  });

  $form.on('submit', function(e){
    e.preventDefault();
    let name = $('#contact-name');
    let email = $('#contact-email');
    let message = $('#contact-message');

    console.log(valid.input.length);
    if(!message.val() || !email.val() || !name.val()){
      console.log('empty');
    } else if(valid.input.length >= 1){
      console.log('invalid');
    } else {
      const formData = {
        name: name.val(),
        email: email.val(),
        message: message.val()
      };
      
      $.ajax({
        url: '/api/contact',
        method: 'POST',
        dataType: 'JSON',
        data: formData
      }).then(response =>{
        window.location.pathname = "/";
      });



      console.log('valid', formData);
    }


  })

});