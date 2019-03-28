import Menu from './Menu';
import React from 'react';

export default class Root extends React.Component {
    render() {
        return (
            <>
                <Menu />
                <main className="main">
                    <h1>Библиотека</h1>
                    {this.props.children}
                </main>
            </>
        )
    }
}
