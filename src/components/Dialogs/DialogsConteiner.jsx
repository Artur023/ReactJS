import React from "react";
import {addMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {

    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        newMessage: state.dialogsPage.newMessage,
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs);

export default connect(mapStateToProps, {addMessage, updateNewMessage})(AuthRedirectComponent);


