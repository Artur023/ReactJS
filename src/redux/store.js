import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let store = {

    _state: {
        dialogsPage: {
            dialog: [{id: 1, name: 'Arthur'}, {id: 2, name: 'Alan'}, {id: 3, name: 'Alex'}],
            message: [{id: 1, message: 'Hello'}, {id: 2, message: 'Yo'}, {id: 3, message: 'Чё как?'}],
            newMessage: ""
        },
        postsPage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: '15'}, {
                id: 2, message: 'Hello, go to cs', likesCount: '20'
            },],
            newPostText: ""
        },
        navBar: {
            tops: [{topic: "Profile", to: "/profile"}, {topic: "Messages", to: "/dialogs"}, {
                topic: "News", to: "/news"
            }, {topic: "Music", to: "/music"}, {topic: "Settings", to: "/settings"}]
        }

    }, _callSubscriber() {
        console.log("Change")
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    }
};

window.state = store;

export default store;