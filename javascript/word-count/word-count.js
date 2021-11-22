export const countWords = (words) => {
  const dummyRemovedWords = words.toLowerCase().replace(/[,\.!&@$%^:]/g, " ")
  const splittedWords = dummyRemovedWords.split(/\s+/);
  const result = {};
  console.log(splittedWords);
  //for (let word of splittedWords){
    //console.log(word);
    //word = (word[0] === "'" || word[0] === '"') ? word.splice(1,) : word;
    //console.log(word);
  //}
  //console.log(splittedWords);
  //throw new Error('Remove this statement and implement this function');
};
