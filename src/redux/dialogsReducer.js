const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessage,
            };
            state.message.push(newMessage)
            state.newMessage = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newText;
        default :
            return state;
    }
};

export default dialogsReducer;