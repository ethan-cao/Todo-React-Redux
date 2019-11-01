import React from "react";
import {connect} from "react-redux";

import * as actions from "../actions/index";

/*
    Header component is actually container component since it has state, 
    for simplicity, we just redner without representational component
*/
class Header extends React.Component{

    constructor(props) {
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
        // it calls action creator with the parameter to create an action, then call dispatch() with returned action
        // dispatch sends actions to reducer to produce new state and causes re-render
        this.props.addTodo(this.state.newTodo);

        this.setState({newTodo: ""});
    }

    componentDidMount(){
        console.log("Header componentDidMount");
    }

    render() {
        return (
            <div id="header" className="row">
                <form className="col s12" onSubmit={this.handleAddTodo} >
                    <div className="input-field col s6">
                        <i id="icon_prefix" className="material-icons prefix">assignment</i>
                        <input id="newTODOItem" type="text" value={this.state.newTodo} onChange={this.handleChange}/>
                        <label htmlFor="newTODOItem" className="active" >New todo item</label>
                        <button type="submit" className="waves-effect right btn" data-testid="add-button">
                            Add<i className="material-icons right">add</i>
                        </button>
                    </div>
                </form>
            </div>    
        );
    }
}

// connect(mapStateToProps, mapDispatchToProps, mergeProps, options) connects a React component to a Redux store
// Check VisibilityTodoList for more details
// if mapDispatchToProps is an object, connect will automatically call bindActionCreators for you internally
// just mapDispatchToProps in VisibilityTodoList
export default connect(null, actions)(Header);