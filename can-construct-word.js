// add whatever parameters you deem necessary & write doc comment

/**canConstruct calls freq counter
 * logic to check for empty strings and caps
 * logic to check for mistmatch between word and letters
 * loops through and makes comparison against letters and words
 * returns true or false
 */
function canConstructWord(word, letters) {

  if (letters === '') return false;

  if (!word.split('').includes(letters)) return false;

  const freqOfWord = frequencyCounter(word.toLowerCase());
  const freqOfLetters = frequencyCounter(letters.toLowerCase());

  for (const str in freqOfLetters) {
    if (str in freqOfWord) {
      return freqOfLetters[str] === freqOfWord[str];
    }
  }
}

/**freq counter O(n)
 * Use this to get the count of the words or letters
 * {a: 1, b: 2, c: 1}
 */
function frequencyCounter(input) {
  const itemCountObject = {};

  for (const item of input) {
    itemCountObject[item] = (itemCountObject[item] || 0) + 1;
  }
  return itemCountObject;
}
