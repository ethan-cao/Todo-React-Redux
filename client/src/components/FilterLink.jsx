import React from "react";

export default class FilterLink extends React.Component{
    render(){
        return (
            <button className="waves-effect waves-light btn"
                    style={{margin:'2px'}}
                    onClick={this.props.onClick} 
                    disabled={this.props.active}>
                {this.props.children} 
            </button>
        );
    }
}