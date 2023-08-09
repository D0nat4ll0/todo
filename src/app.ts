import fastify from 'fastify'
import { todoRoute } from './router';

export const app = fastify()

app.register(todoRoute, { prefix: '/todo' });