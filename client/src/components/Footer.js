import React from "react";
import FilterLinkContainer from "../container/FilterLinkContainer";
import {VisibilityFilters} from "../actions";

// Function component
const Footer = () => (
    <div>
        <span> Show: </span> 

        <FilterLinkContainer filter = {VisibilityFilters.SHOW_ALL} >
            All 
        </FilterLinkContainer> 
        
        <FilterLinkContainer filter = {VisibilityFilters.SHOW_ACTIVE} >
            Active
        </FilterLinkContainer> 
        
        <FilterLinkContainer filter = {VisibilityFilters.SHOW_COMPLETED } >
            Completed
        </FilterLinkContainer>
    </div>
);

export default Footer;