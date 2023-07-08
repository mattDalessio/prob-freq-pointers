// add whatever parameters you deem necessary & write doc comment

/**canConstruct calls freq counter
 * logic to check for empty strings and caps
 * logic to check for mistmatch between word and letters
 * loops through and makes comparison against letters and words
 * returns true or false
 */
function canConstructWord(word, letters) {

  word = word.toLowerCase();
  letters = letters.toLowerCase();
  if (letters === '') return false;
  if (word === '') return true;

  const freqOfWord = frequencyCounter(word);
  const freqOfLetters = frequencyCounter(letters);

  for (const str in freqOfWord) {
    if (str in freqOfLetters) {
      if (freqOfLetters[str] < freqOfWord[str]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

/**freq counter O(n)
 * Use this to get the count of the words or letters
 * {a: 1, b: 2, c: 1}
 */
function frequencyCounter(input) {
  const itemCountObject = {};
  console.log(input);
  for (const item of input) {
    itemCountObject[item] = (itemCountObject[item] || 0) + 1;
  }
  return itemCountObject;
}
