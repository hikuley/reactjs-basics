/**
 * Created by hikuley on 29/01/2017.
 */
import React from "react";
class Header extends React.Component {
    render() {
        return (
            <div className="navBar navBar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav nav-bar">
                            <li><a href="#">Header</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;