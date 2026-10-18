let memoriaDroide = 1024;
let memoriaDroideMax = 2048;

while (memoriaDroide < memoriaDroideMax) {
    console.log(`Capacidad de la ruta: ${memoriaDroide}`);
    memoriaDroide += 256;
}

let disparosNave = 0;
let aciertosNave = 0;

while (disparosNave < 10) {
    disparosNave++;
    let acierto = Math.random() < 0.5;
    if (acierto) {
        aciertosNave++;
        console.log(`Validación ${disparosNave}: ¡Aprobada! Total aprobadas: ${aciertosNave}`);
    } else {
        console.log(`Validación ${disparosNave}: Rechazada. Total aprobadas: ${aciertosNave}`);
    }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Inspección número: ${guerras}`);
} while (guerras < 5);

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const navesEscanadas: Nave[] = [
    { nombre: "Trolebus 01", tipo: "Electrico", velocidad: 1050 },
    { nombre: "Ecovia 02", tipo: "Articulado", velocidad: 1200 },
    { nombre: "Metro L1", tipo: "Subterraneo", velocidad: 900 },
    { nombre: "Alimentador 03", tipo: "Urbano", velocidad: 800 },
];

let indice = 0;
while (indice < navesEscanadas.length) {
    const nave = navesEscanadas[indice];
    if (nave?.tipo === "Electrico") {
        indice++;
        continue;
    }
    if (nave?.velocidad < 1000) {
        break;
    }
    console.log(`Unidad: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
    indice++;
}