let isAuthenticateDiaetes = "Miembro inscrito";
let isMensaje;

switch(isAuthenticateDiaetes){
    case "Empleado":
        isMensaje = "Acceso a Servicios Diabeticos";
        break;
    case "Miembro inscrito":
        isMensaje = "Acceso a Servicios diabeticos";
        isMensaje = "Acceso a interaccion personalizada con un dietista";
        break;
    case "Suscriptor":
        isMensaje = "Acceso parcial a Servicios Diabeticos"
        break;
    default:
        "Usted no posee suscripcion"
     
}
console.log("Usted posee," ,isMensaje)