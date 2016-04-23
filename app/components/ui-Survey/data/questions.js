/**
 * Questions
 * PHN QoL Survey
 * 
 * Stores the questions contained in the Primary Care Networks W.H.O. Quality of
 * Life Survey. This uses the answer-sets module for supplying applicable
 * answers for each question.
 * 
 * @author Kashi Samaraweera <kashi@kashis.com.au>
 * @version 0.1.0
 * @copyright Patternworks
 */

var AnswerSets = require("./answer-sets.js");

module.exports = [
    {number: 1, text:"How would you rate your quality of life?", answers: AnswerSets.satisfaction },
    {number: 2, text:"How satisfied are you with your health?", answers: AnswerSets.satisfaction },
    {number: 3, text:"To what extend do you feel that physical pain prevents you from doing what you need to do?", answers: AnswerSets.amount.noun },
    {number: 4, text:"How much do you need any medical treatment to function in your life?", answers: AnswerSets.amount.noun },
    {number: 5, text:"How much do you enjoy life?", answers: AnswerSets.amount.noun },
    {number: 6, text:"To what extent do you feel your life to be meaningful?", answers: AnswerSets.amount.noun },
    {number: 7, text:"How well are you able to concentrate?", answers: AnswerSets.amount.adverb },
    {number: 8, text:"How safe do you feel in your daily life?", answers: AnswerSets.amount.adverb },
    {number: 9, text:"How healthy is your physical environment?", answers: AnswerSets.amount.adverb },
    {number: 10, text:"Do you have enough energy for everyday life?", answers: AnswerSets.amount.coverage },
    {number: 11, text:"Are you able to accept your bodily appearance?", answers: AnswerSets.amount.coverage },
    {number: 12, text:"Do you have enough money to fit your needs?", answers: AnswerSets.amount.coverage },
    {number: 13, text:"How available to you is information that you need in your day-to-day life?", answers: AnswerSets.amount.coverage },
    {number: 14, text:"To what extent do you have the opportunity for leisure activities?", answers: AnswerSets.amount.coverage },
    {number: 15, text:"How well are you able to get around?", answers: AnswerSets.quality },
    {number: 16, text:"How satisfied are you with your sleep?", answers: AnswerSets.satisfaction },
    {number: 17, text:"How satisfied are you with your ability to perform your daily living activities?", answers: AnswerSets.satisfaction },
    {number: 18, text:"How satisfied are you with your capacity to work?", answers: AnswerSets.satisfaction },
    {number: 19, text:"How satisfied are you with yourself?", answers: AnswerSets.satisfaction },
    {number: 20, text:"How satisfied are you with your personal relationships?", answers: AnswerSets.satisfaction },
    {number: 21, text:"How satisfied are you with your sex life?", answers: AnswerSets.satisfaction },
    {number: 22, text:"How satisfied are you with the support you get from your friends?", answers: AnswerSets.satisfaction },
    {number: 23, text:"How satisfied are you with the conditions of your living space?", answers: AnswerSets.satisfaction },
    {number: 24, text:"How satisfied are you with your access to health services?", answers: AnswerSets.satisfaction },
    {number: 25, text:"How satisfied are you with your transport?", answers: AnswerSets.satisfaction },
    {number: 26, text:"How often do you have negative feelings such as blue mood, despair, anxiety, depression?", answers: AnswerSets.frequency }
];
