import { Router } from "express"
import OngController from './controllers/OngController'
import IncidentController from "./controllers/IncidentController"
import ProfileController from "./controllers/ProfileController"
import SessionController from "./controllers/SessionController"

export const routes = Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index)