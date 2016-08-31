import React from 'react'

const Headline = (props) => {
    return (
        <h1 className="c-delimit u-headline">
            <div className="c-delimit-rule"></div>
            <span className="c-delimit-block">{props.headline}</span>
        </h1>
    )
}

Headline.propTypes = {
    headline: React.PropTypes.string.isRequired
};

export default Headline
