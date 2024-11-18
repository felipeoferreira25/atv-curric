
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


export async function CreateNewCurriculo(newCurrilo){
    try{
        prisma.$connect().then(()=>{
            console.log('ok')
        });
        const result = await prisma.curriculo.create({
            data:{
                Address: newCurrilo.Address,
                Cellphone: newCurrilo.Cellphone,
                Email: newCurrilo.Email,
                Experience: newCurrilo.Experience,
                Name: newCurrilo.Name,
                Scholarity: newCurrilo.Scholarity
            }
        })
    }
    catch(e){
        console.log('erro')
    }
}

export async function getAll(){
    try{
        prisma.$connect().then(()=>{
            console.log('ok')
        });
        const result = await prisma.curriculo.findMany();
        console.log(result)
        return result;
    }
    catch(e){
        console.log(e)
        return []
    }
}



export async function updateField(field){
    try{
        prisma.$connect().then(()=>{
            console.log('ok')
        })
        await prisma.curriculo.update({
            data: field,
            where:{
                Id: field.Id
            }
        })
        return true;
    }
    catch(e){
        return false;
    }
} 


export async function deleteById(id){
    await prisma.$connect();
    await prisma.curriculo.delete({
        where: {
            Id: id,
        }
    })
}





