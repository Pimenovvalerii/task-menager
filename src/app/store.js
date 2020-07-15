import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';

import { rootReducer } from './rootReducer';
import { initMiddleware } from './initMiddleware';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore( 
    rootReducer, 
    applyMiddleware(
        sagaMiddleware,
        initMiddleware
    ) 
);

sagaMiddleware.run(rootSaga);