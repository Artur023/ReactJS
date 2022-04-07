import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

const ProfileStatusWithHook = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return <div>
        {!editMode &&
            <div>
                <b className={s.status}>Status:</b> <span onDoubleClick={activateEditMode}>{status || "no status"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
        }
    </div>

}
export default ProfileStatusWithHook;