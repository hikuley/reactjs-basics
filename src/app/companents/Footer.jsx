/**
 * Created by hikuley on 30.01.2017.
 *
 *  Stateless Components
 */
import React from 'react';

const Footer = (props)=> {
    return (
        <div className="navBar navBar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav nav-bar">
                        <li><a href="#">Footer</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;

// Ecma Script 6
// class Footer extends React.Component {
//     render() {
//         return (
//             <div className="navBar navBar-default">
//                 <div className="container">
//                     <div className="navbar-header">
//                         <ul className="nav nav-bar">
//                             <li><a href="#">Footer</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// export default Footer;