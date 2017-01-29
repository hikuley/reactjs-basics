/**
 * Created by hikuley on 29/01/2017.
 */
import React from 'react';

/*
 * Event and binding
 * */

class Event extends React.Component {

    constructor(props) {
        super();
        this.user = props.user;
        this.state = {
            age: props.user.age,
            time: 0
        }

        setTimeout(()=> {
            this.setState({
                time: this.state.time + 5
            });
        }, 1000);
    }

    plusAge() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div className="container">
                <hr/>
                <p>Events</p>
                <h1>User</h1>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.user.name}</td>
                        <td>{this.user.suname}</td>
                        <td>{this.state.age}</td>
                    </tr>
                    </tbody>
                </table>
                <p>Time :{this.state.time}</p>
                <button onClick={this.plusAge.bind(this)} className="btn btn-primary">Make Me Older</button>
            </div>
        );
    }

}
export default Event;