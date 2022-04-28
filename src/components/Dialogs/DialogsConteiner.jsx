import React from "react";
import {addMessage} from "../../redux/dialogsReducer.tsx";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        newMessage: state.dialogsPage.newMessage,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(Dialogs)