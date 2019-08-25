import React from "react";
import FilterLinkContainer from "../container/FilterLinkContainer";
import {VisibilityFilters} from "../actions";
import UndoRedo from "../container/UndoRedo";

// Function component
const Footer = () => (
    <div className="container row">
        <FilterLinkContainer filter= {VisibilityFilters.SHOW_ALL}>All</FilterLinkContainer> 
        <FilterLinkContainer filter= {VisibilityFilters.SHOW_ACTIVE}>Active</FilterLinkContainer>  
        <FilterLinkContainer filter= {VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLinkContainer> 
        <UndoRedo/>
    </div>
);

export default Footer;