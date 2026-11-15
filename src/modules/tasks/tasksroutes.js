import { Router } from "express";
import { createtaskcontroller, deletetaskcontroller, getalltaskscontroller, updatetaskcontroller } from "./taskscontroller.js";
const router=Router()
router.get('/tasks',getalltaskscontroller)

router.post('/tasks/add-task',createtaskcontroller)

router.patch('/tasks/update/:id',updatetaskcontroller)

router.delete('/tasks/delete/:id',deletetaskcontroller)

export default router