import { createStore, combineReducers } from 'redux';
import {todolistReducer} from './reducres/todolist.reducer';
import {uiReducer} from './reducres/ui.reducer';
import {addItem} from './actions/todolist.actions'

// attach functions to calculate different objects on the state
const rootReducer = combineReducers({
  items: todolistReducer,
  ui: uiReducer
})

const todoListStore = createStore(rootReducer);