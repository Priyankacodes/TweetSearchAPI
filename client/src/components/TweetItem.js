import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Linkify from 'react-linkify';

class TweetItem extends Component {
    constructor(props) {
        super(props);
    };

    createLink = (text) => {

        let apiCall = this.props.apiCall

        if (text.indexOf('@') > -1 || text.indexOf('#') > -1) {
            let tempArr = text.split(' ')
            tempArr = tempArr.map(word => {
                if (word.charAt(0) === '@' || word.charAt(0) === '#') {
                    return <a href="#" onClick={() => apiCall({word})} defaultValue={word} />
                } else {
                    return word
                }
            })
            text = tempArr.join(' ')
        }
    return text
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