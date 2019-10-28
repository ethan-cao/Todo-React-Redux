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

const mapStateToProps = state => (
    // state.todo, key "todo" is set by reducers/index.js
    {todos: getVisibleTodos(state.todos, state.visibilityfilter)}
);

const mapDispatchToProps = (dispatch, ownProps) => (
    // bindActionCreator returns function, which makes the action creator be able to be invoked directly
    bindActionCreators({toggle: actions.toggle, remove: actions.remove}, dispatch)
    // check Header mapDispatchToProps as an object
);

// equivalent alternative to mapDispatchToProps
const mapDispatchToProps1 = {
    toggle : actions.toggle,
    remove : actions.remove
};

/*
connect(mapStateToProps, mapDispatchToProps, mergeProps, options) connects a React component to a Redux store
used within Provider

mapStateToProps(state) subscribes component to Redux store change, 
which means mapStateToProps() is invoked when store is changed
it returns an object, which will be merged into the component’s props.

mapDispatchToProps gives component.props access to action creator and dipatch aciton automatically
    it could be function mapDispatchToProps(dispatch, ownProps), returns an object containing action creator with dipatch bound
    it could be object, where each field is an action creator, and connect() will automatically call bindActionCreators for actions
 */
export default connect(mapStateToProps, mapDispatchToProps1)(TodoList);