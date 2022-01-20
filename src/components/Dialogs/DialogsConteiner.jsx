import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsConteiner = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onChangeNewMessage = (text) => {
        let action = updateNewMessageText(text);
        props.store.dispatch(action)
    }

    return <Dialogs addMessageActionCreator={addMessage}
                    updateNewMessageText={onChangeNewMessage}
                    dialog={state.dialogsPage.dialog}
                    message={state.dialogsPage.message}
                    newMessage={state.dialogsPage.newMessage}/>
}
export default DialogsConteiner;
