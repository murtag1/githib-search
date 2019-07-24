import './scss/main.scss';

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GithubSearch from './components/GithubSearch/GithubSearch';

ReactDOM.render(<Provider store={store} ><GithubSearch /></Provider>, document.getElementById('root'));
