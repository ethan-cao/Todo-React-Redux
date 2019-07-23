import {connect} from 'react-redux';
import * as actions from "../actions";
import {bindActionCreators} from 'redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case actions.VisibilityFilters.SHOW_ALL:
            return todos;
        case actions.VisibilityFilters.SHOW_COMPLETED :
            return todos.filter( todo => todo.isDone);
        case actions.VisibilityFilters.SHOW_ACTIVE:
            return todos.filter( todo => !todo.isDone);
        default:
            throw new Error("Unknown filter : " + filter);
    }
}

const mapStateToProps = state => (
    // state.todo, key "todo" is set by reducers/index.js
    { todos: getVisibleTodos(state.todo, state.visibilityfilter) }
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


/**
use connect() to connect react component to redux store, used within Provider

mapStateToProps() subscribe component to Redux store change, 
which means mapStateToProps() is invoked when store is changed
it returns an object, which will be merged into the component’s props.

mapDispatchToProps gives component.props access to action creator
    it could be function mapDispatchToProps(dispatch, ownProps), returns an object containing action creator with dipatch bound
    it could be object, where each field is an action creator, and connect() will automatically call bindActionCreators for actions
 */
export default connect(mapStateToProps, mapDispatchToProps1)(TodoList);