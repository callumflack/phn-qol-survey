var React = require("react");
var classNames = require('classnames');
var Nav = require("../ui-Nav/Nav.js");
var IcActive = require('../ui-Icons/Icons.js').IcActive;
var IcChoice = require('../ui-Icons/Icons.js').IcChoice;
var IcSubmit = require('../ui-Icons/Icons.js').IcSubmit;

require('./../../stylesheets/app.scss');

var QuestionAsked = React.createClass({
	render: function() {
		return (
			<p className="c-question-ask Media">
				<span className="c-question-ask--number Media-figure">
					{this.props.number}.
				</span>
				<span className="Media-body">
					{this.props.text}
				</span>
			</p>
		)
	}
});

var QuestionAskedInputRadio = React.createClass({
	getInitialState: function() {
		return {
			chosen : false
		};
	},

	handleClick: function(event) {
		this.setState({
			chosen : !this.state.chosen
		});
	},

	render: function() {
		var choiceClassName = classNames({
			'c-question-choices--option': true,
			'is-active': this.state.chosen
		});

		return (
			<div className={choiceClassName} onClick={this.handleClick}>
				<input name="gender" type="radio"/>
				<label className="">
					<span className="c-radioInputNumber">{this.props.number}</span>
					{this.props.label}
				</label>
				<IcChoice active="" />
			</div>
		)
	}
});

var Submit = React.createClass({
	render: function() {
		return (
			<div className="c-delimit u-textCenter u-marginT4 u-marginB6">
				<p className="u-textMd u-textWtMd u-colorBrandAlt u-textCenter u-marginBD6">Now on to the second part.</p>
				<p className="u-textMd u-colorBrandAlt u-textCenter u-marginB15">26 easy multiple choice questions.</p>
				<div className="c-delimit-rule c-delimit-rule--active"></div>
				<span className="c-delimit-block">
					<button className="Button t-button" name="button" type="submit" value="Submit survey">
						Start the survey
					</button>
				</span>
			</div>
		)
	}
});

var AboutForm = React.createClass({

	render: function() {
		return (
			<form className="" method="post" action="">
				<div className="c-question">
					<QuestionAsked number="1" text="What is your gender?" />
					<div className="c-question-choices t-radioInputs">
						<QuestionAskedInputRadio number="1" label="Male" />
						<QuestionAskedInputRadio number="2" label="Female" />
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="2" text="How old are you?" />
					<div className="t-selectInputs">
						<select>
							<option value="" disabled selected>Choose from these options</option>
							<option value="1">15</option>
							<option value="2">15–24</option>
							<option value="3">25–34</option>
							<option value="4">35–44</option>
							<option value="5">45–54</option>
							<option value="6">55–64</option>
							<option value="7">65+</option>
						</select>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="3" text="What is the highest education you received?" />
					<div className="t-selectInputs">
						<select>
							<option value="" disabled selected>Choose from these options</option>
							<option value="1">Primary school</option>
							<option value="2">High (secondary) school</option>
							<option value="3">Tafe certificate or diploma</option>
							<option value="4">University (Tertiary)</option>
							<option value="5">Other</option>
						</select>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="4" text="Do you identify as Indigenous Australian?" />
					<div className="c-question-choices t-radioInputs">
						<QuestionAskedInputRadio number="1" label="Yes" />
						<QuestionAskedInputRadio number="2" label="No" />
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="5" text="Where are you receiving this health service at?" />
					<div className="t-selectInputs">
						<select>
							<option value="" disabled selected>Choose from these options</option>
							<optgroup label="Torres and Cape">
								<option value="0">Aurukun</option>
								<option value="1">Cook</option>
								<option value="2">Hope Vale</option>
								<option value="3">Kowanyama</option>
								<option value="4">Lockhart River</option>
								<option value="5">Mapoon</option>
								<option value="6">Napranum</option>
								<option value="7">Northern Peninsula Area</option>
								<option value="8">Pormpuraaw</option>
								<option value="9">Torres</option>
								<option value="10">Torres Strait Island</option>
								<option value="11">Weipa</option>
							</optgroup>
							<optgroup label="Cairns and Hinterland">
								<option value="0">Cairns; Douglas</option>
								<option value="1">Cassowary Coast</option>
								<option value="2">Croydon</option>
								<option value="3">Etheridge</option>
								<option value="4">Tablelands; Mareeba</option>
								<option value="5">Wujal Wujal</option>
								<option value="6">Yarrabah</option>
							</optgroup>
							<optgroup label="Townsville">
								<option value="0">Burdekin</option>
								<option value="1">Charters Towers</option>
								<option value="2">Flinders</option>
								<option value="3">Hinchinbrook</option>
								<option value="4">Palm Island</option>
								<option value="5">Richmond</option>
								<option value="6">Townsville</option>
							</optgroup>
							<optgroup label="Mackay">
								<option value="0">Isaac</option>
								<option value="1">Charters Towers</option>
								<option value="2">Mackay</option>
								<option value="3">Whitsunday</option>
							</optgroup>
						</select>
					</div>
				</div>

				<div className="c-question">
					<QuestionAsked number="6" text="How many sessions have you done with this particular health provider?" />
					<div className="t-selectInputs">
						<select>
							<option value="" disabled selected>Choose from these options</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</select>
					</div>
				</div>

				<Submit />

			</form>
		)
	}
});

module.exports = AboutForm;
