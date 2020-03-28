import { Request as ExpressRequest, ParamsDictionary } from 'express-serve-static-core'

export interface PostTypes {
  ONG: {
    name: string
    email: string
    whatsapp: string
    city: string
    uf: string
  }
  INCIDENT: {
    title: string
    description: string
    value: number
  }
  SESSION: {
    id: string
  }
}

export type Request<Params extends ParamsDictionary = undefined, Body = undefined> = ExpressRequest<Params, any, Body>