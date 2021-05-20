import mongoose from 'mongoose'


const vegetalSchema = new mongoose.Schema<any>({
    type:  String,
    nombre: Number,
    surface: Number
  });

const Vegetal = mongoose.model('Vegetal', vegetalSchema)

export default Vegetal
