import {Request,Response} from 'express'
import Vegetal from '../models/vegetal'


export const VegetalService = {

    createVegetal: async (req:Request, resp:Response) =>{
        const vegetal = new Vegetal(req.body);
        console.log (req.body)
        await vegetal.save((error:any) => {
            if (error) resp.status(400).send(error)
            resp.status(200).send(vegetal)

        });
        
    },

    getAllVegetal: async (req:Request, resp:Response) =>{

        await Vegetal.find().exec((error:any,vegetals:any)=>
        {
            if (error) resp.status(400).send(error)
            resp.status(200).send(vegetals)

        })

    },

    getOneVegetal: async (req:Request, resp:Response) => {
         await Vegetal.findById(req.params.id).exec((error:any,vegetals:any)=>
         {

            if (error) resp.status(400).send(error)
            resp.status(200).send(vegetals)

             
         })
        },

    putOneVegetal: async(req:Request, resp:Response) => {
     await Vegetal.findByIdAndUpdate( req.params.id,req.body).exec((error:any,vegetals:any)=>
        {

            if (error) resp.status(400).send(error)
            resp.status(200).send(vegetals)

             
         })
       },
    deleteOneVegetal: async(req:Request, resp:Response) => 
    {
        const vegetal= await Vegetal.findById(req.params.id)
        if (!!vegetal){
            await Vegetal.deleteOne({_id: req.params.id}).exec((error:any,vegetals:any)=>
        {

            if (error) resp.status(400).send(error)
            resp.status(200).send({msg:"vegetal was deleted succces"})

             
         })

        }
      else {
          resp.status(404).send({msg:"vegetal not found"})
      }
    }
}