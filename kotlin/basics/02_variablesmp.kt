const val MAX_ESTACIONES = 10

fun main() {
    var pasajeros = 100
    println(pasajeros)
    println("Autor: Karla Mosquera")
    pasajeros = 80 
    println("pasajeros")
    println(pasajeros)
    println("Tipos de variables en Kotlin")
    println("Tipo Integer o entero")
    var ruta: Int = 14
    var unidades : Int = 10
    println("ruta : $ruta")
    println("unidades : $unidades") 

    println("Tipo LONG")
    var validaciones: Long = 9000000000000L
    println("validaciones : $validaciones")

    println("Tipo float")
    var combustible : Float = 45.5f
    println("combustible : $combustible")

    println("Tipo double")
    var distancia : Double = 45.5
    println("distancia : $distancia")

    println("Tipo char un caracter")
    var codigo : Char = 'K'
    println("codigo : $codigo")

    println("Tipo String")
    var nombreUnidad : String = "Trole-01"
    var corredor : String = "Corredor Norte"
    println("nombreUnidad : $nombreUnidad, corredor : $corredor")

    println("Tipo Boolean")
    var unidadActiva : Boolean = true
    println("unidadActiva : $unidadActiva")

    println("Val CONST VAR")
    val operador = "Karla Mosquera"
    var unidadesDisponibles = 10
    println("operador : $operador")
    println("unidadesDisponibles : $unidadesDisponibles")
    println("MAX_ESTACIONES : $MAX_ESTACIONES")
}