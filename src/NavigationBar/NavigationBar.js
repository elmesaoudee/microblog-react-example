import React from 'react';
import NavidationBarClass from './NavigationBar.css'
import { NavLink } from "react-router-dom";
import MessageNumberContainer from '../Containers/MessageNumberContainer';

class NavigationBar extends React.Component {

    render() {
        return (
            <div className={NavidationBarClass.navigationBar}>
                <div className={NavidationBarClass.navigationBarInnerContainer}>
                    <ul className={NavidationBarClass.navigationBarUl}>
                        <li className={NavidationBarClass.navigationBarLi}>
                            <NavLink exact to="/" activeClassName={NavidationBarClass.active}>Microblog</NavLink>
                        </li>
                        <li className={NavidationBarClass.navigationBarLi}>
                            <NavLink exact to="/about" activeClassName={NavidationBarClass.active}>About</NavLink>
                        </li>
                    </ul>
                </div>
                <MessageNumberContainer />
            </div>
        );
    }
}

export default NavigationBar;
