import express from 'express'
import  {CreateNewCurriculo, deleteById, getAll, updateField}  from '../adapters/prismaAdapter.js';




function CurriculoRouter(app = express()){
    
    app.get('/user/ping', (request, response)=>{
        response.send('pong')
    });

    app.post("/user", (request, response)=>{
        try{
            const data = request.body;
            CreateNewCurriculo(data);
            response.send({
                operation: 'Create New Curriculum',
                create: true,
            })
        }
        catch(e){
            response.send({
                operation: 'Create New Curriculum',
                create: false,
            })
        }
    })

    app.put('/user', async (request, response) =>{
        const data = request.body;
        const result = await updateField(data);
        response.send({ 
            operation: 'Update Curriculum',
            create: result,
        })
    })


    app.delete("/user/:id", (request, response)=>{
        const {id} = request.params;
        const idInteger = +id;
        deleteById(idInteger);
        response.send({
            operation: "delete"
        })
    })

    app.post("/user/getall", async (request, response)=>{
        try{
            const result = await getAll();

            response.send({
                operation: 'Get All Operation',
                status: 1,
                curriculos: result,
            })
        }
        catch(e){
            response.send({
                operation: 'Get All Operation',
                status: 0,
                curriculos: []
            })
        }
    })
}

export default CurriculoRouter;