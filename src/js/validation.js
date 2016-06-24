import $ from 'jquery'
import Valid from './person'

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
    const name = $('#contact-name').val();
    const email = $('#contact-email').val();
    const message = $('#contact-message').val();

    console.log(valid.input.length);
    if(!message || !email || !name){
      console.log('empty');
    } else if(valid.input.length >= 1){
      console.log('invalid');
    } else {
      const formData = {name, email, message};

      const xhr = new XMLHttpRequest();

      console.dir(xhr);

      $.ajax({
        url: '/api/contact',
        method: 'POST',
        dataType: 'JSON',
        data: formData
      }).then(response =>{
        console.log(response);
      });

      console.log('valid', formData);
    }


  })

});