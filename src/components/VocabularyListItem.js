import React from 'react';
import { Link } from 'react-router-dom';

const VocabularyListItem = ({ id, word, translation , phrases , createdAt , idioma}) => (
  <div className="entire-box">
  
    <div className="inside-flex">
      <Link to={`/editWord/${idioma}/${id}`} className="title-voc">
        {word}
      </Link>
    </div>

    <div className="translation">
      <h3>{translation.toUpperCase()}</h3>
    </div>

    <div className="notes-box">
      <p className="word-break">{phrases}</p>
    </div>

  </div>
);

export default VocabularyListItem;
