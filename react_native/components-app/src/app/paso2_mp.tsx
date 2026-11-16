// app/index.tsx — agrega al archivo existente
import { StyleSheet, Text, View } from 'react-native'
import { ReactNode } from 'react'


// ─── Paso 2 — children y composición ────────────────────────────────

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

export function FilaInfo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2mp() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Detalle de unidad</Text>

      <Card titulo="Trole-01" subtitulo="Unidad troncal eléctrica">
        <FilaInfo etiqueta="Código" valor="PLQ-1001" />
        <FilaInfo etiqueta="Ruta" valor="Norte - Sur" />
        <FilaInfo etiqueta="Modelo" valor="Biarticulado Volvo" />
        <FilaInfo etiqueta="Capacidad" valor="160 pasajeros" />
        <FilaInfo etiqueta="Batería" valor="84 kWh · 78%" />
      </Card>

      <Card titulo="Estado operativo">
        <FilaInfo etiqueta="Pasajeros a bordo" valor="94 personas" />
        <FilaInfo etiqueta="Velocidad" valor="35 km/h" />
        <FilaInfo etiqueta="Último reporte" valor="hace 2 minutos" />
      </Card>
    </View>
  )
}

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardCabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bbdefb',
  },
  cardCuerpo: {
    padding: 12,
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#546e7a',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#1a1a1a',
    fontFamily: 'monospace',
  },
})