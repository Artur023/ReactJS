import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer.tsx";
import dialogsReducer from "./dialogsReducer.tsx";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer.tsx";
import authReducer from "./authReducer.tsx";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./appReducer.tsx";

let reducers = combineReducers({
    postsPage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

window.__store__ = store;

export default store;