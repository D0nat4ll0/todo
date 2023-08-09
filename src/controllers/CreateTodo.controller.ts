import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateTodoUseCase } from '../useCases/CreateTodoUseCase';

export class CreateTodoController {
  constructor(private readonly createTodoUseCase: CreateTodoUseCase){}

  execute(request: FastifyRequest, reply: FastifyReply){
    const { status, content }: any = request.body;

    try {
      const todo = this.createTodoUseCase.execute(content, status)

      return reply.status(201).send({ message: 'Todo created', data: { ...todo.props }});
    } catch (err) {
      console.log(err)
      return reply.status(400).send({ error: String(err) });
    }
  }
}