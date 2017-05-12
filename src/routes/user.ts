import * as express from 'express';
import { User } from '../models/user';

let routes: express.Router = express.Router();

const user: User = new User();

routes.get('/up', (req, res) => {
    user.up();

    res.json(user.getPosition());
});

routes.get('/down', (req, res) => {
    user.down();

    res.json(user.getPosition());
});

routes.get('/left', (req, res) => {
    user.left();

    res.json(user.getPosition());
});

routes.get('/right', (req, res) => {
    user.right();

    res.json(user.getPosition());
});

routes.get('/get-position', (req, res) => {
    res.json(user.getPosition());
});

export = routes;
