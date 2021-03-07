import {connect} from 'react-redux';
import * as actions from "../actions";
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    const presentTodos = todos.present;

    switch(filter){
        case actions.VisibilityFilters.SHOW_ALL:
            return presentTodos;
        case actions.VisibilityFilters.SHOW_COMPLETED :
            return presentTodos.filter( todo => todo.isDone);
        case actions.VisibilityFilters.SHOW_ACTIVE:
            return presentTodos.filter( todo => !todo.isDone);
        default:
            throw new Error("Unknown filter : " + filter);
    }
}

// select pieces of the state that are relevant to this component.
// what you select determines what aspects of the state that we're "subscribed to."
// it determines whether or not the component re-renders, select the minimal u need
// param state is entire application state object as returned by calling store.getState()
const mapStateToProps = state => (
    // state.todo, key "todo" is set by reducers/index.js
    {todos: getVisibleTodos(state.todos, state.visibilityfilter)}
);

const mapDispatchToProps = (dispatch, ownProps) => (
    // bindActionCreator() returns an object with all the same keys as 1st param
    // bind action creator to dispatch
    bindActionCreators({toggle: actions.toggle, remove: actions.remove}, dispatch)
    // check Header mapDispatchToProps as an object
);

// equivalent alternative to mapDispatchToProps
const mapDispatchToProps1 = {
    toggle : actions.toggle,
    remove : actions.remove
};

/*
connect(mapStateToProps, mapDispatchToProps, mergeProps, options) :
    connects a React component to a Redux store used within Provider by taking a reference to the store from the context API and then calling store.subscribe() internally.
    

mapStateToProps(state):
    returns an object, which will be merged into the component’s props.
    subscribes component to Redux store change, meaning mapStateToProps() is invoked when store is changed
    whenever got a new state, it returns a new mapped object
    connect() checks if any value in the object is different (===) from the object it got last time from mapStateToProps(),
    if there is change, the component re-renders

mapDispatchToProps gives component.props access to action creator and dispatch action automatically
    it could be function mapDispatchToProps(dispatch, ownProps), returns an object containing action creator with dispatch bound
    it could be object, where each field is an action creator, and connect() will automatically call bindActionCreators for actions
 */
export default connect(mapStateToProps, mapDispatchToProps1)(TodoList);

/*
    the connected component re-renders when either:
        Any parent component that renders this one passes it a different prop
        Any of the values on the object returned by mapStateToProps() are different
*/