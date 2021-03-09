// Calculate the UI object on the data store
export function uiReducer (currentUiState = {loading: false}, action) {
  if(action.type === 'SET_LOADING') {
    return {loading: action.payload};
  }

  return currentUiState;
}