import { TodoRepository } from "../repositories/todo.repository";

export class GetAllTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  execute(){
    const todos = this.todoRepository.findAll()

    return todos
  }
}