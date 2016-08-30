var React = require('react');

var ChartColumn = React.createClass({
	getDefaultProps: function() {
		return {
			magnitude: 0,
            label: ""
		}
	},
    toFixed: function() {
        var value = this.props.magnitude * 20;
        value = Math.round(value);
        return value;
    },
    styleScore: function() {
        var styleString = {
            height: this.toFixed() + "%"
        };
        return styleString;
    },
    styleAverage: function() {
        var styleString = {
            height: this.props.magnitudeAverage + "%"
        };
        return styleString;
    },
    render: function() {
        return (
            <div className="Grid-cell u-size1of2 u-xs-size1of4">
                <div className="c-chart-bar">
                    <div className="c-chart-indicator c-chart-indicator--comparison" style={this.styleAverage()}>
                    </div>
                    <div className="c-chart-indicator" style={this.styleScore()}>
                        <span className="c-chart-indicatorScore">
                            {this.toFixed()}
                            <span className="c-chart-indicatorMark">%</span>
                        </span>
                    </div>
                </div>
                <h2 className="c-chart-label">{this.props.label}</h2>
                <p className="c-chart-label--comparison">Average {this.props.magnitudeAverage}%</p>
            </div>
        );
    }
});

module.exports = ChartColumn;
