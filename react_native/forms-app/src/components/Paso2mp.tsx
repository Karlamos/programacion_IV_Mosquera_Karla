// app/index.tsx
import { StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Text } from 'react-native'
import { useState, useCallback } from 'react'
import { UnidadTransporte, UNIDADES } from './Paso1mp'
import { Paso2ListaVacia } from './paso2ListaVacia'
import { Paso1FilaUnidadmp } from './paso1FilaServidormp'
import { Paso2Separador } from './paso2Separador'

const PAGINA_2: UnidadTransporte[] = [
  { id: '9',  nombre: 'Trole-Reserva 1', codigo: 'PLQ-9901', activo: true  },
  { id: '10', nombre: 'Trole-Reserva 2', codigo: 'PLQ-9902', activo: false },
]

export function Paso2mp() {
  const [datos, setDatos] = useState<UnidadTransporte[]>(UNIDADES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(UNIDADES)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Flota en ruta · p.{paginaActual}</Text>
      <FlatList<UnidadTransporte>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaUnidadmp unidad={item} />}
        ItemSeparatorComponent={Paso2Separador}
        ListEmptyComponent={<Paso2ListaVacia />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : <></>
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})