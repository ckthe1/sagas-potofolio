import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { takeEvery, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';


function* fetchProject(){
    console.log('fetchProject was hit');
    try {
        const projectResponse = yield axios.get('/portfolio');
        yield dispatch({ type: 'SET_PROJECTS', payload: projectResponse.data })
    } catch (error) {
        console.log('this was an error with the fetch- probably your fault');
    }
}

function* postProject(action) {
    try {
        yield axios.post('/portfolio', action.payload);
        yield dispatch({ type: 'FETCH_PROJECTS' });
    } catch (error) {
        console.log('this was an error with the post- probably your fault');

    }
} //end postProject


function* deleteProject(action) {
    try {
        console.log('delete project hit', action)

        yield axios({
            method: 'DELETE',
            url: `/portfolio` + action.payload,
        });
        yield dispatch({ type: 'FETCH_PROJECTS' })
    } catch (error) {
        console.log('Failed in deleteProject', error)
    }
}// end deleteProject

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECT', fetchProject);
    yield takeEvery('POST_PROJECT', postProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
