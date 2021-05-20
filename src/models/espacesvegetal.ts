import mongoose from 'mongoose'
import {Properties,Geometry} from './type'

const espacesvegetalSchema = new mongoose.Schema<any>({
    type:String,
    properties: {
        libelle:String,
        codeclassification:String,
        uniteminimalecollecte:String,
        gid:String,
    },
    geometry: {
        type :{type:String},
        coordinates: [[[String]]],
    }
  });

const EspacesVegetal = mongoose.model('EspacesVegetal', espacesvegetalSchema)

export default EspacesVegetal
