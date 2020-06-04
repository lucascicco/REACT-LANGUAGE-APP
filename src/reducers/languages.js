// Expenses Reducer

const LanguagesReducerDefaultState = [];

export default (state = LanguagesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LANGUAGE':
      return [
        ...state,
        action.language
      ];
    case 'REMOVE_LANGUAGE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_LANGUAGE':
      return state.map((language) => {
        if (language.id === language.id) {
          return {
            ...language,
            ...action.updates
          };
        } else {
          return language;
        };
      });
    case 'SET_LANGUAGE':
      return action.languages;
    default:
      return state;
  }
};

