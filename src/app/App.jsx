import React from 'react';

import Header from "./companents/Header.jsx";
import Home from "./companents/Home.jsx";
import Event from "./companents/Event.jsx"
import Footer from "./companents/Footer.jsx"
import Lifecycle from "./companents/Lifecycle.jsx"


class App extends React.Component {

    onGreet() {
        alert("Hello");
    }


    onClick(e) {
        alert();
    }

    render() {
        var user = {
            name: "Lamiya",
            suname: "Küley",
            hobbies: ["sports", "movie", "music", "game"],
            age: 25

        }
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Halil ibrahim"} age={28} user={user}>
                            <p>this tag is children</p>
                        </Home>
                    </div>
                </div>

                <div className="row">
                    <Event greet={this.onGreet} user={user}/>
                </div>
                <div className="row">
                    <Footer/>
                </div>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.onClick}>Auto Bind Button</button>
                </div>
                <hr/>
                <p>Component Lifecycle</p>
                <div className="row">
                    <Lifecycle/>
                </div>

            </div>
        );
    }
}
export default App;