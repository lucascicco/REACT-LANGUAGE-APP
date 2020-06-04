import React from 'react';
import { Link } from 'react-router-dom';

const VocabularyListItem = ({ id, word, translation , phrases ,createdAt , idioma}) => (
  <div>
    <Link to={`/editWord/${idioma}/${id}`}>
      <h3>{word}</h3>
    </Link>
    <p>{translation} - {createdAt}</p>
    <p>{phrases}</p>
  </div>
);

export default VocabularyListItem;
