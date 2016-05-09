const React = require('react');

const Container = (props) => (
	<main className="o-content" role="main" deviceRegistered={this.props.deviceRegistered}>
		<div className="o-container">
			{props.children}
		</div>
	</main>
);

module.exports = Container;
