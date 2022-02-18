import React from "react";
import {addMessage, updateNewMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        newMessage: state.dialogsPage.newMessage
    }
}
export default connect(mapStateToProps, {addMessage, updateNewMessage})(Dialogs);


