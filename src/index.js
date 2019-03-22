import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {
    render() {
        return (
            <h1>Библиотека</h1>
        )
    }
}

ReactDOM.render(
    <Home />,
    document.getElementById('root'),
);
