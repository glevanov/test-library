import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="menu">
                    <ul className="menu__list">
                        <li>
                            <Link
                                className="menu__button"
                                to="/"
                            >
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="menu__button"
                                to="/add/"
                            >
                                Добавить книгу
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
