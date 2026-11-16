data class Estacion(
    val nombre: String,
    val pasajeros: Int
)

fun main(){
    var presupuestoTotal = 0.0
    println("Presupuesto de Operación de Flota")
    for (viaje in 1..6){
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal >= 100){
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Ruta $viaje")
        println("Costo original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de la operación %1f créditos".format(presupuestoTotal))

    val estaciones = arrayOf(
        Estacion("Carcelén", 30),
        Estacion("Recreo", 65),
        Estacion("Quitumbe", 95),
        Estacion("El Labrador", 130),
        Estacion("Ofelia", 45),
        Estacion("Mosquera", 89),
        Estacion("Karla", 75)
    )
    val costoViaje = 50;
    for (estacion in estaciones){
        println("Estación: ${estacion.nombre}")
        println("Pasajeros: ${estacion.pasajeros}")
        when{
            estacion.pasajeros < 50 -> {
                println("Estado: BAJO AFORO")
                println("No se requiere refuerzo de flota")
            }
            estacion.pasajeros < 80 -> {
                println("Estado: OPERATIVO")
            }
            estacion.pasajeros < 120 -> {
                println("Estado: ESTABLE")
                println("No se requiere refuerzo de flota")
            }
            else -> {
                println("Estado: ALTA AFLUENCIA")
            }
        }
        if (estacion.pasajeros >= costoViaje){
            val restante = estacion.pasajeros - costoViaje
            println("Despacho autorizado")
            println("Pasajeros restantes en andén: $restante")
        }
    }
}