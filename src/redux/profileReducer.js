const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

let initialState = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: '15'}, {
        id: 2, message: 'Hello, go to cs', likesCount: '20'
    },],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                "id": 5,
                "message": state.newPostText,
                "likesCount": 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newText
            }
        default :
            return state;
    }
};
export default profileReducer;