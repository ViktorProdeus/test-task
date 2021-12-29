import { combineReducers, createStore } from 'redux';
import { reducer } from './reducer';


const rootReducer = combineReducers({
    main: reducer,
});

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState') as string)
    : {};

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});


// @ts-ignore
window.store = store;