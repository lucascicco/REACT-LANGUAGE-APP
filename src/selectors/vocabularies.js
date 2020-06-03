export default (vocabularies, { text }) => {
  return vocabularies.filter((vocabulary) => {
    const originalWord = vocabulary.word.toLowerCase().includes(text.toLowerCase())
    const translatedWord = vocabulary.translation.toLowerCase().includes(text.toLowerCase())

    return originalWord || translatedWord
    
  })
};

