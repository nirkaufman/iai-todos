/**
 * Actions related to UI (not data)
 */

export function setLoading (flag) {
  return {
    type: 'SET_LOADING',
    payload: flag
  }
};