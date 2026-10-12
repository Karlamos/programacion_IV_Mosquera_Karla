//Condicionales

let nivel : number = 5;

if (nivel < 5) {
    console.log("El autobús puede iniciar la ruta");
}

//Condicionales dobles
if (nivel >= 16) {
    console.log("El autobús puede realizar mantenimiento mayor");
} else {
    console.log("El autobús no puede realizar mantenimiento mayor");
}

//Condicionales multiples

if (nivel >= 16) {
    console.log("El autobús puede realizar mantenimiento mayor");
} else if (nivel >= 8) {
    console.log("El autobús puede realizar revisión técnica");
} else {
    console.log("El autobús no puede realizar revisión técnica ni mantenimiento mayor");
}

//Condicional Anidados

if (nivel >= 16) {
    console.log("El autobús puede realizar mantenimiento mayor");
} else {
    if (nivel >= 8) {
        console.log("El autobús puede realizar revisión técnica");
    } else {
        console.log("El autobús no puede realizar revisión técnica ni mantenimiento mayor");
    }
}

//Condicional if con operador logico

nivel = -20;
let poder: number = 25;

if (nivel >= 8 && nivel < 16 && poder >= 20) {
    console.log("El autobús puede realizar revisión técnica");

} else if (nivel >= 16) {
    console.log("El autobús puede realizar mantenimiento mayor");

} else {
    console.log("El autobús no puede realizar revisión técnica ni mantenimiento mayor");
}

//Condicional if con operador logico or

nivel = 5;
poder = 56;

if (nivel >= 8 || poder >= 20) {
    console.log("El autobús puede realizar revisión técnica");

} else if (nivel >= 16) {
    console.log("El autobús puede realizar mantenimiento mayor");

} else {
    console.log("El autobús no puede realizar revisión técnica ni mantenimiento mayor");
}


/*Ejercicio en clase

Desarrolla un programa en TypeScript que determine si un operador puede participar en el sistema de transporte. 
Para ingresar, debe tener al menos 8 años de experiencia, ser mayor o igual a 12 años y no estar suspendido. 
Si cumple estos requisitos, verifica mediante condicionales anidados que su unidad tenga nivel mínimo 40, 
combustible mayor a 0 y sea de tipo Diésel, Eléctrico o Gas. Finalmente, clasifica la unidad como Maestro 
(nivel ≥ 80, capacidad ≥ 90 y combustible ≥ 100), Élite (nivel ≥ 60 y capacidad ≥ 75 o velocidad ≥ 80) o 
Avanzado (nivel ≥ 40, capacidad ≥ 50 y combustible > 0). Utiliza if, else if, else y operadores &&, || y !, 
mostrando un mensaje cuando no se cumplan los requisitos.*/

type TipoUnidad = "Diesel" | "Electrico" | "Hibrido" | "Gas";

interface Operador {
  nombre: string;
  edad: number;
  experiencia: number;
  suspendido: boolean;
}

interface Unidad {
  nombre: string;
  tipo: TipoUnidad;
  nivel: number;
  combustible: number;
  capacidad: number;
  velocidad: number;
}

const operador: Operador = {
  nombre: "Carlos",
  edad: 35,
  experiencia: 8,
  suspendido: false
};

const unidad: Unidad = {
  nombre: "Unidad 01",
  tipo: "Diesel",
  nivel: 85,
  combustible: 120,
  capacidad: 95,
  velocidad: 78
};

if (
  operador.experiencia >= 8 &&
  operador.edad >= 12 &&
  !operador.suspendido
) {
  console.log("Operador autorizado");

  if (
    unidad.nivel >= 40 &&
    unidad.combustible > 0 &&
    (
      unidad.tipo === "Diesel" ||
      unidad.tipo === "Electrico" ||
      unidad.tipo === "Gas"
    )
  ) {
    console.log("Unidad autorizada");

    if (
      unidad.nivel >= 80 &&
      unidad.capacidad >= 90 &&
      unidad.combustible >= 100
    ) {
      console.log("Categoría Maestro");

    } else if (
      unidad.nivel >= 60 &&
      (
        unidad.capacidad >= 75 ||
        unidad.velocidad >= 80
      )
    ) {
      console.log("Categoría Élite");

    } else if (
      unidad.nivel >= 40 &&
      unidad.capacidad >= 50 &&
      unidad.combustible > 0
    ) {
      console.log("Categoría Avanzado");

    } else {
      console.log("Sin categoría asignada");
    }

  } else {
    console.log("La unidad no cumple los requisitos");
  }

} else {
  console.log("Operador no autorizado");
}