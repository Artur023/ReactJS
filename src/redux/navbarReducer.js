let initialState = {
    tops: [
        {topic: "Profile", to: "/profile"},
        {topic: "Messages", to: "/dialogs"},
        {topic: "News", to: "/news"},
        {topic: "Music", to: "/music"},
        {topic: "Settings", to: "/settings"},
        {topic: "Users", to: "/users"}
    ]
};
const navbarReducer = (state = initialState, action) => {

    return state;
}

export default navbarReducer;