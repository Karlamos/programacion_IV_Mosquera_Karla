for (let i = 2; i < 50; i += 5) {
    console.log(`Frecuencia de ruta: ${i}`);
}

for (let i = 50; i > 0; i -= 5) {
    console.log(`Control de unidades: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log("El recorrido de la unidad ha terminado");
        break;
    }
    if (i === 30) {
        console.log("El recorrido de la unidad ha sido interrumpido");
        continue;
    }
    console.log(`Frecuencia de ruta: ${i}`);
}

const personajes: string[] = ["Autobus 01", "Trolebus 05", "Metro L1", "Ecovia 02", "Alimentador 12"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Unidad: ${personajes[i]}`);
} 

for (const personaje of personajes) {
    console.log(`Unidad: ${personaje}`);
}

const cineMovie: string = "Sistema de Transporte Urbano";
for (const letra of cineMovie) {
    console.log(`Letra: ${letra}`);
}


interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSableLuz: boolean;
}

const jedis: Jedi[] = [
    { nombre: "Unidad 01", nivelFuerza: 90, tieneSableLuz: true },
    { nombre: "Unidad 02", nivelFuerza: 100, tieneSableLuz: true },
    { nombre: "Unidad 03", nivelFuerza: 85, tieneSableLuz: true },
    { nombre: "Unidad 04", nivelFuerza: 95, tieneSableLuz: true },
    { nombre: "Unidad 05", nivelFuerza: 80, tieneSableLuz: false }
];


for (const jedi of jedis) {
    console.log(`Unidad: ${jedi.nombre}, Capacidad: ${jedi.nivelFuerza}, Aire Acondicionado: ${jedi.tieneSableLuz}`);
}


interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const naves: Nave[] = [
    { nombre: "Trolebus", tipo: "Electrico", velocidad: 60 },
    { nombre: "Ecovia", tipo: "Articulado", velocidad: 50 },
    { nombre: "Metro", tipo: "Subterraneo", velocidad: 80 },
    { nombre: "Alimentador", tipo: "Urbano", velocidad: 45 },
    { nombre: "Buseta", tipo: "Convencional", velocidad: 55 }
];

for (const nave of naves) {
    console.log(`Vehículo: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
}


const planetas: Record<string, number> = {
    "Terminal Sur": 1000,
    "Estacion Central": 500,
    "Terminal Norte": 2000
};

for (const planeta in planetas) {
    console.log(`Estacion: ${planeta}, Distancia: ${planetas[planeta]}`);
}

const distancias: Record<string, number> = {
    "Terminal Sur": 1000,
    "Estacion Central": 500,
    "Terminal Norte": 2000
};

const criaturasStarWars: string[] = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];

criaturasStarWars.forEach((criatura, index) => {
    console.log(`Ruta ${index + 1}: ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
    console.log(`Ruta ${index + 1}: ${criatura}`);
});