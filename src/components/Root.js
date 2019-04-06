import Menu from './Menu';
import React from 'react';
import './Root.css';

export default class Root extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <main className="root">
                    <h1>Библиотека</h1>
                    {this.props.children}
                </main>
            </>
        )
    }
}
