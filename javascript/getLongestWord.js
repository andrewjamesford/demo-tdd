function getLongestWord(sentence) {
  if (!sentence) {
    throw new Error("Input sentence is empty!");
  }
  const words = sentence.split(" ");
  let longestWord = words[0];
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// console.log(getLongestWord("   Hello   ")); // Output: Hello
