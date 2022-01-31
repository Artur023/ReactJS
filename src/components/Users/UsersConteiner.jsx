import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text));
        }
    }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;
