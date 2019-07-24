import actionsTypes from './actionsTypes';
import * as types from '../types';

export function requestRepos(reposName: string): types.ActionType {
  return {
    type: actionsTypes.REQUESTED_REPOS,
    reposName,
  };
}

export function requestReposAsync(): types.ActionType {
  return {
    type: actionsTypes.REQUESTED_REPOS_ASYNC,
  };
}

export function requestReposSuccess(reposList: types.RepoInfoType[]): types.ActionType {
  return {
    type: actionsTypes.REQUESTED_REPOS_SUCCESS,
    reposList,
  };
}

export function requestReposError(): types.ActionType {
  return {
    type: actionsTypes.REQUESTED_REPOS_ERROR,
  };
}

export function focusSearchInput(): types.ActionType {
  return {
    type: actionsTypes.FOCUSED_SEARCH_INPUT,
  };
}

export function unfocusSearchInput(): types.ActionType {
  return {
    type: actionsTypes.UNFOCUSED_SEARCH_INPUT,
  };
}
