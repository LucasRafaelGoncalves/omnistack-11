import { Response } from 'express'
import connection from '../database/connection'
import { PostTypes, Request } from '.'
import { Incident } from '../shared/model'

export default {
  index: async (req: Request, res: Response) => {
    const [count] = await connection.table('incidents').count()

    res.header('X-Total-Count', count['count(*)'])

    return res.json(await connection.table('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset(((req.query.page || 1) - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city', 
        'ongs.uf'
      ]))
  },
  create: async (req: Request<undefined, PostTypes['INCIDENT']>, res: Response) => {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    const [id] = await connection.table('incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    res.json({ id })
  },
  delete: async (req: Request<{ id: Incident['id'] }>, res: Response) => {
    const { id } = req.params
    const ong_id = req.headers.authorization

    const incident = await connection.table('incidents').where('id', id).select('ong_id').first()

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({
        error: 'Operation not permitted.'
      })
    }

    await connection.table('incidents').where('id', id).delete()

    return res.status(204).send()
  }
}