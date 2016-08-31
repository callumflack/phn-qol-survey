var React = require("react");
var classNames = require('classnames');
var ShareScore = require('./ShareScore.js');
var NavLogo = require('../ui-Elements/NavLogo.js');
var ChartColumn = require('./ChartColumn.js');
var CloseButton = require('../ui-Elements/CloseButton.js');
var IcReturn = require('../ui-Elements/Icons.js').IcReturn;
var IcShare = require('../ui-Elements/Icons.js').IcShare;
var IcFeedback = require('../ui-Elements/Icons.js').IcFeedback;
var IcCloseSm = require('../ui-Elements/Icons.js').IcCloseSm;
var IcBack = require('../ui-Elements/Icons.js').IcBack;

// import syntax test: works with 'module.exports ='
var Modal = require('../ui-Elements/Modal.js');
// import Modal from '../ui-Elements/Modal.js'
import Headline from '../ui-Elements/Headline.js'
import PaneButton from '../ui-Elements/PaneButton.js'
import FormWell from './FormWell.js'
import ShareFeedback from './ShareFeedback.js'

// var Score = React.createClass({
class Score extends React.Component {
	getDefaultProps() {
		return {
			deviceRegistered: true,
			physical: undefined,
			psych: undefined,
			social: undefined,
			environment: undefined
		}
	}

    // Modal close
    handleClose() {
        // Switching this off... Instead we'll be redirecting home.
        //this.props.handleClose();
        window.location = '/';
    }

    // Pane states
    constructor (props) {
        super(props);
        this.state = {
            score: true,
            share: false,
            feedback: false
        };
        // this.update = this.update.bind(this)
    }

    // update (e) {
    //     this.setState({
    //         score: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
    //         share: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
    //         feedback: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    //     })
    // }
    // getDefaultProps() {
    //     return {
    //         selected: 0
    //     };
    // },
    // getInitialState() {
    //     return {
    //         selected: this.props.selected
    //     };
    // },
    // handleClick(index, event) {
    //     event.preventDefault();
    //     this.setState({
    //         selected: index
    //     });
    // },


    // toggle this.state.score on click
    handleBackToScore() {
        let active = this.state.score;
        this.setState({ score: active });
    }

    render() {
        // let componentClass = classNames('Button', {
        //     't-button--full t-buttonInvisible--caps': this.props.simple,
        //     't-button--fullLeft t-buttonInvisible--caps': this.props.single,
		// }, this.props.className);

        // var paneClasses = classNames([
        //     this.state.scoreIsActive && 'is-active'
        // ]);

        let scoreClasses = classNames(
                'c-pane--score',
                (this.state.score && 'is-active')),
            shareClasses = classNames(
                'c-pane',
                (this.state.share && 'is-active')),
            feedbackClasses = classNames(
                'c-pane',
                (this.state.feedback && 'is-active'));

		return (
			<Modal deviceRegistered={this.props.deviceRegistered}>

                <Headline headline="Your score" />

                <div className="c-tabs">

                    <div ref="score" className={scoreClasses}>
                        <div className="c-chart">
                            <div className="Grid Grid--withGutter">
                                <ChartColumn
                                    key="1"
                                    label="Physical"
                                    magnitude={this.props.physical}
                                    magnitudeAverage="73.5"
                                />
                                <ChartColumn
                                    key="2"
                                    label="Psychological"
                                    magnitude={this.props.psych}
                                    magnitudeAverage="70.6"
                                />
                                <ChartColumn
                                    key="3"
                                    label="Social"
                                    magnitude={this.props.social}
                                    magnitudeAverage="71.5"
                                />
                                <ChartColumn
                                    key="4"
                                    label="Environment"
                                    magnitude={this.props.environment}
                                    magnitudeAverage="75.1"
                                />
                            </div>
                        </div>

                        <p className="u-textRg--light u-marginB15">
                            Your score is rated across 4 domains against a randomly selected average to act as a level of comparison for our community, and to help you understand how you assess your own quality of life. <a className="u-linkUnderline" href="http://www.primaryhealth.com.au/quality-of-life-survey">Learn more.</a>
                        </p>

                        <div className="u-sm-size10of12 Grid-cell--center">
                            <div className="Grid Grid--alignCenter u-textCenter">
                                <div className="Grid-cell u-size1of3">
                                    <PaneButton><IcShare align="left" />Save score</PaneButton>
                                </div>
                                <div className="Grid-cell u-size1of3">
                                    <PaneButton><IcFeedback size="md" align="left" />Feedback</PaneButton>
                                </div>
                                <div className="Grid-cell u-size1of3">
                                    <PaneButton action={this.handleClose}><IcCloseSm align="left" />Finish</PaneButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref="share" className={shareClasses}>
                        <FormWell headline="Save or share your score">
                            <ShareScore
                                sendEmail={this.props.sendEmail}
                                sendSms={this.props.sendSms}
                            />
                        </FormWell>
                        <PaneButton single >
                            <IcBack withinButton />Back to score
                        </PaneButton>
                    </div>

                    <div ref="feedback" className={feedbackClasses}>
                        <FormWell headline="What did you think of the survey?">
                            <ShareFeedback />
                        </FormWell>
                        <PaneButton single onClick={this.handleBackToScore}>
                            <IcBack withinButton />Back to score
                        </PaneButton>
                    </div>

                </div>
			</Modal>
		);
	}
}

module.exports = Score;
