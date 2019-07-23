import React, {Component} from "react";
import Header from "./Header";
import VisibleTodoList from "../container/VisibilityTodoList";
import Footer from "./Footer";

export default class App extends Component {
  // A class component must have at least the render() function
  render() {
    return (
      <div>
        <Header/>
        <VisibleTodoList/>
        <Footer/>
      </div>
    );
  }
}