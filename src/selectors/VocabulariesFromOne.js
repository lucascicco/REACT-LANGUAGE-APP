export default (vocabularies, language, { text, sortBy }) => {
    //Separa vocabularios por lingua.
    const vocabulariesX = vocabularies.filter((vocabulary) => {
        return vocabulary.language === language
    })
    //Separa palavras dentro do vocabulario.
    return vocabulariesX.filter((vocabulary) => {
        const originalWord = vocabulary.word.toLowerCase().includes(text.toLowerCase())
        const translatedWord = vocabulary.translation.toLowerCase().includes(text.toLowerCase())

        return originalWord || translatedWord
    }).sort((a, b) => {
          if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
          }
    });
};
  
