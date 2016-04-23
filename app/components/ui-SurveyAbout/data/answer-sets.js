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
	gender: [
		{value: 0, label: "Male"},
		{value: 1, label: "Female"},
	],
	age: [
		{value: 0, label: "<15"},
		{value: 1, label: "15–24"},
		{value: 2, label: "25–34"},
		{value: 3, label: "35–44"},
		{value: 4, label: "45–54"},
		{value: 4, label: "55–64"},
		{value: 4, label: "65+"}
	],
	education: [
		{value: 0, label: "Primary school"},
		{value: 1, label: "High (secondary) school"},
		{value: 2, label: "Tafe certificate or diploma"},
		{value: 3, label: "University (Tertiary)"},
		{value: 4, label: "Other (please specify)"}
	],
	indigenous: [
		{value: 0, label: "Yes"},
		{value: 1, label: "No"},
	],
	location: [
		{value: 0, label: "Aurukun"},
		{value: 1, label: "Cook"},
		{value: 2, label: "Hope Vale"},
		{value: 3, label: "Kowanyama"},
		{value: 4, label: "Lockhart River"},
		{value: 5, label: "Mapoon"},
		{value: 6, label: "Napranum"},
		{value: 7, label: "Northern Peninsula Area"},
		{value: 8, label: "Pormpuraaw"},
		{value: 9, label: "Torres"},
		{value: 10, label: "Torres Strait Island"},
		{value: 11, label: "Weipa"}
	],
	sessions: [
		{value: 0, label: "1"},
		{value: 1, label: "2"},
		{value: 2, label: "3"},
		{value: 3, label: "4"},
		{value: 4, label: "5"},
		{value: 5, label: "6"},
		{value: 6, label: "7"},
		{value: 7, label: "8"},
		{value: 8, label: "9"},
		{value: 9, label: "10"},
		{value: 10, label: "11"},
		{value: 11, label: "12"}
	]
};
