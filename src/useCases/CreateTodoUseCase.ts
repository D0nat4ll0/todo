import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/todo.repository";

export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  execute(content: string, status: string){
    const todo = new Todo({ content, status})

    this.todoRepository.save(todo)

    return todo
  }
}