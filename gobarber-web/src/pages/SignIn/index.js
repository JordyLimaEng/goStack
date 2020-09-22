import React from 'react';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido!!")
    .required("Email é obrigatório!"),
  password: Yup.string()
    .required("A senha é obrigatória!"),
});


function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="senha" />

        <button type="submit"> Acessar </button>
        <Link to="/register">Registrar</Link>
      </Form>
    </>
  );
}

export default SignIn;
