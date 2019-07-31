import React, {Component} from "react"

/**
 * The presentational component is only responsible for displaying data
 */
export default class TODO extends Component {
    render(){
        return (
            <div>
                <label>
                    <input type="checkbox" onClick={this.props.toggle}/>
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