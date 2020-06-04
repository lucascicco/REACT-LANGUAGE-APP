import uuid from 'uuid';
import database from '../firebase/firebase';


export const addLanguage = (language) => ({
    type: 'ADD_LANGUAGE',
    language
})

export const startAddLanguage = (languageData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    const {
      language = '',
    } = languageData;

    const idioma = { language };

    const languageName = idioma.language

    return database.ref(`users/${uid}/languages`).push(languageName).then((ref) => {
      dispatch(addLanguage({
        id: ref.key,
        ...idioma
      }));
    });
  };
};
  

//
export const editLanguage = (id, updates) => ({
    type: 'EDIT_LANGUAGE',
    id,
    updates
});

export const startEditLanguage = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/languages/${id}`).update(updates).then(() => {
      dispatch(editLanguage(id, updates));
    });


  };
};

//

export const removeLanguage = (id) => ({
    type: 'REMOVE_LANGUAGE',
    id
});

export const startRemoveLanguage = ({id, language}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    database.ref(`users/${uid}/${language}`).remove()

    return database.ref(`users/${uid}/languages/${id}`).remove().then(() => {
      dispatch(removeLanguage(id));
    });

    
  };
};


//

export const setLanguages = (languages) => ({
  type: 'SET_LANGUAGE',
  languages
});


export const startSetLanguages = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/languages`).once('value').then((snapshot) => {
      const languages = [];

      snapshot.forEach((childSnapshot) => {
        languages.push({
          id: childSnapshot.key,  
          language: childSnapshot.val()
        });
      });

      dispatch(setLanguages(languages));
    });
  };
};

