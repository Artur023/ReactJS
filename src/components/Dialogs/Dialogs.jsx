import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = props.dialog.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>)
    let messages = props.message.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newElement = React.createRef();

    let onAddMessage = () => {
        props.addMessageActionCreator();
    }

    let onChangeNewMessage = () => {
        let text = newElement.current.value
        props.updateNewMessageText(text);
    }

    return (<div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogs}
            <div className={s.messages}>
                {messages}
                <div>
                    <textarea ref={newElement}
                              onChange={onChangeNewMessage}
                              value={props.newMessage}
                              placeholder="Enter your message"
                    />
                    <button onClick={onAddMessage}>add message</button>
                </div>
            </div>
        </div>
    </div>)
}
export default Dialogs;
