export const countWords = (words) => {
  words = words.toLowerCase();
  words = words.replace(/[^A-Za-z0-9']/g, ' ');

  for (const char of words){
    console.log(char, char.charCodeAt());
  }

  const wordArr = words.split(/\s+/);
  //console.log(wordArr);
  const uniqWords = new Set(wordArr);
  const result = {};

  uniqWords.forEach(item => {
    result[item] = wordArr.filter((word) => word === item).length;
  });

  return result;
};
