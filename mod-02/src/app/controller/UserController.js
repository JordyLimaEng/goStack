import * as Yup from 'yup';

import User from '../model/User';
import File from '../model/File';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password_decrypted: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const userExists = await User.findOne(
      {
        where: { email: req.body.email },
      },
    );

    if (userExists) {
      return res.status(400).json({ error: 'User already exist.' });
    }

    const {
      id, name, email, provider,
    } = await User.create(req.body);

    return res.json(
      {
        id, name, email, provider,
      },
    );
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      old_password: Yup.string().min(6),
      password_decrypted: Yup.string().min(6)
        .when('old_password', (old_password, field) => (old_password ? field.required() : field)),
      confirm_password: Yup.string().when(
        'password_decrypted',
        (password_decrypted, field) => (password_decrypted ? field.required().oneOf([Yup.ref('password_decrypted')]) : field),
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email, old_password } = req.body;
    const user = await User.findByPk(req.userId);

    //  checar se houve alteracao no email do usuario
    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      });

      //  se houve alteracao entao cheque se o email ja esta cadastrado com outra conta
      if (userExists) {
        return res.status(400).json({ error: 'User already exist' });
      }
    }

    //  se preencheu o campo de senha antiga entao verificar se ela bate com a do usuario
    if (old_password && !(await user.checkPassword(old_password))) {
      return res.status(401).json({ error: 'Password does not match with user password' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        }
      ]
    })

    return res.json({
      id, name, email, avatar,
    });
  }
}

export default new UserController();
