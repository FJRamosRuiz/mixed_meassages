// Generate a random number, taking as an argument a number which determines the range of the possible random number
const randomNumber = (num) => {
   return Math.floor(Math.random() * num);
};

// Arrays of sentnece structures that will be used to generate the funny phrase.
const funnyNoun = ["one", "two", "three", "four", "five"];
const funnyAction = ["six", "seven", "eight", "nine", "ten"];
const funnyEnding = ["eleven", "twelve", "thirteen", "fourteen", "fifteen"];

let funnyPhrase = [];

const generateFunnyPhrase = () => {
   
   const randomNoun = randomNumber(funnyNoun.length)
   const nounIndex = funnyNoun[randomNoun]
   funnyPhrase.push(nounIndex)
   
   
   const randomAction = randomNumber(funnyAction.length)
   const actionIndex = funnyAction[randomAction]
   funnyPhrase.push(actionIndex)
   
   const randomEnding = randomNumber(funnyEnding.length)
   const endingIndex = funnyEnding[randomEnding]
   funnyPhrase.push(endingIndex)

   return funnyPhrase.join(" ")

};

console.log(generateFunnyPhrase())
generateFunnyPhrase()
