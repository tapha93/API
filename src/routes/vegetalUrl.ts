import {VegetalService} from '../services/vegetalservice'
import Router from 'express'
import Vegetal from '../models/vegetal'


const VegetalRouter = Router()
      

VegetalRouter.get('/api/vegetal', VegetalService.getAllVegetal)
VegetalRouter.post('/api/vegetal', VegetalService.createVegetal)
VegetalRouter.get('/api/vegetal/:id', VegetalService.getOneVegetal)
VegetalRouter.put('/api/vegetal/:id', VegetalService.putOneVegetal)
VegetalRouter.delete('/api/vegetal/:id', VegetalService.deleteOneVegetal)


export default VegetalRouter;