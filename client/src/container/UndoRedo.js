import React from "react";
import {connect} from 'react-redux';
import * as actions from "../actions";

const UndoRedo = () => (
    <div>
        <button className="waves-effect waves-light btn" style={{margin:'2px'}} onClick disabled>Undo</button>
        <button className="waves-effect waves-light btn" style={{margin:'2px'}} onClick disabled>Redo</button>
    </div>
);

const mapStateToProps = state => (
    {}
);

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
