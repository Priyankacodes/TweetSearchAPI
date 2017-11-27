import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import TweetItem from './TweetItem';

class DisplayTweets extends Component {

    constructor(props) {
        super(props);
    };

    render () {
        return (
            <Card.Group id='display-tweets'>
                {this.props.results.map((tweet, index) => {
                    return <TweetItem tweet={tweet} key={index} apiCall={this.props.apiCall} />
                })}
            </Card.Group>
        )
    }

}

export default DisplayTweets;
