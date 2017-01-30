/**
 * Created by hikuley on 30.01.2017.
 */
import React from 'react';

class Lifecycle extends React.Component {

    constructor(props) {
        super();
        this.state = {
            number: 0
        };

        console.log("constructor")
    }

    componentWillMount() {
        console.log("Component will mount!");
    }

    componentDidMount() {
        console.log("Component did mount! ");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props! ", nextProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update!", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update!", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount!");
    }

    onClickButton(e) {
        this.setState({
            number: this.state.number + 1
        });
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <p>
                    <button onClick={this.onClickButton.bind(this)} className="btn">plus</button>
                </p>
                <p>
                    {this.state.number}
                </p>
            </div>
        );
    }

}
export default Lifecycle;