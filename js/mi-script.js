const miBoton = document.querySelector('.mi-boton');

//crear const y apuntar al elemento para hacer el remember me
const remeCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("mi-email");


    
    //apuntar a la clase cheked 
    document.querySelector('.chekuno')



//si los cheked no estan vacios guarda
    if (localStorage.checkbox && localStorage.checkbox !== "") {
        remeCheck.setAttribute("checked", "checked");
        emailInput.value = localStorage.username;
      } 
      


miBoton.addEventListener('click', (e)=>{
    e.preventDefault();
    const miEmail = document.querySelector('.mi-email').value;
    console.log(miEmail);
    emailValido =validarEmail(miEmail);
    console.log(emailValido);
    if(!emailValido){
        alert("Email incorrecto, porfavor de teclear un email valido")
        miEmail.focus();
        return;
    }
    const pass= document.querySelector('.mi-password').value;
    passwordValido= validarPassword(pass);

    if(!passwordValido){
        alert("password incorrecto, debe tener almenos 8 caracteres")
        pass.focus();
        return;
    }

    //Todo Correcto

    //al presionar el boton cuando todo este correcto mostrara un alert qu dice todo esta correcto
    if(passwordValido && emailValido){
        alert('Todo esta correcto');
    }


});


//Funcion para validar correo

function validarEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    //funcion para validar el password
function validarPassword(miPassword){
    if (miPassword.length >=8 )
    return true;

    else
    return false;
}

//funcion para el remember me
function rememberme() {
    if (remeCheck.checked && emailInput.value !== "") {
      localStorage.username = emailInput.value;
      localStorage.checkbox = remeCheck.value;
    } else {
      localStorage.username = "";
      localStorage.checkbox = "";
    }
  }