import { createStore } from 'redux';

// state of my todoListApp
const todoListState = {
  items: [],
  loading: false
}

// Action creator
function setItems(items) {
  return {
    type: 'SET_ITEMS',
    payload: items,
  }
}

function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

const removeItem = {};

const setLoading = {};

// calculate and return new state
function todoReducer(currentState, action) {
  if(action.type === 'SET_ITEMS') {
    return {...currentState, items: action.payload};
  }

  if(action.type === 'ADD_ITEM') {
    return {...currentState, items: [...currentState.items, action.payload]};
  }


  return currentState;
}

const todoListStore = createStore(todoReducer, todoListState);

todoListStore.subscribe( () => console.log(todoListStore.getState()) )
todoListStore.dispatch(addItem({id: 1, title:'first item'}));
