import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer, {AppState} from './index';

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__'];

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const configureStore = (preLoadedState: AppState) => {
    const store = createStore(
        rootReducer,
        preLoadedState,
        composedEnhancers
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./index', () => {
            const nextRootReducer = require('./index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;