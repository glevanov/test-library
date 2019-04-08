import Menu from 'components/Menu';
import React from 'react';
import './Root.css';

export default function Root(props) {
    return (
        <>
            <Menu />
            <main className="root">
                <h1>Библиотека</h1>
                {props.children}
            </main>
        </>
    )
}
