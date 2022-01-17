import React from "react";
import s from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageText} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.dialog.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messeges = props.dialogsPage.message.map(m => <Message message={m.message} id={m.id}/>)
    let newElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onChangeNewMessage = () => {
        let text = newElement.current.value
        let action = updateNewMessageText(text);
        props.dispatch(action)
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogs}
            <div className={s.messages}>
                {messeges}
                <div>
                    <textarea ref={newElement} onChange={onChangeNewMessage}
                              value={props.dialogsPage.newMessage}/>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    </div>)
}
export default Dialogs;
