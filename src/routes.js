import { Router } from 'express';
import UserControlloer from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/users', UserControlloer.store);

routes.use(authMiddleware);
routes.put('/users', UserControlloer.update);

export default routes;
