import axios from 'axios';
import { API_BASE, FORM_ID, API_KEY } from '../components/config/env';

export const FETCH_TEAM_CATEGORIES      = 'fetch_team_categories';
export const SEND_SUBMISSION            = 'send_submission';
export const FETCH_SUBMISSIONS          = 'fetch_submissions';

export const fetchTeamCategories = (item) => {
    return dispatch => {
        axios({
            url: `${API_BASE}/form/${FORM_ID}/question/5?apiKey=${API_KEY}`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_TEAM_CATEGORIES,
                payload: {data: result.data , qid: item}
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }
}
export const fetchSubmissions = () => {
    return dispatch => {
        axios({
            url: `${API_BASE}/form/${FORM_ID}/submissions?apiKey=${API_KEY}`,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_SUBMISSIONS,
                payload: {data: result.data}
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }
}
export const sendSubmission = ( selectedTeam, longTextValue) => {
    var data = new URLSearchParams();
    data.append('submission[4]', longTextValue);
    data.append('submission[5]', selectedTeam);
    return dispatch => {
        axios({
            method: "POST",
            url: `${API_BASE}/form/${FORM_ID}/submissions?apiKey=${API_KEY}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: data
        }).then((result) => {
            dispatch({
                type: SEND_SUBMISSION,
                payload: result.data
            })
        }).catch((err) => {
            console.log("ERR",err.response)
        })
    }
}
