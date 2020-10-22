// FIRST NEW: oogKleur to UpperCase with arrow function
let surveyAnswers = data // requires data from data.js
console.log("Survey Answers are:", surveyAnswers)

const colomnName = "oogKleur"
const hexBrown = "663300"

// Arrow function
const replaceToUpperCase = surveyAnswers.map(answer => answer[colomnName].replace("#", "").replace("Bruin", hexBrown).toUpperCase());

// Regular function
// const replaceToUpperCase = surveyAnswers.map(function(answer){
//     return answer[colomnName].toUpperCase();
// })

console.log(replaceToUpperCase)

// FIRST OLD (WORKS)
// let surveyAnswers = data // requires data from data.js
// console.log("Survey Answers are:", surveyAnswers)

// const colomnName = "oogKleur"
// const specificAnswer = surveyAnswers.map(answer => answer[colomnName].toUpperCase())

// console.log("Eye colors: ", specificAnswer)

// SECOND: filter the data with only oogKleur using a function
// const surveyAnswers = data
// const colomnName = "oogKleur"

// let lijstAntwoorden = getAnswersForQuestion(surveyAnswers, colomnName)

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