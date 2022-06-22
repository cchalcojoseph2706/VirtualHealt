const form= document.getElementById("form");
const nombre= document.getElementById("nombre");
const correo= document.getElementById("correo");
const contrasenia= document.getElementById("password");
function register(event){
    event.preventDefault();
    let users=array(
        {
            user: nombre.value,
            correo: correo.value,
            contrasenia: contrasenia.value
        }
    );
    localStorage.setItem('users',JSON.stringify(users));
    window.location="login.html";
    
}