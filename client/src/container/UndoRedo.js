import React from "react";
import {connect} from 'react-redux';
import * as actions from "../actions";

const UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <div>
        <button className="waves-effect waves-light btn" style={{margin:'2px'}} onClick={onUndo} disabled={canUndo}>Undo</button>
        <button className="waves-effect waves-light btn" style={{margin:'2px'}} onClick={onRedo} disabled={canRedo}>Redo</button>
    </div>
);

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length <= 0,
    canRedo: state.todos.future.length <= 0
});

const mapDispatchToProps = ({
  onUndo: actions.undo,
  onRedo: actions.redo
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);