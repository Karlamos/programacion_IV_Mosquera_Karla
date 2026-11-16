fun activarSistema(){
    println("Activando sistema de transporte público")
    println("Conteo regresivo")
    println("1")
    println("2")
    println("3")
    println("Karla Mosquera activó la unidad")
}

fun operarRuta(estacion: String, unidades: Int, pasajeros: Int){
    println("Operando ruta hacia la estación $estacion")
    val total = unidades * pasajeros
    println("Total de pasajeros transportados: $total")
}

fun calcularTarifa(precio: Double): Double{
    var descuento: Double = 0.0
    if(precio >= 100){
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularPasajerosTotales(pasajerosEstacion: Array<Int>): Int{
    var total = 0
    for(pasajeros in pasajerosEstacion){
        total += pasajeros
        if(pasajeros >= 100){
            println("Alta afluencia de pasajeros: $pasajeros")
        }
    }
    return total
}

fun main(){
    activarSistema()
    activarSistema()
    operarRuta("Carcelén", 5, 4)
    operarRuta("Recreo", 4, 7)
    val descuentoPasajero = calcularTarifa(123.5)
    println("El pasajero Karla Mosquera tiene un descuento en pasaje de $descuentoPasajero")
}