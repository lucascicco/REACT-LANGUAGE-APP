import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LanguageDashboard = (props) => (
  <div>
    {
      props.languages.length === 0 ? (
        <div>
          <span>Idioma inexistente</span>
        </div>
    ) : (
      <div>
      <ul>

      </ul>
        {
          props.languages.map((language) => {
            return <li  key={language.id}>
                      <Link key={language.id} to={`language/${language.id}`}>{language.language}</Link>
                  </li>    
          })
        }
      </div>
        
    )
  }
  </div>
);

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  };
};


export default connect(mapStateToProps)(LanguageDashboard);