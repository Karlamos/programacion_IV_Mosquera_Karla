// app/index.tsx — añade debajo de styles3
import { ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, TextInput, Text, View, StyleSheet } from 'react-native'

export function Paso4mp() {
  const [pasajeros, setPasajeros] = useState('')
  const [capacidad, setCapacidad] = useState('')
  const [unidades, setUnidades] = useState('')

  const refPasajeros = useRef<ComponentRef<typeof TextInput>>(null)
  const refCapacidad = useRef<ComponentRef<typeof TextInput>>(null)
  const refUnidades = useRef<ComponentRef<typeof TextInput>>(null)

  // 1. Convertimos los valores a números (si está vacío, toma 0 para que no dé NaN)
  const numPasajeros = parseFloat(pasajeros) || 0
  const numCapacidad = parseFloat(capacidad) || 0
  const numUnidades = parseFloat(unidades) || 0

  // 2. Hacemos las operaciones de transporte
  const ocupacionPorcentaje = numCapacidad > 0 ? Math.round((numPasajeros / numCapacidad) * 100) : 0
  const aforoTotalFlota = numPasajeros * numUnidades

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Cálculo de Aforo y Ocupación de Flota</Text>

      {/* Pasajeros Actuales */}
      <Text style={styles4.etiqueta}>Pasajeros a bordo (promedio)</Text>
      <TextInput
        ref={refPasajeros}
        style={styles4.campo}
        value={pasajeros}
        onChangeText={setPasajeros}
        placeholder="Ej. 65"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refCapacidad.current?.focus()}
      />

      {/* Capacidad Máxima */}
      <Text style={styles4.etiqueta}>Capacidad Máxima de la Unidad</Text>
      <TextInput
        ref={refCapacidad}
        style={styles4.campo}
        value={capacidad}
        onChangeText={setCapacidad}
        placeholder="Ej. 100"
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => refUnidades.current?.focus()}
      />

      {/* Unidades en Ruta */}
      <Text style={styles4.etiqueta}>Unidades activas en ruta</Text>
      <TextInput
        ref={refUnidades}
        style={styles4.campo}
        value={unidades}
        onChangeText={setUnidades}
        placeholder="Ej. 12"
        keyboardType="numeric"
        returnKeyType="done"
      />

      {/* Vista previa con los resultados en tiempo real */}
      {/* Vista previa con los resultados en tiempo real */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>Ocupación: {ocupacionPorcentaje}% de la capacidad</Text>
        <Text style={styles4.previewTexto}>Pasajeros Totales en Flota: {aforoTotalFlota} usuarios</Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
    marginBottom: 4,
  },
})