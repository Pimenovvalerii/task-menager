
import { initData } from './actions';

export const initMiddleware = ({dispatch}) => {

    setTimeout( () => dispatch(initData()) ,0);

    return (next) => (action) => next(action)   
}