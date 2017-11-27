import React from 'react';

const A = (props) => (
    <a href="#" onClick={() => props.apiCall(props.word)} >
        {props.word}
    </a>
);

export default A;