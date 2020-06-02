import React from 'react';
import { Link } from 'react-router-dom';

const VocabularyListItem = ({ id, word, translation , createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{word}</h3>
    </Link>
    <p>{translation} - {createdAt}</p>
  </div>
);

export default VocabularyListItem;
