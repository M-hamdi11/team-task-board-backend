import taskmodel from "../../../models/tasks.js";

export async function getalltasksservice() {
    const getalltasks = await taskmodel.find()
    return getalltasks
}

export async function createtaskservice(body) {
    const { title, description, assignee, dueDate } = body
    const create = await taskmodel.create({ title, description, assignee, dueDate })
    return create
}

export async function updatetaskservice(id, body) {
    const { title, description, assignee, dueDate, status } = body

    const update = await taskmodel.findByIdAndUpdate(
        id,
        { title, description, assignee, dueDate, status },
        { new: true, runValidators: true }
    )
    if (!update) {
        const err = new Error(`There is no task with id ${id}`)
        err.statusCode = 404
        throw err
    }

    return update
}

export async function deletetaskservice(id){
    const deletetask =await taskmodel.findByIdAndDelete(id)
    console.log(deletetask)
    if(!deletetask){
          const err = new Error(`There is no task with id ${id}`)
          err.statusCode = 404
        throw err
    }
    return {message:"task deleted successfully"}
}