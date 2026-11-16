fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Tarifa elevada")
        }
    }
    return total
}

fun main(){
    val estaciones = listOf("Carcelén", "Recreo", "Quitumbe")
    var iteracion: Int = 1
    for(estacion in estaciones){
        println("Estación $iteracion: $estacion")
        iteracion++
    }
    val costos = listOf(100, 150, 200, 80, 120)
    val total = calcularTotal(costos)
    println("Costo total de operación de Karla Mosquera: $total")
}