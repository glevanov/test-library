import React from "react";

export default class Menu extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="menu">
                    <ul className="menu__list">
                        <li>
                            <a
                                className="menu__button"
                                href="./"
                                onClick={(evt) => evt.preventDefault()}
                            >
                                Главная
                            </a>
                        </li>
                        <li>
                            <a
                                className="menu__button"
                                href="./bookadd.html"
                                onClick={(evt) => this.props.switchModal(evt)}
                            >
                                Добавить книгу
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
