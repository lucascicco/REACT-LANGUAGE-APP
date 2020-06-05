import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
      <div className="box-layout__box">
       <h1 className="box-layout__title">Línguas APP </h1>
         <p>Faça uso dessa aplicação para aprimorar seus estudos de idiomas.</p>
         <button className="button" onClick={startLogin}>Entrar com Google</button>
           <div>
             <p>Desenvolvido por <strong>Lucas Vitor</strong>.</p>
           </div>
      </div>
    </div>  
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
