import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Header from "./Header";
import {render, fireEvent, cleanup} from '@testing-library/react';

describe('Header test', () => {

    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    let initialState = {
        todo: [],
        visibilityfilter: 'SHOW_ALL'
    };

    function renderWithRedux(
        ui,
        {initialState, store = createStore(()=>{}, initialState) } = {}
    ) {
        return {
            ...render(<Provider store={store}>{ui}</Provider>),
            store,
        }
    }

    it('Header component should display ADD button', () => {
        const {getByTestId } = renderWithRedux(<Header/>, {initialState: initialState });

        expect(getByTestId("add-button").textContent).toBe('Addadd');
    });

});