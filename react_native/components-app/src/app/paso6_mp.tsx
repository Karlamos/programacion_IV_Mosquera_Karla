// app/index.tsx — agrega al archivo existente

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BadgeEstado } from './paso3'
import { Card, FilaInfo } from './paso2'
import { ModalConfirm } from './paso5'

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en Trole-01`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>Trole-01</Text>
          <Text style={estilos6.cabIp}>PLQ-1001 · Biarticulado Volvo</Text>
        </View>
        <BadgeEstado estado="activo" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de métricas */}
        <Card titulo="Métricas en tiempo real" subtitulo="Última actualización: hace 30 s">
          <FilaInfo etiqueta="Ocupación" valor="88% · 140 pasajeros" />
          <FilaInfo etiqueta="Batería / Motor" valor="72% · Eléctrico (84 kWh)" />
          <FilaInfo etiqueta="Velocidad" valor="35 km/h" />
          <FilaInfo etiqueta="GPS / Conexión" valor="12.4 Mbps ↓ · 3.1 Mbps ↑" />
          <FilaInfo etiqueta="Tiempo en ruta" valor="4 horas, 30 minutos" />
        </Card>

        {/* Card de configuración */}
        <Card titulo="Configuración de la unidad">
          <FilaInfo etiqueta="Ruta asignada" valor="Troncal Norte - Sur (C1)" />
          <FilaInfo etiqueta="Terminal base" valor="Carcelén / El Recreo" />
          <FilaInfo etiqueta="Validador" valor="Sistema NFC · 3 pasarelas" />
          <FilaInfo etiqueta="Zona" valor="Quito - Centro" />
          <FilaInfo etiqueta="Operador" valor="Empresa de Pasajeros" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones operativas">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Despachar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Despacho de unidad')}
            />
            <BotonAccion
              etiqueta="Mantenimiento"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Envío a talleres')}
            />
            <BotonAccion
              etiqueta="Radio GPS"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Sincronización GPS')}
            />
            <BotonAccion
              etiqueta="Ver bitácora"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Descarga de bitácora')}
            />
          </View>
        </Card>

        {/* Card de log de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en Trole-01?\nEsta acción afectará el servicio en ruta.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})