fun main() {
    println("Operadores")
    println("Operadores Aritmeticos")

    var pasajerosRuta1: Double = 10.50
    var pasajerosRuta2: Double = 5.50
    val suma: Double = pasajerosRuta1 + pasajerosRuta2

    println("Suma +: $pasajerosRuta1 + $pasajerosRuta2 = ${pasajerosRuta1 + pasajerosRuta2}")
    println("Suma +: $pasajerosRuta1 + $pasajerosRuta2 = $suma")
    println("Resta -: $pasajerosRuta1 - $pasajerosRuta2 = ${pasajerosRuta1 - pasajerosRuta2}")
    println("Multiplicacion *: $pasajerosRuta1 * $pasajerosRuta2 = ${pasajerosRuta1 * pasajerosRuta2}")
    println("Division /: $pasajerosRuta1 / $pasajerosRuta2 = ${pasajerosRuta1 / pasajerosRuta2}")
    println("Residuo %: $pasajerosRuta1 % $pasajerosRuta2 = ${pasajerosRuta1 % pasajerosRuta2}")

    println("Prioridades de los operadores aritmeticos")
    println("1()")
    println("2 *,/,%")
    println("3+,-")
    val validaciones = 10 + 3 * 5 + 5
    println("Validaciones: $validaciones")
    val aforo = 15 / 5 * 5
    println("Aforo : $aforo")
    val combustible = 100 + 20 / 4 * 3 - 10 % 3
    println("combustible : $combustible")

    println("Operadores de Comparación")
    println("Igual a == ${10 == 10}")
    println("Igual a == ${10 == 11}")
    println("Diferente de != ${5 != 10}")
    println("Diferente de != ${10 != 10}")
    println("Mayor que > ${5 > 10}")
    println("Mayor que > ${15 > 10}")
    println("Menor que < ${5 < 10}")
    println("Menor que < ${15 < 10}")
    println("Mayor igual >= ${10 >= 10}")
    println("Mayor igual >= ${15 >= 10}")
    println("Mayor igual >= ${5 >= 10}")
    println("Menor igual <= ${10 <= 10}")
    println("Menor igual <= ${15 <= 10}")
    println("Menor igual <= ${5 <= 10}")
}