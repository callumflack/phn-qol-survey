import React from 'react'

// old createClass pattern
// module.exports = React.createClass({
//     displayName: 'FormWell',
//     render: function() {
//         return (
//             <div className="u-well u-marginB">
//                 <h3 className="u-headlineSm--light u-textCenter u-marginB15">{this.props.title}</h3>
//                 <div className="u-size9of12 Grid-cell--center">
//                     {this.props.children}
//                 </div>
//             </div>
//         );
//     }
// });

// new es6 stateless function
// http://buildwithreact.com/article/stateless-functional-components
const FormWell = props => {
    return (
        <div className="u-well u-marginB">
            <h3 className="u-headlineSm--light u-textCenter u-marginB15">{props.headline}</h3>
            <div className="u-size9of12 Grid-cell--center">
                {props.children}
            </div>
        </div>
    )
}

FormWell.propTypes = {
    headline: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
};

// this doesn't work with a require statement…
export default FormWell
