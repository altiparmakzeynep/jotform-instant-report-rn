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
    submissions: [],
    // colorArray: ['#98ddca', '#d5ecc2', '#ffd3b4', '#ffaaa7', '#b5cda3', '#f6ae99', '#dbc6eb', '#f4f75c', '#cff6cf', '#ecdfc8'],
    deneme: {title: ""}
}  
const persistConfig = {
    key: 'root',
    storage: AsyncStorage, 
    whitelist: [],
    blacklist: ['authButtonSpinner', 'authSpinnerStatus'] 
};
const mainReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_TEAM_CATEGORIES:
            state.optionsArray = action.payload.data.content.options
            state.teamCategoriesValue = state.optionsArray.split("|")
            // state.teamCategoriesValue.map((item) => state.deneme.title = [...state.deneme,item])
            return{
                ...state,
            }
        case SEND_SUBMISSION:
            return{
                ...state,
            }
        case FETCH_SUBMISSIONS:
            return{
                ...state,
                submissions: action.payload.data.content
            }
            default:
                return state;
    }
}
export default persistReducer(persistConfig, mainReducer);