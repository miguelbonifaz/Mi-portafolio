import { Automation } from './types'
import { automationSchema } from './schemas'
import { z } from 'zod'

const automationsData: Automation[] = [
  {
    id: '1',
    name: 'Bonifaz Peluqueros',
    description: 'Bot de agendamiento de citas que gestiona sincronización de calendario, reprogramación y consultas del menú de servicios.',
    features: [
      'Reserva automática vía WhatsApp',
      'Recordatorios para reducir ausencias',
    ],
    status: 'live',
    icon: 'scissors',
  },
  {
    id: '2',
    name: 'Dulce Sabor',
    description: 'Asistente virtual para pastelería que cotiza tortas personalizadas, informa sobre productos y gestiona disponibilidad.',
    features: [
      'Cotización de tortas personalizadas',
      'Consulta de disponibilidad de fechas',
    ],
    status: 'development',
    icon: 'cake',
  },
]

// Validate all automations on import
const automationsArraySchema = z.array(automationSchema)
export const automations = automationsArraySchema.parse(automationsData)
