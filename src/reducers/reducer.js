import {
    FETCH_TEAM_CATEGORIES,
    SEND_SUBMISSION,
    FETCH_SUBMISSIONS
} from '../actions/action';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const INITIAL_STATE = {
    qid: "",
    optionsArray: [],
    teamCategoriesValue: [],
    longTextValue: "",
    submissions: []
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    blacklist: ['authButtonSpinner', 'authSpinnerStatus'] 
};
const teamCategoriesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_TEAM_CATEGORIES:
            state.optionsArray = action.payload.data.content.options
            state.teamCategoriesValue = state.optionsArray.split("|");
            return{
                ...state,
            }
        case SEND_SUBMISSION:
            return{
                ...state, 
            }
        case FETCH_SUBMISSIONS:
            action.payload.data.content.map((item) => item.status !== 'DELETED' ? 
             state.submissions.push(item) : 0); 
            return{
                ...state,
            }
            default:
                return state;
    }
}
export default persistReducer(persistConfig, reducer);