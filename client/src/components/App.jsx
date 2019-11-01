import React from "react";
import Header from "./Header";
import VisibleTodoList from "../container/VisibilityTodoContainer";
import Footer from "./Footer";

const App = () => (
    <div>
      <Header/>
      <VisibleTodoList/>
      <Footer/>
    </div>
);

export default App;