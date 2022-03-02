const ADD_MESSAGE = "ADD-MESSAGE";

export const addMessage = (newMessage) => ({type: ADD_MESSAGE, newMessage});

let initialState = {
    dialog: [{id: 1, name: 'Arthur'}, {id: 2, name: 'Alan'}, {id: 3, name: 'Alex'}],
    message: [{id: 1, message: 'Hello'}, {id: 2, message: 'Yo'}, {id: 3, message: 'Чё как?'}],
};

const dialogsReducer = (state = initialState, action) => {

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