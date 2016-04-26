var React = require("react");
var Nav = require("../ui-Nav/Nav.js");
var Registration = require("../ui-Registration/Registration.js");
var StartButton = require("./StartButton.js");

require('./../../stylesheets/app.scss');

var Home = React.createClass({
	getDefaultProps: function() {
		var region = localStorage.getItem('phnRegion');
		return {
			region: region
		}
	},
	getInitialState: function() {
		var deviceToken = localStorage.getItem('deviceToken');
		return {
			deviceRegistered: deviceToken? true : false
		};
	},
	render: function () {
		return (
			<div>

				<Nav deviceRegistered={this.state.deviceRegistered} region={this.props.region} />

				<main className="o-content" role="main">
					<div className="o-container">

						<h1 className="c-delimit u-headline">
							<div className="c-delimit-rule"></div>
							<span className="c-delimit-block">
								<span className="u-textEmMd">Quality of Life</span> survey
							</span>
						</h1>

						<p className="u-textMd">This survey hopes to assess quality of life where it is defined as individuals perceptions of their position in life in the context of the culture and value systems in which they live and in relation to their goals, expectations, standards and concerns. It is based on the World Health Organisation’s Quality of Life Survey.</p>
						<p className="u-textRg--light">For more information, please contact Northern Queensland Primary Health Network:</p>
						<ul className="o-listClean u-textRg--light">
							<li><a href="tel:1300-7746279">
								<span className="c-listItemTag">T</span>1300 PRIMARY (7746279)
							</a></li>
							<li><a href="mailto:admin@primaryhealth.com.au">
								<span className="c-listItemTag">E</span>admin@primaryhealth.com.au
							</a></li>
							<li><a href="http://www.primaryhealth.com.au">
								<span className="c-listItemTag">W</span>www.primaryhealth.com.au
							</a></li>
						</ul>

						<div className="c-delimit u-textCenter u-marginT2">
							<div className="c-delimit-rule c-delimit-rule--active"></div>
							<span className="c-delimit-block">
								<StartButton deviceRegistered={this.state.deviceRegistered} />
							</span>
							{
								! this.state.deviceRegistered ?
									<p className="u-textXs--medium u-textCenter u-marginT">You need to register this device first</p>
									: ""
							}
							</div>

					</div>
				</main>

				<Registration />

			</div>
		);
	}
});

module.exports = Home;
