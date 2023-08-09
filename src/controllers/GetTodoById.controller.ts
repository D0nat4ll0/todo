import { FastifyReply, FastifyRequest } from 'fastify';
import { GetTodoByIdUseCase } from '../useCases/GetTodoByIdUseCase';

export class GetTodoByIdController {
  constructor(private readonly getTodoByIdUseCase: GetTodoByIdUseCase){}

  execute(request: FastifyRequest, reply: FastifyReply){
    const { id }: any = request.params;

    try {
      const todo = this.getTodoByIdUseCase.execute(id)

      if(!todo) return reply.status(404).send({ message: 'Todo not found'});

      return reply.status(200).send({ message: 'Todo found', data: { ...todo.props }});
      
    } catch (err) {
      console.log(err)
      return reply.status(400).send({ error: String(err) });
    }
  }
}