import { Response } from 'express'
import connection from '../database/connection'
import { PostTypes, Request } from '.'
import crypto from 'crypto'

export default {
  index: async (req: Request, res: Response) => res.json(await connection.table('ongs').select('*')),
  create: async (req: Request<undefined, PostTypes['ONG']>, res: Response) => {
    const { name, email, whatsapp, city, uf } = req.body
    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id })
  }
}