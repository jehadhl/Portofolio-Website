

const contactForm = document.querySelector('.contact__form');
let namej= document.getElementById('namej');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');



contactForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    let formData = {
        namej:namej.value,
        surname:surname.value,
        email:email.value,
        subject:subject.value,
        message:message.value, 
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText=='success'){
            alert('email sent');
            namej.value ='';
            surname.value = '';
            email.value = '';
            subject.value= '';
            message.value= '';
            window.location.href = "http://localhost:7000/thankyou";
        }
        else{
            alert('someting went wrong !')
        }
       
    }

    xhr.send(JSON.stringify(formData));
})


