import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { applyMiddleware, Action, AnyAction, DeepPartial, Store } from 'redux';

const logger = process.env.NODE_ENV === 'production' ? [] : [createLogger()];
export const storeMiddleware = applyMiddleware(thunk, ...logger);
