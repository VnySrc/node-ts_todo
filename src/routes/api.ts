import { Router } from "express";

import * as todoController from "../controllers/todoController"

const router = Router()

router.post("/new" , todoController.newTodo)
router.get("/list" , todoController.listAll)
router.put("/edit/:id" , todoController.editTodo)
router.delete("/delete/:id" , todoController.deleteTodo)

export default router;