import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/searchReposActions';
import * as types from '../types';

function sortReposList(reposList: types.FullReposType[]): types.RepoInfoType[] {
  return reposList.map(item => ({
    name: item.name,
    stars: item.stargazers_count,
    watchers: item.watchers_count,
    url: item.html_url,
  }));
}

function* fetchReposAsync(action: types.ActionType) {
  try {
    yield put(actions.requestReposAsync());
    const repos = yield call(async () => {
      const res = await fetch(`https://api.github.com/search/repositories?q=${action.reposName}`);
      return res.json();
    });
    if (!repos) throw new Error('error');
    const reposList = sortReposList(repos.items);
    yield put(actions.requestReposSuccess(reposList));
  } catch (error) {
    yield put(actions.requestReposError());
  }
}

function* watchRequestRepos() {
  yield takeLatest('REQUESTED_REPOS', fetchReposAsync);
}

export default watchRequestRepos;
