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