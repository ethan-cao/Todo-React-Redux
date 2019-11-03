import React, {Component} from "react"

export default class TODO extends Component {
    render(){
        return (
            <div className="todo">
                <label>
                    <input type="checkbox" onClick={this.props.toggle} checked={this.props.isDone} onChange={()=>(1)}/>
                    <span style={{marginRight: '5px', textDecoration: this.props.isDone? 'line-through': 'none'}}> {this.props.title} </span>
                </label>
                <a className="btn-floating btn-small waves-effect waves-light red">
                    <i className="material-icons" onClick={this.props.remove}>delete</i>
                </a>
            </div>
        );
    }
}

TODO.defaultProps = {
    title : "todo",
    isDone : false
}