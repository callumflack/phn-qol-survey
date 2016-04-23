/**
 * Answer Sets
 * PHN QoL Survey
 *
 * Helps assemble common answer sets for survey-type questions that all work on
 * a standaradised scale 0..4.
 *
 * @author Kashi Samaraweera <kashi@kashis.com.au>
 * @version 0.1.0
 * @copyright Patternworks 2016
 */

module.exports = {
	satisfaction: [
		{value: 0, label: "Very dissatisfied"},
		{value: 1, label: "Dissatisfied"},
		{value: 2, label: "Neither satisfied nor dissatisfied"},
		{value: 3, label: "Satisfied"},
		{value: 4, label: "Very satisfied"}
	],
	amount: {
		noun: [
			{value: 0, label: "Not at all"},
			{value: 1, label: "A little"},
			{value: 2, label: "A moderate amount"},
			{value: 3, label: "Very much"},
			{value: 4, label: "An extreme amount"}
		],
		adverb: [
			{value: 0, label: "Not at all"},
			{value: 1, label: "A little"},
			{value: 2, label: "A moderate amount"},
			{value: 3, label: "Very much"},
			{value: 4, label: "Extremely"}
		],
		coverage: [
			{value: 0, label: "Not at all"},
			{value: 1, label: "A little"},
			{value: 2, label: "Moderately"},
			{value: 3, label: "Mostly"},
			{value: 4, label: "Completely"}
		],
	},
	quality: [
		{value: 0, label: "Very poor"},
		{value: 1, label: "Poor"},
		{value: 2, label: "Neither poor nor good"},
		{value: 3, label: "Good"},
		{value: 4, label: "Very good"}
	],
	frequency: [
		{value: 0, label: "Never"},
		{value: 1, label: "Seldom"},
		{value: 2, label: "Quite often"},
		{value: 3, label: "Very often"},
		{value: 4, label: "Always"}
	]
};
