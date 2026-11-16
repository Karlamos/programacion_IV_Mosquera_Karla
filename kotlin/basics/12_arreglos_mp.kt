fun main(){
    val pasajerosEstacion = arrayOf(30, 50, 80, 100, 60)
    println(pasajerosEstacion[0])
    println(pasajerosEstacion[2])
    println(pasajerosEstacion[4])
    pasajerosEstacion[4] = 150
    println(pasajerosEstacion[4])
    for (pasajeros in pasajerosEstacion){
        println("Pasajeros")
        val pasajerosDoble = pasajeros * 2
        println("Pasajeros dobles $pasajerosDoble")
        if (pasajerosDoble >= 150){
            val pasajerosReducidos = pasajerosDoble - 70
            println("Pasajeros en andén reducidos: $pasajerosReducidos")
        }
    }
}