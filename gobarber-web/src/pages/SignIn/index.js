import React from 'react';
import logo from '~/assets/logo.svg';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />

        <button type="submit"> Acessar </button>
        <Link to="/register">Registrar</Link>
      </form>
    </>
  );
}

export default SignIn;