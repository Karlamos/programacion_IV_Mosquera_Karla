data class Validador(
    var saldo: Int,
    var activo: Boolean
)

data class Conductor(
    var nombre: String,
    var turno: Int
)

data class UnidadTransporte(
    val combustible: Int,
    val motorActivo: Boolean,
    val autorizacion: Boolean
)

fun main() {
    val validador = Validador(40, true)
    if (validador.saldo >= 50 && validador.activo) {
        println("El pasajero puede ingresar a la estación")
    }

    val pasajerosPorEstacion = arrayOf(20, 45, 85, 30, 60)
    if (pasajerosPorEstacion[2] > 70) {
        println("¡Peligro! Estación con aforo crítico")
    } else {
        println("Aforo moderado en estación")
    }

    val pruebasRuta = arrayOf(80, 65, 90)
    val suma = pruebasRuta[0] + pruebasRuta[1] + pruebasRuta[2]
    val promedio = suma / 3.0
    if (promedio >= 70) {
        println("Flota estable en ruta")
    } else {
        println("Flota con retraso")
    }

    val conductor = Conductor("Juan Pérez", 65)
    println("Nombre del operador ${conductor.nombre}")
    if (conductor.turno >= 80) {
        println("Jornada de operación óptima")
    } else if (conductor.turno >= 20) {
        println("Jornada de operación normal")
    } else if (conductor.turno >= 20) {
        println("Turno cercano al límite")
    } else {
        println("Descanso obligatorio")
    }

    val unidad = UnidadTransporte(120, true, false)
    if (unidad.combustible >= 100) {
        if (unidad.motorActivo) {
            if (unidad.autorizacion) {
                println("Salida de unidad autorizada")
            } else {
                println("Unidad sin autorización de despacho")
            }
        }
    } else {
        println("Combustible insuficiente para ruta")
    }
}