import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LanguageDashboard = (props) => (
  <div className="dashboard-content">
    {
      props.languages.length === 0 ? (
        <div>
          <span>Idioma inexistente</span>
        </div>
    ) : (    
        <div className="list-dashboard">
          {
              props.languages.map((language) => {
                return <div  key={language.id} className="list-dashboard-li">
                          <Link key={language.id} to={`/language/${language.id}`} className="dashboard-item">{language.language}</Link>
                      </div>    
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