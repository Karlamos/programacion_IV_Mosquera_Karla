// app/index.tsx — agrega al archivo existente
import { SafeAreaView, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const UNIDADES_DEMO = [
  { id: '1',  nombre: 'Trole-01',     codigo: 'PLQ-1001', modelo: 'Biarticulado Volvo',  ocupacion: 88, bateria: 72 },
  { id: '2',  nombre: 'Trole-02',     codigo: 'PLQ-1002', modelo: 'Biarticulado Volvo',  ocupacion: 65, bateria: 58 },
  { id: '3',  nombre: 'Bus-01',       codigo: 'PLQ-2001', modelo: 'Mercedes-Benz Diésel',ocupacion: 92, bateria: 45 },
  { id: '4',  nombre: 'Bus-02',       codigo: 'PLQ-2002', modelo: 'Mercedes-Benz Diésel',ocup: 35, bateria: 90 }, // nota: mantenemos las propiedades sincronizadas
  { id: '4',  nombre: 'Bus-02',       codigo: 'PLQ-2002', modelo: 'Mercedes-Benz Diésel',ocupacion: 35, bateria: 90 },
  { id: '5',  nombre: 'Ecovía-01',    codigo: 'ECO-3001', modelo: 'Articulado Hino',     ocupacion: 41, bateria: 82 },
  { id: '6',  nombre: 'Alimentador-1',codigo: 'ALI-4001', modelo: 'Buseta Chevrolet',    ocupacion: 89, bateria: 45 },
  { id: '7',  nombre: 'Alimentador-2',codigo: 'ALI-4002', modelo: 'Buseta Chevrolet',    ocupacion: 95, bateria: 30 },
  { id: '8',  nombre: 'Alimentador-3',codigo: 'ALI-4003', modelo: 'Buseta Chevrolet',    ocupacion: 22, bateria: 95 },
  { id: '9',  nombre: 'Metro-01',     codigo: 'MET-0001', modelo: 'Tren Eléctrico Alstom',ocupacion: 60, bateria: 99 },
  { id: '10', nombre: 'Metro-02',     codigo: 'MET-0002', modelo: 'Tren Eléctrico Alstom',ocupacion: 25, bateria: 88 },
  { id: '11', nombre: 'Trole-Reserva',codigo: 'PLQ-9999', modelo: 'Monobloque Eléctrico',ocupacion: 2,  bateria: 100 },
  { id: '12', nombre: 'Bus-Escuela',  codigo: 'ESC-0010', modelo: 'Bus Convencional',    ocupacion: 15, bateria: 60 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
              : porcentaje > 60 ? '#f57f17'
              : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaNodo({ nombre, codigo, modelo, ocupacion, bateria }: typeof UNIDADES_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{nombre}</Text>
        <Text style={estilos4.nodoIp}>{codigo}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{modelo}</Text>
      <BarraUso porcentaje={ocupacion} etiqueta="Cap" />
      <BarraUso porcentaje={bateria} etiqueta="Bat" />
    </View>
  )
}

export function Paso4mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Flota en operación</Text>
        <Text style={estilos4.headerSub}>{UNIDADES_DEMO.length} unidades activas</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {UNIDADES_DEMO.map((unidad) => (
          <TarjetaNodo key={unidad.id} {...unidad} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})