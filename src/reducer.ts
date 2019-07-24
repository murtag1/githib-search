import actionTypes from './actions/actionsTypes';
import * as types from './types';

const initialState: types.StoreType = {
  searchInputFocused: false,
  isLoading: false,
  repos: [],
};

function reducer(state = initialState, action: types.ActionType): types.StoreType {
  switch (action.type) {
    case actionTypes.REQUESTED_REPOS_ASYNC:
      return Object.assign({}, state, { isLoading: true });
    case actionTypes.REQUESTED_REPOS_SUCCESS:
      return Object.assign({}, state, { repos: action.reposList, isLoading: false });
    case actionTypes.REQUESTED_REPOS_ERROR:
      return Object.assign({}, state, { repos: [], isLoading: false });
    case actionTypes.FOCUSED_SEARCH_INPUT:
      return Object.assign({}, state, { searchInputFocused: true });
    case actionTypes.UNFOCUSED_SEARCH_INPUT:
      return Object.assign({}, state, { searchInputFocused: false });
    default:
      return state;
  }
}

export default reducer;
