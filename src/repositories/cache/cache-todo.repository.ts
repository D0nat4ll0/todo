import { Todo } from "../../entities/Todo";
import { TodoRepository } from "../todo.repository";

export class CacheTodoRepository implements TodoRepository {
  public items: Array<Todo> = [];

  save(todo: Todo): Todo {
    this.items.push(todo)

    return todo
  }

  findById(id: string) {
    const todo = this.items.find((todo) => todo.id === id)

    return todo
  }

  delete(id: string): Todo | null | undefined {
    const todoIndex = this.items.findIndex((todo) => todo.id === id)

    if(todoIndex < 0 ) return
    
    const [todoRemoved] = this.items.splice(todoIndex, 1)

    return todoRemoved
  }

  findAll(): Todo[] {
    return this.items
  }
}