let userType = "Suscripcion";
let userCategoria;

switch(userType){
    case "admin":
        userCategoria = "Administrador";
        break;
    case "manager":
        userCategoria = "Manager";
        break;
    case "Suscripcion":
        userCategoria = "Suscripcion";
        break;
    default:
        userCategoria = "Indefinido";


}
console.log(userCategoria)