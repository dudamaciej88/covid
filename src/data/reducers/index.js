import {combineReducers} from 'redux';

import stats from './stats.reducer';

const rootReducer = combineReducers({
    stats,
})

export default rootReducer;