import React from 'react';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />

        <button type="submit"> Criar Conta </button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}

export default SignUp;