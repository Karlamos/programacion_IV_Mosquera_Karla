type UnidadTransporte =
    | "Autobus"
    | "Trolebus"
    | "Metro"
    | "Taxi"
    | "Bicicleta"

let personaje: UnidadTransporte = "Autobus";

switch (personaje) {
    case "Autobus":
        console.log("El autobus cubre rutas urbanas");
        break;
    case "Trolebus":
        console.log("El trolebus circula por carriles exclusivos");             
        break;
    case "Taxi":
        console.log("El taxi ofrece servicio personalizado");
        break;
    case "Metro":
        console.log("El metro es un transporte subterraneo rapido");
        break;
    case "Bicicleta":
        console.log("La bicicleta es un transporte ecologico");
        break;
    default:
        console.log("Unidad de transporte desconocida");
}


type TiposUnidad = "Autobus" | "Metro" | "Bicicleta";

let jedi: TiposUnidad = "Autobus";
let nivelFuerza: number = 100;
let tieneSable : boolean = true;

switch (jedi) { 
    case "Autobus":
        if (nivelFuerza >= 80 && tieneSable) {
            console.log("El autobus cuenta con alta capacidad");
        } else {
            console.log("El autobus no cuenta con alta capacidad");
        }
        break;
    case "Metro":
        if (nivelFuerza >= 90 && tieneSable) {
            console.log("El metro cuenta con alta capacidad");
        } else {
            console.log("El metro no cuenta con alta capacidad");
        }
        break;
    case "Bicicleta":
        if (nivelFuerza >= 95 && tieneSable) {
            console.log("La bicicleta cuenta con alta capacidad");
        } else {
            console.log("La bicicleta no cuenta con alta capacidad");
        }
        break;
    default:
        console.log("Unidad de transporte desconocida");
}