import { createStore } from "redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'ADD': {
      return state + 1;
    }
    case 'REDUCE': {
      return state - 1;
    }
    case 'RESET': {
      return 0;
    }

    default: {
      return 0;
    }
  }
}

export const store = createStore(counter);

export const addAction = { type: 'ADD' };
export const reduceAction = { type: 'REDUCE' };
export const resetAction = { type: 'RESET' };