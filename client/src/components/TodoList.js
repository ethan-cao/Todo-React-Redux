import React from "react";
import Todo from "./Todo";

/**
 * The presentational component is responsible for
 *  1. display data 
 *  2. handle event
 */
export default class TodoList extends React.Component {
    render() {
        // since TodoList is connected  in VisibilityTodoList using mapDispatchToProps, this.props has access to toggle and remove actions
        return (
            <div id="todoList" className="container row">
                {this.props.todos.map( 
                    todo => <Todo key={todo.id} 
                                    title={todo.title} 
                                    toggle={()=>this.props.toggle(todo.id)} 
                                    remove={()=>this.props.remove(todo.id)} 
                                    isDone={todo.isDone}
                            />
                , this)}
            </div>
        );
    }
}