import { Response } from 'express'
import connection from '../database/connection'
import { Request } from '.'

export default {
  index: async (req: Request, res: Response) => {
    const ong_id = req.headers.authorization

    const incidents = await connection.table('incidents').where('ong_id', ong_id).select('*')

    return res.json(incidents)
  }
}