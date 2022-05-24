import {DialogType, MessageType} from "../types/Types";

const ADD_MESSAGE = "ADD-MESSAGE";
type AddMessageActionCreator = {
    type: typeof ADD_MESSAGE
    newMessage
}
export const addMessage = (newMessage: string): AddMessageActionCreator => ({type: ADD_MESSAGE, newMessage});
type InitialStateType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
}

let initialState: InitialStateType = {
    dialog: [{id: 1, name: 'Arthur'}, {id: 2, name: 'Alan'}, {id: 3, name: 'Alex'}],
    message: [{id: 1, message: 'Hello'}, {id: 2, message: 'Yo'}, {id: 3, message: 'Чё как?'}],
};

const dialogsReducer = (state = initialState, action: AddMessageActionCreator) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, {id: 5, message: action.newMessage}]
            };
        default :
            return state;
    }
};

export default dialogsReducer;