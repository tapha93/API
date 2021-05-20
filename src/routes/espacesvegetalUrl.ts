import {EspacesVegetalService} from '../services/espacesvegetalservice'
import Router from 'express'



const EspacesVegetalRouter = Router()
      

EspacesVegetalRouter.get('/api/espacesvegetal', EspacesVegetalService.getAllVegetal)
EspacesVegetalRouter.post('/api/espacesvegetal', EspacesVegetalService.createEspacesVegetal)

export default EspacesVegetalRouter;