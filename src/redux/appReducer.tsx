import {getAuthUserData} from "./authReducer.tsx";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

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
export const initializedSuccess = (): InitializedSuccessActionCreator => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch) => {
    dispatch(getAuthUserData())
        .then(() => {
            dispatch(initializedSuccess())
        })
}


export default appReducer