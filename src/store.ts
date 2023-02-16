import { applyMiddleware, createStore, compose } from 'redux';
import reducer, { initialState } from './redux/reducer';
import thunk from 'redux-thunk';

interface WindowWithReduxExtension extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R;
}

const configureStore = () => {
  const composeEnhancers =
    (window as WindowWithReduxExtension).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;

  const enhancers = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(reducer, initialState, enhancers);

  return store;
};

const store = configureStore();
const rootState = store.getState();

export type RootState = typeof rootState;

export default store;
