import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {DialogReduxForm} from "./DialogsForm";

const Dialogs = (props) => {
    let dialogs = props.dialog.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>)
    let messages = props.message.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let onSubmit = (formData) => {
        props.addMessage(formData.newMessage);
    }
    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogs}
            <div className={s.messages}>
                {messages}
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    </div>)
}
export default Dialogs;
