import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_VOCABULARY
export const addVocabulary = (
  {
    word = '',
    translation = '',
    phrases = '',
    createdAt = 0,
    language = ''
  } = {}
) => ({
  type: 'ADD_VOCABULARY',
  vocabulary: {
    id: uuid(),
    word,
    translation,
    phrases,
    language,
    createdAt
  }
});


export const startAddVocabulary = (vocabularyData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    const {
      word = '',
      translation = '',
      phrases = '',
      language = '',
      createdAt = 0
    } = vocabularyData;

    const vocabulary = { word, translation, phrases,  language , createdAt };
    
    const languagex = vocabulary.language
 
    return database.ref(`users/${uid}/${languagex}`).push(vocabulary).then((ref) => {
      dispatch(addVocabulary({
        id: ref.key,
        ...vocabulary
      }));
    });
  };
};

// REMOVE_VOCABULARY
export const removeVocabulary = ({ id } = {}) => ({
  type: 'REMOVE_VOCABULARY',
  id
});

export const startRemoveVocabulary = ({ id  , language } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/${language}/${id}`).remove().then(() => {
      dispatch(removeVocabulary({ id }));
    });
  };
};

// EDIT_VOCABULARY
export const EditVocabulary = (id, updates) => ({
  type: 'EDIT_VOCABULARY',
  id,
  updates
});

export const startEditVocabulary = ({id, language}, updates ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/${language}/${id}`).update(updates).then(() => {
      dispatch(EditVocabulary(id, updates));
    });
  };
};

// SET_VOCABULARIES
export const SetVocabularies = (vocabularies) => ({
  type: 'SET_VOCABULARIES',
  vocabularies
});

export const startSetVocabularies = (language) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/${language}`).once('value').then((snapshot) => {
      const vocabularies = [];

      snapshot.forEach((childSnapshot) => {
        vocabularies.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(SetVocabularies(vocabularies));
    });
  };
};
