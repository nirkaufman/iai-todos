/**
 *  FFunction for calculating the items array only
 */
export function todolistReducer(currentItems = [], action) {
  if(action.type === 'SET_ITEMS') {
    return action.payload;
  }

  if(action.type === 'ADD_ITEM') {
    return [...currentItems, action.payload];
  }

  return currentItems;
}