import { StyleSheet, Text, View } from 'react-native'

interface TarjetaUnidadProps {
  nombre: string
  capacidad: number
  tipo: string
  estado: string
}

function TarjetaUnidad({ nombre, capacidad, tipo, estado }: TarjetaUnidadProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreServidor}>{nombre}</Text>
      <Text style={styles.datoDireccion}>{capacidad}</Text>
      <Text style={styles.datoSistema}>{tipo}</Text>
      <Text style={styles.datoSistema}>{estado ?? 'sin estado'}</Text>
    </View>
  )
}

export function Paso1Transporte() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Sistema de Transporte</Text>
      <TarjetaUnidad
        nombre="Trolebús 01"
        capacidad={80}
        tipo='Eléctrico - Troncal'
        estado='En operación'
      />
      <TarjetaUnidad
        nombre="Autobús Alimentador 05"
        capacidad={45}
        tipo='Diésel - Alimentador'
        estado='En ruta'
      />
      <TarjetaUnidad
        nombre="Metro Línea 1"
        capacidad={300}
        tipo='Subterráneo Alta Capacidad'
        estado='Operación normal'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreServidor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoDireccion: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'serif',
  },
  datoSistema: {
    fontSize: 12,
    color: '#757575',
  },
})