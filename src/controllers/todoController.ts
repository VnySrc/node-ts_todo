import { async } from "@firebase/util";
import {Request, Response} from "express"
import { Todo } from "../models/Todo";

export const newTodo = async (req: Request, res: Response) => {
    if (req.body.title && req.body.content) {
        const {title, content} = req.body;

        const newTodo = await Todo.create({
            title,
            content,
        })
        res.json({status: "success", id: newTodo.id})

    }
    else{
        res.status(400)
        res.json({status: "Parametros Passados incorretamente"})
    }
}

export const listAll = async (req: Request, res: Response) => {
    
    const result = await Todo.findAll()
    res.json({result})
}

export const editTodo = async (req: Request, res: Response) => {
    if (req.body.title && req.body.content) {
    const id = req.params.id;
    const {title, content} = req.body;
    const result = await Todo.findOne({where:{id: id}})
    
    if (result) {
    result.title = title
    result.content = content
    result.save()
    
    res.json({status: "sucess", edited: true, id: id, newTitle: result.title, newContent: result.content})
    }

    
    }
    else{
        res.status(400)
        res.json({status: "Parametros Passados incorretamente"})
    }

}

export const deleteTodo = async (req: Request, res: Response) => {
   const id = req.params.id;
   const result = await Todo.findOne({where:{id: id}})
   
   if (result) {
       result.destroy()

       res.json({status: "sucess", deleted: true, id: id, title: result.title, content: result.content})
   }
   
   else{
    res.status(400)
    res.json({status: "Item Não Existe"})
}

   
}