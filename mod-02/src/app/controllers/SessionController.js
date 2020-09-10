import User from '../models/user'
import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'
import * as Yup from 'yup'

class SessionController{
  async store(req, res){

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    })

    const {email, password} = req.body
    const user = await User.findOne({where: {email}})

    if(!user){
      return res.status(401).json({error:'user not found'})
    }
    
    if(!(await user.checkPassword(password))){
      return res.status(401).json({error: "password didn't match"})
    }

    const {id, name} = user;

    return res.json({
      user:{
        id,
        name,
        email,
      },
      token: jwt.sign({id}, authConfig.secret),
        expiresIn: authConfig.expiresIn
    }) 
  }
}

export default new SessionController();