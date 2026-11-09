// app/index.tsx — añade esto debajo de los estilos
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export type UnidadTransporte = {
  id: string
  nombre: string
  codigo: string
  activo: boolean
}

export const UNIDADES: UnidadTransporte[] = [
  { id: '1', nombre: 'Trole-01',     codigo: 'PLQ-1001', activo: true  },
  { id: '2', nombre: 'Trole-02',     codigo: 'PLQ-1002', activo: true  },
  { id: '3', nombre: 'Bus-Troncal 1', codigo: 'PLQ-2001', activo: true  },
  { id: '4', nombre: 'Bus-Alimentador', codigo: 'PLQ-2005', activo: false },
  { id: '5', nombre: 'Metro-01',    codigo: 'MET-0001', activo: true  },
  { id: '6', nombre: 'Metro-02',    codigo: 'MET-0002', activo: false },
  { id: '7', nombre: 'Ecovía-01',   codigo: 'ECO-3001', activo: true  },
  { id: '8', nombre: 'Bus-Escuela',   codigo: 'ESC-0010', activo: true },
]

export function FilaUnidad({ unidad }: { unidad: UnidadTransporte }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.nombre}>{unidad.nombre}</Text>
        <Text style={styles1.ip}>{unidad.codigo}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          unidad.activo ? styles1.estadoActivo : styles1.estadoInactivo,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {unidad.activo ? 'EN RUTA' : 'TALLER'}
        </Text>
      </View>
    </View>
  )
}

export function Paso1mp() {
  return (
    <SafeAreaView style={styles1.contenedor}>
      <Text style={styles1.titulo}>Inventario de flota</Text>
      <FlatList<UnidadTransporte>
        data={UNIDADES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FilaUnidad unidad={item} />}
      />
    </SafeAreaView>
  )
}

const styles1 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  ip: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e8f5e9' },
  estadoInactivo: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})