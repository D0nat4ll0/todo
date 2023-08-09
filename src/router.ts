import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { CacheTodoRepository } from './repositories/cache/cache-todo.repository'
import { CreateTodoController } from './controllers/CreateTodo.controller';
import { GetTodoByIdController } from './controllers/GetTodoById.controller';
import { GetTodoByIdUseCase } from './useCases/GetTodoByIdUseCase';
import { CreateTodoUseCase } from './useCases/CreateTodoUseCase';
import { DeleteTodoUseCase } from './useCases/DeleteTodoUseCase';
import { DeleteTodoController } from './controllers/DeleteTodo.controller';
import { GetAllTodoUseCase } from './useCases/GetAllTodoUseCase';
import { GetAllTodoController } from './controllers/GetAllTodo.controller';


const cacheTodoRepository = new CacheTodoRepository()

export function todoRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {

  app.post('/', async (request, reply) => {
    const createTodoUseCase = new CreateTodoUseCase(cacheTodoRepository)
    const todoCreateController =  new CreateTodoController(createTodoUseCase)
    return todoCreateController.execute(request, reply)
  });

  app.delete('/:id', async (request, reply) => {
    const deleteTodoUseCase = new DeleteTodoUseCase(cacheTodoRepository)
    const deleteTodoController =  new DeleteTodoController(deleteTodoUseCase)
    return deleteTodoController.execute(request, reply)
  });

  app.get('/all', async (request, reply) => {
    const getAllTodoUseCase = new GetAllTodoUseCase(cacheTodoRepository)
    const getAllTodoController =  new GetAllTodoController(getAllTodoUseCase)
    return getAllTodoController.execute(request, reply)
  });

  app.get('/:id', async (request, reply) => {
    const getTodoByIdUseCase = new GetTodoByIdUseCase(cacheTodoRepository)
    const getTodoByIdController =  new GetTodoByIdController(getTodoByIdUseCase)
    return getTodoByIdController.execute(request, reply)
  });

  done();
}