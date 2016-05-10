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
    convertToStyle: function() {
        var styleString = {
            height: this.toFixed() + "%"
        };
        return styleString;
    },
    render: function() {
        return (
            <div className="Grid-cell u-size1of2 u-xs-size1of4">
                <div className="c-chart-bar">
                    <div className="c-chart-indicator" style={this.convertToStyle()}>
                        <span className="c-chart-indicatorScore">
                            {this.toFixed()}
                            <span className="c-chart-indicatorMark">%</span>
                        </span>
                    </div>
                </div>
                <h2 className="c-chart-label">{this.props.label}</h2>
            </div>
        );
    }
});

module.exports = ChartColumn;