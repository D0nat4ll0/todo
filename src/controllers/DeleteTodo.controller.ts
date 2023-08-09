import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteTodoUseCase } from '../useCases/DeleteTodoUseCase';

export class DeleteTodoController {
  constructor(private readonly deleteTodoUseCase: DeleteTodoUseCase){}

  execute(request: FastifyRequest, reply: FastifyReply){
    const { id }: any = request.params;

    try {
      const todo = this.deleteTodoUseCase.execute(id)

      if(!todo) return reply.status(404).send({ message: 'Todo not found' });

      return reply.status(200).send({ message: 'Todo deleted', data: { ...todo.props }});
      
    } catch (err) {
      console.log(err)
      return reply.status(400).send({ error: String(err) });
    }
  }
}