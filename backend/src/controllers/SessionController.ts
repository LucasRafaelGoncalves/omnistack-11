import { Response } from 'express'
import connection from '../database/connection'
import { Request, PostTypes } from '.'

export default {
  create: async (req: Request<undefined, PostTypes['SESSION']>, res: Response) => {
    const { id } = req.body

    const ong = await connection.table('ongs').where('id', id).select('name').first()

    if (!ong) {
      return res.status(400).send({
        error: 'No ONG found with this ID.'
      })
    }

    return res.json(ong)
  }
}