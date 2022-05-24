import {getAuthUserData} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxStore";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: InitializedSuccessActionCreator) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default :
            return state;
    }
};
type InitializedSuccessActionCreator = {
    type: typeof INITIALIZED_SUCCESS
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, InitializedSuccessActionCreator>

export const initializedSuccess = (): InitializedSuccessActionCreator => ({type: INITIALIZED_SUCCESS});

export const initializeApp = (): ThunkType => async (dispatch) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializedSuccess())
        })
}


export default appReducer