const passInput = document.getElementById('pass-input'), eye = document.getElementById('eye')

passInput.addEventListener('keyup', function(){
    if(passInput.value != ''){
        eye.style.display = 'block'
    }else{
        eye.style.display = 'none'
    }
})

eye.addEventListener('click' , function(){
   
       if(passInput.type == 'password'){
            passInput.type = 'text'
            eye.src = 'images/show.png'

       }else{
            passInput.type = 'password'
            eye.src = 'images/hide.png'
       }
    
})
