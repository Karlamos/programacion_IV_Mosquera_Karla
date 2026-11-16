class UnidadTransporte {
    operar(): void {
        console.log("Operación básica de ruta");
    }
}

class Autobus extends UnidadTransporte {
    rutaExpresa(): void {
        console.log("El autobús inicia una ruta expresa de alta velocidad");
    }
}

class Trolebus extends UnidadTransporte{
    pasajePreferencial(): void {
        console.log("El trolebus aplica tarifa preferencial");

    }
}


const autobus01 = new Autobus();
autobus01.operar();
autobus01.rutaExpresa();
const trolebus01 = new Trolebus();
trolebus01.operar();
trolebus01.pasajePreferencial();



class SistemaMovilidad {
    conectar(): void {
        console.log("El sistema realiza una conexión básica de rutas");
    }
}

class Metro extends SistemaMovilidad {
    lineaSubterranea(): void {
        console.log("El metro activa el recorrido en línea subterránea");
    }
}

class Ecovia extends SistemaMovilidad {
    carrilExclusivo(): void {
        console.log("La ecovía circula por carril exclusivo");
    }
}

const metroL1 = new Metro();
metroL1.conectar();
metroL1.lineaSubterranea();
const ecovia02 = new Ecovia();
ecovia02.conectar();
ecovia02.carrilExclusivo();