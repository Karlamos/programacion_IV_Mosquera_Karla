abstract class UnidadTransporte{
    abstract operar(): void;
    descansar(): void{
        console.log("La unidad entra en mantenimiento preventivo")
    }
}

class Autobus extends UnidadTransporte{
    operar(): void{
        console.log("El autobús inicia recorrido en la ruta troncal")
    }
}


class Trolebus extends UnidadTransporte{
    operar(): void{
        console.log("El trolebús se conecta a la línea eléctrica")
    }
}

const unidades: UnidadTransporte[]=[
    new Autobus(),
    new Trolebus()
]

console.log(unidades);
unidades.forEach(unidad => unidad.operar())



abstract class SistemaMovilidad{
    abstract conectar(): void;
    detectarSeñal(): void{
        console.log("Detectando el estado del tráfico y GPS")
    }
}

class Metro extends SistemaMovilidad{
    conectar(): void{
        console.log("El metro activa la ruta subterránea expresa")
    }
}


class Ecovia extends SistemaMovilidad{
    conectar(): void{
        console.log("La ecovía circula por el carril exclusivo")
    }
}

const sistemas: SistemaMovilidad[]=[
    new Metro(),
    new Ecovia()
]

console.log(sistemas);
sistemas.forEach(sistema => sistema.conectar())