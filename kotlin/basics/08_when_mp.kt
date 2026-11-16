fun main(){
    val terminal = 2
    when(terminal){
        1-> println("Destino: Terminal Carcelén")
        2-> println("Destino: Terminal Recreo")
        3-> println("Destino: Terminal Quitumbe")
        else-> println("Terminal no disponible")
    }

    println("Incluya el día de operación (1-7)")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5-> println("Día laborable de alta frecuencia")
        6,7-> println("Día de servicio reducido")
        else-> println("Día inválido")
    }
    
    println("Ingrese el nivel de combustible de la unidad")
    val combustible = readLine()!!.toInt()
    when(combustible){
        in 0..39-> println("Combustible bajo")
        in 40..79-> println("Combustible medio")
        in 80..100-> println("Combustible lleno")
        else-> println("Nivel de combustible inválido")
    }

    val combustibleUnidad = 80
    val motorActivo = true
    val costoRuta = 40
    when{
        combustibleUnidad >= costoRuta && motorActivo -> {
            val restante = combustibleUnidad - costoRuta
            println("Salida autorizada")
            println("Combustible restante: $restante")
        }
        combustibleUnidad < costoRuta && motorActivo -> println("Combustible insuficiente")
        combustibleUnidad >= costoRuta && !motorActivo -> println("Motor inactivo en taller")
        else-> println("Salida no autorizada")
    }
}