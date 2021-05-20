import {Request,Response} from 'express'
import EspacesVegetal from '../models/espacesvegetal'


export const EspacesVegetalService = {

    createEspacesVegetal: async (req:Request, resp:Response) =>{
        const espacesvegetal = new EspacesVegetal(req.body);
        console.log (req.body)
        await espacesvegetal.save((error:any) => {
            if (error) resp.status(400).send(error)
            resp.status(200).send(espacesvegetal)

        });
        
    },

    getAllVegetal: async (req:Request, resp:Response) =>{

        await EspacesVegetal.find().exec((error:any,espacesvegetals:any)=>
        {
            if (error) resp.status(400).send(error)
            resp.status(200).send(espacesvegetals)

        })

    },

}