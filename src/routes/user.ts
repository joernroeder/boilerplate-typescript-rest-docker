import * as express from 'express';
import { User } from '../models/user';

let routes: express.Router = express.Router();

const user: User = new User();

const sendPositionAsJson = (req: express.Request, res: express.Response) => {
    res.json(user.getPosition());
};

routes.get('/up', (req, res, next) => {
    user.up();
    next();
}, sendPositionAsJson);

routes.get('/down', (req, res, next) => {
    user.down();
    next();
}, sendPositionAsJson);

routes.get('/left', (req, res, next) => {
    user.left();
    next();
}, sendPositionAsJson);

routes.get('/right', (req, res, next) => {
    user.right();
    next();
}, sendPositionAsJson);

routes.get('/get-position', sendPositionAsJson);

export = routes;
