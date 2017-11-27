import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Linkify from 'react-linkify';

import A from './A';

class TweetItem extends Component {
    constructor(props) {
        super(props);
    };

    createLink = (text) => {

        let apiCall = this.props.apiCall
        let tempArr = text.split(' ')

        if (text.indexOf('@') > -1 || text.indexOf('#') > -1) {

            tempArr = tempArr.map(word => {
                if (word.charAt(0) === '@' || word.charAt(0) === '#') {
                    return <A word={word} apiCall={apiCall} />
                } else {
                    return word
                }
            })
            text = tempArr.join(' ')
        }

        return tempArr.map((word, index) => {
            return <span key={index}> {word}</span>
        })
    }

    render () {
        return (

            <Card fluid raised>
                <Card.Header>
                    {this.props.tweet.user_id}
                </Card.Header>    
                <Card.Description>
                    <Linkify>
                        {this.createLink(this.props.tweet.text)}                    
                    </Linkify>    
                </Card.Description>    
            </Card>
        )
    }
}
export default TweetItem;