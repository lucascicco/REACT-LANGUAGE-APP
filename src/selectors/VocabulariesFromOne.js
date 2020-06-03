export default (vocabularies, language, { text }) => {
    //Separa vocabularios por lingua.
    const vocabulariesX = vocabularies.filter((vocabulary) => {
        return vocabulary.language === language
    })
    //Separa palavras dentro do vocabulario.
    return vocabulariesX.filter((vocabulary) => {
        const originalWord = vocabulary.word.toLowerCase().includes(text.toLowerCase())
        const translatedWord = vocabulary.translation.toLowerCase().includes(text.toLowerCase())

        return originalWord || translatedWord
    })
};
  
