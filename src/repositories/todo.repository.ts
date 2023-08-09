import { Todo } from "../entities/Todo";

export abstract class TodoRepository {
  abstract save(todo: Todo) : Todo
  abstract findById(id: string) : Todo | null | undefined
  abstract delete(id: string) : Todo | null | undefined
  abstract findAll() : Todo[]
}