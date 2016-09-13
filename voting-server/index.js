/**
 * Created by Jeff on 9/12/2016.
 */
import makeStore from './src/store';
import {startServer} from './src/server';

export const store = makeStore();
startServer(store);

console.log("fdsfsd")

store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});