// FIRST NEW: oogKleur to UpperCase with arrow function
let surveyAnswers = data // requires data from data.js
console.log("Survey Answers are:", surveyAnswers)

const colomnName = "oogKleur"
const hexBrown = "663300"
const hexBlue = "0099FF"
const hexGreen = "009900"
const rgbCode = "(139,69,19)"

// Source: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex (c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Arrow function
const replaceAll = surveyAnswers.map(answer => answer[colomnName]
    .replace("#", "")
    .replace(" ", "")
    .toUpperCase()
    .replace("BRUIN", hexBrown)
    // Replace blue and lightblue for 1 hex
    .replace("BLAUW", hexBlue)
    .replace("LICHT", "")
    .replace("GROEN", hexGreen)
    // Replace RGB for hex
    .replace("RGB", "")
    .replace(".", ",")
    .replace(rgbCode, (rgbToHex(139,69,19)))
    .replace("", "#")
);

const showBrown = replaceAll.filter(answer => answer === "#" + hexBrown);

console.log(replaceAll)
console.log(showBrown)

// Write everything in a table (kinda working)
// const theloop = document.getElementById("loopie")
// const thecolor = document.getElementsByTagName("td")
// const holder = theloop;

// const makeTable = () => {
//     for(var i = 0; i < replaceAll.length; i++){ 
//         holder.innerHTML += "<td>" + replaceAll[i] + "</td>";
//     }
// }

// makeTable();

// Change all background-colors (not working)
// const colorChange = () => {
//     for(var i = 0; i < replaceAll.length; i++){ 
//         document.getElementsByTagName("td").style.color = replaceAll[i];
//     }
// }

// colorChange();

// IF ELSE BLUE
// const replaceBlue = surveyAnswers.filter(answer => {
//     if(answer[colomnName].includes("BLUE")){
//         console.log('Er staat blauw in!')
//     } else {
//         console.log('Er staat geen blauw in!')
//     }
// })

// Regular function
// const replaceToUpperCase = surveyAnswers.map(function(answer){
//     return answer[colomnName].toLowerCase();
// })

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