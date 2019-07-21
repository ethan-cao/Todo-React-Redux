import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions/index";

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {newTodo:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChange(event) {
        this.setState({newTodo: event.target.value});
    }

    handleAddTodo(event){
        event.preventDefault();

        if (this.state.newTodo === ""){
            return;
        }

        // since connect(), this.props has access to all actions
        // it calls action creator with the parameter, then call dispatch() with new action
        // dispatch sends actions to reducer to produce new state and causes re-render
        this.props.addTodo(this.state.newTodo);

        this.setState({newTodo: ""});
    }

    render() {
        return (
            <div id="header">
                <form onSubmit = {this.handleAddTodo} >
                    <input type="text" value={this.state.newTodo} onChange={this.handleChange}/>
                    <button type="submit">Add</button>
                </form>
            </div>    
        );
    }
}

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options) connects a React component to a Redux store
// so component this.props has access to action
// this.props.dispatch === store.dispatch // true
export default connect(null, actions)(Header);