import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div>
      <h1>Línguas - APP </h1>
      <p>Faça uso dessa aplicação para aprimorar seus estudos de idiomas.</p>
      <button onClick={startLogin}>Entrar com Google</button>
        <div>
          <p>Desenvolvido por Lucas Vitor.</p>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
