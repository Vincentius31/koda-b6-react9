import { combineReducers } from "redux";
import surveyReducer from "./surveyReducer";

const rootReducer = combineReducers({
    surveyResults: surveyReducer
});

export default rootReducer;