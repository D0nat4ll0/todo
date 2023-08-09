import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/todo.repository";

export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  execute(id: string){
    const todo = this.todoRepository.delete(id)
    
    return todo
  }
}