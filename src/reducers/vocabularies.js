// Expenses Reducer

const VocabulariesReducerDefaultState = [];

export default (state = VocabulariesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_VOCABULARY':
      return [
        ...state,
        action.vocabulary
      ];
    case 'REMOVE_VOCABULARY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_VOCABULARY':
      return state.map((vocabulary) => {
        if (vocabulary.id === vocabulary.id) {
          return {
            ...vocabulary,
            ...action.updates
          };
        } else {
          return vocabulary;
        };
      });
    case 'SET_EXPENSES':
      return action.vocabularies;
    default:
      return state;
  }
};
