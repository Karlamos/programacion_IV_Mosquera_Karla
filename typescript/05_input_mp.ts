let unidad: string = "Autobus";
let antiguedad: number = 5;
let capacidad: number = 85;

if (unidad === "Autobus" || unidad === "Metro" || unidad === "Trolebus") {
    if (antiguedad >= 18 && capacidad >= 80) {
        console.log(`${unidad} es un transporte con alta capacidad pero antiguo.`);
    } else if (antiguedad < 18 && capacidad >= 80) {
        console.log(`${unidad} es un transporte nuevo y con alta capacidad.`);
    } else if (antiguedad >= 18 && capacidad < 80) {
        console.log(`${unidad} es un transporte antiguo y de poca capacidad.`);
    } else {
        console.log(`${unidad} es un transporte nuevo pero de poca capacidad.`);
    }
} else {
    console.log("Unidad de transporte desconocida.");
}