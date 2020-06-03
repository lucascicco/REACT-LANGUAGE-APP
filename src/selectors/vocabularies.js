export default (vocabularies, { text, sortBy }) => {
  return vocabularies.filter((vocabulary) => {
    const originalWord = vocabulary.word.toLowerCase().includes(text.toLowerCase())
    const translatedWord = vocabulary.translation.toLowerCase().includes(text.toLowerCase())

    return originalWord || translatedWord
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};

