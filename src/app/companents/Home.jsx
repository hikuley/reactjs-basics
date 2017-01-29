/**
 * Created by hikuley on 29/01/2017.
 */

import React from "react";

class Home extends React.Component {
    render() {
        var content = "Hello!";
        if (true) {
            content += " Halil Ibrahim"
        }
        return (
            <div>
                <p>in a new companent {content}</p>

                <p>Name :{this.props.name}</p>
                <p>Age :{this.props.age}</p>

                <h1>user objects</h1>
                <p>Name:{this.props.user.name}</p>
                <p>Suname:{this.props.user.suname}</p>
                <ul>
                    {this.props.user.hobbies.map((hobbiy, i)=><li key={i}>{hobbiy}</li>)}
                </ul>
                {this.props.children}
            </div>
        );
    }
}
export default Home;

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object
};