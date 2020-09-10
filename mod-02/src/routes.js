import {Router} from 'express';
import User from './app/models/user'

const routes = new Router();

routes.get('/', async (req,res) => {
  const user = await User.create(
    {
      name: "jordy Lima",
      email: "jordylima51@gmail.com",
      password_hash: "123154749874",
    }
  )
  return res.json(user)
});

export default routes;
