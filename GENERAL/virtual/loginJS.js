const user = document.getElementById("logUser");
const pass = document.getElementById("logPass");
var usuario = JSON.parse(localStorage.getItem("users"));
function login (event) {
  event.preventDefault()
 for(var i=0 ; i < localStorage.length ; i++){
    if (user.value == usuario[i]["user"] && pass.value ==usuario[i]["pass"]) {
      window.location= "/html/reservas.html"
    }
    else if (usuario != null) {
      alert("su usuario o contraseña son incorrectas")
      
    }
  }
}

