import express from 'express'
import CurriculoRouter from './routers/Curriculo.js';



const app = express();


app.use(express.json());



CurriculoRouter(app);

app.listen(3000)