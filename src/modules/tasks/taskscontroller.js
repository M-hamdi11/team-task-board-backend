import { createtaskservice, deletetaskservice, getalltasksservice, updatetaskservice } from "./tasksservice.js"

export async function getalltaskscontroller(req,res,next){
    try{
      const getalltasks=await getalltasksservice()
      res.status(200).json(getalltasks)

    }catch(err){
        next(err)
    }
}

export async function createtaskcontroller(req,res,next){
    try{
      const create=await createtaskservice(req.body)
      res.status(201).json(create)

    }catch(err){
        next(err)
    }
}

export async function updatetaskcontroller(req,res,next){
try{
  const update=await updatetaskservice(req.params.id,req.body)
  res.status(200).json(update)

}catch(err){
    next(err)
}

}

export async function deletetaskcontroller(req,res,next){
    try{
        const deletetask =await deletetaskservice(req.params.id)
        res.status(200).json(deletetask)

    }catch(err){
        next(err)
    }
}