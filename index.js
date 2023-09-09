import { createStore } from 'redux';

const clickCounter = (state = 0, action) => {
  if (action.type === 'ADD') {
    return state + 1;
  } else if (action.type === 'REDUCE') {
    return state - 1;
  } else if (action.type === 'RESET') {
    return 0;
  }

  return state;
}

const addAct = {
  type: 'ADD'
}
const reduceAct = {
  type: 'REDUCE'
}
const resetAct = {
  type: 'RESET'
}

const store = createStore(clickCounter);

const count = document.createElement('div');
count.innerText = store.getState();
count.id = 'count';
document.body.append(count);

const addButton = document.createElement('button');
addButton.innerText = '+';
document.body.append(addButton);
addButton.onclick = () => store.dispatch(addAct);

const reduceButton = document.createElement('button');
reduceButton.innerText = '-';
document.body.append(reduceButton);
reduceButton.onclick = () => store.dispatch(reduceAct);

const resetButton = document.createElement('button');
resetButton.innerText = 'reset';
document.body.append(resetButton);
resetButton.onclick = () => store.dispatch(resetAct);

const render = () => {
  document.getElementById('count').innerText = store.getState();
}

store.subscribe(render);