const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export let addPost = () => ({type: ADD_POST});
export let updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

let initialState = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: '15'}, {
        id: 2, message: 'Hello, go to cs', likesCount: '20'
    },],
    newPostText: "",
    profile: null
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
        case  SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default :
            return state;
    }
};
export default profileReducer;