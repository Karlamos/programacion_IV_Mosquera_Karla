//Funciones Simples
function sumarPasajeros (pasajeros1: number, pasajeros2: number): number {
    return pasajeros1 + pasajeros2;
}

const totalPasajeros: number = sumarPasajeros(10, 20);

console.log(`Total de pasajeros: ${totalPasajeros}`);

//Sin devolver un valor

function mostrarCentroDeOperaciones(nombre: string): void {
    console.log(`Centro de operaciones: ${nombre}`);

    const unidades: string[] = ["Autobus", "Trolebus", "Metro"];

    for (const unidad of unidades) {
        console.log(`Unidad disponible: ${unidad}`);
    }
}

mostrarCentroDeOperaciones("Terminal Central");

//Funciones con parámetros opcionales
function registrarUnidad(nombre: string, nivel?: number): void {
    if (nivel) {
        console.log(`La unidad ${nombre} esta operando en el nivel ${nivel}`);
    } else {
        console.log(`La unidad ${nombre} esta operando`);
        nivel = 1;
        console.log(`Nivel de operación por defecto: ${nivel}`);
    }
}

registrarUnidad("Bus 01", 5);
registrarUnidad("Trolebus 02");


function registrarUnidad2(nombre: string, nivel: number = 1): void {
    console.log(`La unidad ${nombre} esta operando en el nivel ${nivel}`);
}

registrarUnidad2("Metro 03", 5);
registrarUnidad2("Alimentador");

//Funciones Flecha

function potenciarVelocidad(velocidad: number): number {
    return velocidad * 2;
}

const potenciarVelocidadFlecha = (velocidad: number): number => velocidad * 2;

const velocidadOriginal: number = 50;
const velocidadPotenciada: number = potenciarVelocidad(velocidadOriginal);

console.log(`Velocidad original: ${velocidadOriginal}, Velocidad potenciada: ${velocidadPotenciada}`);

const velocidadPotenciadaFlecha: number = potenciarVelocidadFlecha(velocidadOriginal);
console.log(`Velocidad original: ${velocidadOriginal}, Velocidad potenciada: ${velocidadPotenciadaFlecha}`);


//FUNCIONES OVERLOADS

function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

function formatear(valor: number | string | boolean): string {
    if(typeof valor === "number"){
        return valor.toLocaleString("es-MX",{ minimumFractionDigits: 2})
    }
    if(typeof valor === "boolean"){
        return valor? "si":"no"
    }
    return `"${valor}"`
}

console.log(formatear(1233434.5))
console.log(formatear(true))
console.log(formatear("activo"))



//Closures

function crearContador(inicio: number = 0){
    let cuenta = inicio;
    return{
        incrementar : () => ++cuenta,
        decrementar :() => --cuenta,
        valor:()=> cuenta,
        resetear: () => {cuenta = inicio;}
    }
}

const c1 = crearContador();
const c2 = crearContador(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log(c1.valor());
console.log(c2.valor());

c1.resetear()
console.log(c1.valor);