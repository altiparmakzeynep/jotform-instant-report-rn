import {
    FETCH_TEAM_CATEGORIES,
    SEND_SUBMISSION,
    FETCH_SUBMISSIONS,
} from '../actions/action';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const INITIAL_STATE = {
    qid: "",
    optionsArray: [],
    tempArray: [],
    longTextValue: "",
    // submissions: [],
    // teamCategoriesValue:  ,
    colorArray: ['#FF6100', '#FFB629', '#0099FF', '#B64DD8'],
    currentColor: "",
    selectedSubmission: [], 
     
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
           const optionsArray = action.payload.data.content.options
           const tempArray = optionsArray.split("|")
           const teamCategoriesValue = tempArray.map((title, index) => {
               return({
                   title, color: state.colorArray[index % state.colorArray.length]
               })
            }) 
            return{
                ...state, 
                tempArray,
                teamCategoriesValue
            }
        case SEND_SUBMISSION:
            return{
                ...state,
            }
        case FETCH_SUBMISSIONS:
            const submissions = action.payload.data.content;
            return{
                ...state,
                submissions
            }
        default:
            return state;
    }
}
export default persistReducer(persistConfig, mainReducer);