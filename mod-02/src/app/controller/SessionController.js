import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../model/User';
import File from '../model/File';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password_decrypted: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email, password_decrypted } = req.body;
    const user = await User.findOne(
      {
        where: { email },
        include: [
          {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          }
        ]
      },
    );

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password_decrypted))) {
      return res.status(401).json({ error: 'Password does note match' });
    }

    const { id, name, avatar, provider } = user;
    return res.json({
      user: { id, name, email, provider, avatar, },
      token: jwt.sign(
        { id },
        auth.secret,
        { expiresIn: auth.expiresIn },
      ),
    });
  }
}

export default new SessionController();
