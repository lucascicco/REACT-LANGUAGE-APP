import uuid from 'uuid';

export const addLanguage = (
    {
    language = ''
    } = {}
  ) => ({
    type: 'ADD_LANGUAGE',
    language: {
      id: uuid(),
      language
    }
});
  

export const editLanguage = (id, updates) => ({
    type: 'EDIT_LANGUAGE',
    id,
    updates
});

export const setExpenses = (languages) => ({
    type: 'SET_LANGUAGE',
    languages
});
  

export const removeLanguage = (id) => ({
    type: 'REMOVE_LANGUAGE',
    id
});