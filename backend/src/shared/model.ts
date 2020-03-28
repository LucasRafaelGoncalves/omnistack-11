export interface ONG {
  id: string
  name: string
  email: string
  whatsapp: string
  city: string
  uf: string
}

export interface Incident {
  id: string
  title: string
  description: string
  value: number
  ong_id: ONG['id']
}