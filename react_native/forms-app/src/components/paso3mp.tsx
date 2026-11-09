// app/index.tsx — añade debajo de styles2
import { SectionList, View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Paso3EncabezadoSeccion } from './paso3Encabezado'
import { UnidadTransporte } from './Paso1mp'
import { Paso1FilaUnidadmp } from './paso1FilaServidormp'

type SeccionTerminal = {
  title: string
  region: string
  data: UnidadTransporte[]
}

const SECCIONES_TRANSPORTE: SeccionTerminal[] = [
  {
    title: 'Terminal Carcelén (Corredor Norte)',
    region: 'norte-01',
    data: [
      { id: 't1', nombre: 'Trole-01',    codigo: 'PLQ-1001', activo: true  },
      { id: 't2', nombre: 'Trole-02',    codigo: 'PLQ-1002', activo: true  },
      { id: 't3', nombre: 'Alimentador-10', codigo: 'PLQ-2010', activo: true  },
    ],
  },
  {
    title: 'Terminal Recreo (Corredor Sur)',
    region: 'sur-01',
    data: [
      { id: 't4', nombre: 'Trole-05',    codigo: 'PLQ-1005', activo: true  },
      { id: 't5', nombre: 'Ecovía-01',   codigo: 'ECO-3001', activo: false },
    ],
  },
  {
    title: 'Estación San Francisco (Metro)',
    region: 'metro-01',
    data: [
      { id: 't6', nombre: 'Metro-01',    codigo: 'MET-0001', activo: true  },
      { id: 't7', nombre: 'Metro-02',    codigo: 'MET-0002', activo: false },
      { id: 't8', nombre: 'Bus-Buseta',  codigo: 'BUS-0500', activo: true },
    ],
  },
]

export function Paso3mp() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Red de Transporte Global</Text>
      <SectionList<UnidadTransporte, SeccionTerminal>
        sections={SECCIONES_TRANSPORTE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaUnidadmp unidad={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} region={section.region} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#1565c0',
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0d47a1' },
  encabezadoRegion: { fontSize: 11, color: '#546e7a', fontFamily: 'monospace' },
})