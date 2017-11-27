import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import axios from 'axios';

import DisplayTweets from './DisplayTweets';

class TweetSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isLoading: false,
            value: '',
            error: false
        };
    };

    apiCall = query => {
        axios.get(`http://localhost:3000/v1/tweets/search?q=${query}`)
            .then(res => {
                const tweets = res.data.map((tweet, index) => {
                    return { key: index, text: tweet.text, user_id: tweet.user_id, created_at: tweet.created_at };
                });
                this.setState({
                    results: tweets,
                    isLoading: false,
                    error: false,
                    value: query
                });
            })
            .catch(err => {
                this.setState({
                    error: true,
                    isLoading: false,
                    value: query
                });
            });
    }

    debouncedSearch = debounce(e => {
        const query = e.target.value.trim();
        if (query.length) {
            this.setState({
                isLoading: true
            });
            this.apiCall(query)
        }
    }, 200);

    handleChange = (e) => {
        e.persist();
        this.debouncedSearch(e);
    }

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            e.target.value = ''
        }
    };

    render = () => {
        const { error, results, isLoading, value } = this.state;
        return (
            <div id='tweet-search'>
                <input
                    type="text"
                    id="search"
                    placeholder="Search tweets..."
                    onChange={this.handleChange}
                    onKeyUp={this.handleSubmit}
                />
                {error ? <h5>No Tweets Found</h5> : <DisplayTweets results={results} apiCall={this.apiCall} />}
            </div>
        );
    }
}

export default TweetSearch;