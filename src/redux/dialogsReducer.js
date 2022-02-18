const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessage = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

let initialState = {
    dialog: [{id: 1, name: 'Arthur'}, {id: 2, name: 'Alan'}, {id: 3, name: 'Alex'}],
    message: [{id: 1, message: 'Hello'}, {id: 2, message: 'Yo'}, {id: 3, message: 'Чё как?'}],
    newMessage: ""
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, {id: 5, message: state.newMessage}], newMessage: ""
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newText
            };
        default :
            return state;
    }
};

export default dialogsReducer;