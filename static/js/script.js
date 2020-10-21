// FIRST: oogKleur to UpperCase with arrow function
const surveyAnswers = data
console.log("Survey Answers are:", surveyAnswers)

const kolomNaam = "oogKleur"
const specificAnswer = surveyAnswers.map(answer => answer[kolomNaam].toLocaleUpperCase())

console.log("lijstAntwoorden: ", specificAnswer)

// SECOND: filter the data with only oogKleur using a function
// const surveyAnswers = data
// const kolomNaam = "oogKleur"

// let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, kolomNaam)

// console.log("lijstAntwoorden: ", lijstAntwoorden)

// // returns all answers for a specific question in an Array
// function getAnswersForQuestion(answers, question){ 
// 	if (answers.length < 1){
// 		console.error("Array must have items in it")
// 		return
// 	}
// 	let answersForQuestion = []
// 	for (answer of answers){
// 		answersForQuestion.push(answer[question])
// 	}
// 	return answersForQuestion //array van antwoorden voor een specifieke vraag
// }

// Bron: https://github.com/Razpudding/selecting-data-json/blob/main/index.js