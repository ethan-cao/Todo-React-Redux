import {connect} from  "react-redux";
import {setVisibilityFilter} from "../actions";
import FilterLink from "../components/FilterLink";

// ownProps in both mapStateToProps and mapDispatchToProps 
// is props passed to this component FilterLinkContainer
// it is also accessible in FilterLink
const mapStateToProps = (state, ownProps) => ({
    active : ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick : () => ( dispatch(setVisibilityFilter(ownProps.filter)) )
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);