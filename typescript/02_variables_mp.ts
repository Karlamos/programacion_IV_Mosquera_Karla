//Constantes

//Numerico
const PI: number = 3.1416;
console.log("PI:", PI);

const TARIFA_BASE: number = 15;
console.log("TARIFA BASE:", TARIFA_BASE);

//Texto
const SERVICIO_API: string = "apiService";
console.log("NOMBRE DEL SERVICIO:", SERVICIO_API);

//Booleano
const ACTIVO: boolean = true;
console.log("UNIDAD ACTIVA:", ACTIVO);

//Variables

//LET
let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let chofer: string="Juan";
let caducado: boolean=false;
console.log(chofer);
console.log(caducado);

let ruta : string[]=["TERMINAL","CENTRO","UNIVERSIDAD"];
console.log(ruta);

let busAsignado: string | null = null;

let paradaSiguiente: string | undefined;

let experienciaAcumulada: bigint= 9876543222433667n;

//tipo symbol 
let bus1: symbol=Symbol("Bus01");
console.log(bus1.description);
let bus2: symbol=Symbol("Bus01");
console.log(bus2.description);  
console.log(bus1==bus2); 


let unidad: {
    nombre: string;
    nivel: number;
    vida: number;
    esLegendario: boolean;
}={
    nombre:"Bus01",
    nivel: 5,
    vida: 100,
    esLegendario: false
};
console.log(unidad);