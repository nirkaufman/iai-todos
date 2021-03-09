// Actins related to the todolist
export function setItems(items) {
  return {
    type: 'SET_ITEMS',
    payload: items,
  }
};

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
};

export function removeItem(itemId) {
  return { 
    type: 'REMOVE_ITEM',
    payload: itemId
  }
};
