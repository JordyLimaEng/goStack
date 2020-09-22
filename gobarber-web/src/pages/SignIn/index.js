import React from 'react';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';
import { Form, Input} from '@rocketseat/unform';

function SignIn() {
  function handleSubmit(data){
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="email" />
        <Input name="password" type="password" placeholder="senha" />

        <button type="submit"> Acessar </button>
        <Link to="/register">Registrar</Link>
      </Form>
    </>
  );
}

export default SignIn;
