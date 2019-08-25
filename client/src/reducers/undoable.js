import {UNDO, REDO} from "../actions/index";

// Reducer Enhancer: a function that takes a reducer, and returns a new reducer
// high order function
const undoable = (reducer) => {

  // Call the reducer with empty action to populate the initial state
  // this is a general data structure for undo/redo functionality
  const initialState = {
    past: [],
    present: reducer([], {}),
    future: []
  };

  // console.log(initialState);

  // Return a reducer that handles undo and redo
  return function(state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case UNDO:
        const previous = past[past.length - 1]; // the last state
        const newPast = past.slice(0, past.length - 1); // states without the last one

        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        };
      case REDO:
        const next = future[0];
        const newFuture = future.slice(1);

        return {
          past: [...past, present],
          present: next,
          future: newFuture
        };
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);

        if (present === newPresent) {
          return state;
        }

        return {
          past: [...past, present],
          present: newPresent,
          future: []
        };
    }
  }
}

export default undoable;