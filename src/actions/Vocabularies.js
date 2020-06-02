import uuid from 'uuid';

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


// export const startAddVocabulary = (vocabularyData = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     const {
//       word = '',
//       translation = '',
//       phrases = 0,
//       createdAt = 0
//     } = vocabularyData;
//     const expense = { word, translation, phrases, createdAt };

//     return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
//       dispatch(addExpense({
//         id: ref.key,
//         ...expense
//       }));
//     });
//   };
// };

// REMOVE_VOCABULARY
export const removeVocabulary = ({ id } = {}) => ({
  type: 'REMOVE_VOCABULARY',
  id
});

// export const startRemoveExpense = ({ id } = {}) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
//       dispatch(removeExpense({ id }));
//     });
//   };
// };

// EDIT_VOCABULARY
export const editVocabulary = (id, updates) => ({
  type: 'EDIT_VOCABULARY',
  id,
  updates
});

// export const startEditExpense = (id, updates) => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
//       dispatch(editExpense(id, updates));
//     });
//   };
// };

// SET_VOCABULARIES
export const setVocabularies = (vocabularies) => ({
  type: 'SET_VOCABULARIES',
  vocabularies
});

// export const startSetExpenses = () => {
//   return (dispatch, getState) => {
//     const uid = getState().auth.uid;
//     return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });

//       dispatch(setExpenses(expenses));
//     });
//   };
// };
