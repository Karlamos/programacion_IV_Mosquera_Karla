fun main() {
    val estaciones = mutableListOf("Carcelén", "Recreo", "Quitumbe")

    var option: Int?
    do {
        println("\nLaboratorio de Mosquera Karla")
        println("1. Agregar Estación")
        println("2. Mostrar Estaciones")
        println("3. Modificar Estación")
        println("4. Eliminar Estación")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readLine()?.toIntOrNull()

        when (option) {
            1 -> {
                print("Nombre de la nueva estación: ")
                val nombre = readLine() ?: ""
                if (nombre.isNotBlank()) {
                    estaciones.add(nombre)
                    println("Estación incluida")
                } else {
                    println("El nombre no puede estar vacío")
                }
            }
            2 -> {
                println("Estaciones:")
                for ((i, estacion) in estaciones.withIndex()) {
                    println("[$i] Estación: $estacion")
                }
            }
            3 -> {
                println("Actualizar")
                print("Índice a modificar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in estaciones.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine() ?: ""
                    if (nuevoNombre.isNotBlank()) {
                        estaciones[indice] = nuevoNombre
                        println("Estación Actualizada")
                    } else {
                        println("Nombre no válido")
                    }
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Índice a eliminar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in estaciones.indices) {
                    estaciones.removeAt(indice)
                    println("Estación Eliminada")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo del sistema de transporte...")
            else -> println("Opción no válida")
        }
    } while (option != 5)
}