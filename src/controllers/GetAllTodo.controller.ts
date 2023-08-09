import { FastifyReply, FastifyRequest } from 'fastify';
import { GetTodoByIdUseCase } from '../useCases/GetTodoByIdUseCase';
import { GetAllTodoUseCase } from '../useCases/GetAllTodoUseCase';

export class GetAllTodoController {
  constructor(private readonly getAllTodoUseCase: GetAllTodoUseCase){}

  execute(request: FastifyRequest, reply: FastifyReply){
    try {
      const todos = this.getAllTodoUseCase.execute().map( (todo) => {
        return {
          id: todo.id,
          content: todo.content,
          status: todo.status,
        }
      })

      return reply.status(200).send({ message: 'All Todo', data: todos});
      
    } catch (err) {
      console.log(err)
      return reply.status(400).send({ error: String(err) });
    }
  }
}