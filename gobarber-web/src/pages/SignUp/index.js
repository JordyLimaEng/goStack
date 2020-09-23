import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório!"),
  email: Yup.string()
    .email("Insira um email válido!!")
    .required("Email é obrigatório!"),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres!")
    .required("A senha é obrigatória!"),
});

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({name, email, password}) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="senha" />

        <button type="submit"> Criar Conta </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;