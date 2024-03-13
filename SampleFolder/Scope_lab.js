let userRole = "Admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;


if (isLoggedIn){
    if(userRole = "Admin"){
        userMessage = "Bienvenido, admin";
    }else {
        userMessage = "Bienvenido, usuario"
    }
} else{
    userMessage = "Acceso no concedido"
}  
console.log(userMessage)