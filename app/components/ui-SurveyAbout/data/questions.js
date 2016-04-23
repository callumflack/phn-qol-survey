/**
 * Questions
 * PHN 'About You' Survey
 *
 * Stores the questions contained in the Primary Care Networks 'About You'
 * Survey. This uses the answer-sets module for supplying applicable
 * answers for each question.
 *
 * @author Kashi Samaraweera <kashi@kashis.com.au>
 * @version 0.1.0
 * @copyright Patternworks
 */

var AnswerSets = require("./answer-sets.js");

module.exports = [
	{number: 1, text:"What is your gender?", answers: AnswerSets.gender },
	{number: 2, text:"How old are you?", answers: AnswerSets.age },
	{number: 3, text:"What is the highest education you've received?", answers: AnswerSets.education },
	{number: 4, text:"Do you identify as Indigenous Australian?", answers: AnswerSets.indigenous },
	{number: 5, text:"Where are you receiving this health service from?", answers: AnswerSets.location },
	{number: 6, text:"How many sessions have you done with this particular health provider?", answers: AnswerSets.sessions }
];
