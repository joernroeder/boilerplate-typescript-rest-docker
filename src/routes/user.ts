import * as express from 'express';
import { User } from '../models/user';

let routes: express.Router = express.Router();

const user: User = new User();

routes.get('/up', (req, res) => {
    user.up();

    res.json(user.getPosition());
});

export = routes;
