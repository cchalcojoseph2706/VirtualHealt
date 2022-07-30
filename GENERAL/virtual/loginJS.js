var usuario = JSON.parse(localStorage.getItem("login"));
// console.log("aaa");
// try {
//   if( !usuario ){
//     console.log("eee");
//       window.location.href = "http://127.0.0.1:5500/GENERAL/virtual/login.html"
//       return;
//   }
  
// } catch (error) {
//   console.log("errroooooooooooooooor ");
// }


const user = document.getElementById("logUser");
const pass = document.getElementById("logPass");
const entrar = document.getElementById("entrar");
const logout = document.getElementById("logout");
const Bienvido = document.getElementById("Bienvido");




const login = () => {


  if( user.value == "1234" ){
    if( pass.value == "1234" ){
  
      localStorage.setItem( "login", JSON.stringify( {
        user : user.value,
        pass: pass.value
      }))

      
      
      
      
      Bienvido.innerHTML = "<h1 class='hola'>Hola mundo</h1>"

      setTimeout(()=>
      window.location.href = "http://127.0.0.1:5500/GENERAL/virtual/index.html"
      ,2000 )
      
      
    }
  }

}

entrar.addEventListener("click", ( e ) => {
  e.preventDefault()
  login()

})







// var usuario = JSON.parse(localStorage.getItem("users"));




// function login (event) {
//   event.preventDefault()

//  for(var i=0 ; i < localStorage.length ; i++){
//     if (user.value == usuario[i]["user"] && pass.value ==usuario[i]["pass"]) {
//       window.location= "/html/reservas.html"
//     }
//     else if (usuario != null) {
//       alert("su usuario o contraseña son incorrectas")
      
//     }
//   }

// }



  