import { TodoRepository } from "../repositories/todo.repository";

export class GetTodoByIdUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  execute(id: string){
    const todo = this.todoRepository.findById(id)

    return todo
  }
}