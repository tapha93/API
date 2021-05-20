import app from './app';
import db  from './core/db'
import VegetalRouter from './routes/vegetalUrl'
import bodyParser from 'body-parser'
import EspacesVegetalRouter from './routes/espacesvegetalUrl';
require("dotenv").config()
  
db;
app.use(bodyParser.json())
app.use(VegetalRouter)
app.use(EspacesVegetalRouter)
app.listen(3001, (error:any) => {
    if (error) {
        return console.log(error)
    }
    return console.log('serveur' + 3001)
})


