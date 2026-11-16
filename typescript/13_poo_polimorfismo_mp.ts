class UnidadTransporte{
    operar(): void {
        console.log("Operación básica");
    }
}

class Autobus extends UnidadTransporte {
    override operar(): void {
        console.log("El autobús opera con alta capacidad");
    }
}

class Trolebus extends UnidadTransporte{
    override operar(): void {
        console.log("El trolebús opera con energía eléctrica");
    }
}

const unidades: UnidadTransporte[]=[
    new Autobus(),
    new Trolebus(),
    new Trolebus()
]

unidades.forEach(unidad => unidad.operar())