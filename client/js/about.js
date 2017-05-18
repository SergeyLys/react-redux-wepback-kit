import React from 'react';
import ReactDOM from 'react-dom';

import './common';
import '../css/about.scss';

class MyComponent extends React.Component {

    constructor() {
        super();
    }

    componentWillMount() {
        console.log('React component will mount only on page about');
    }

    componentDidMount() {
        console.log('React component did mount only on page about');
    }

    render() {
        console.log('React component mounting only on page about');
        return (
            <div>Hello react</div>
        )
    }

}

ReactDOM.render(<MyComponent />, document.getElementById('app'));