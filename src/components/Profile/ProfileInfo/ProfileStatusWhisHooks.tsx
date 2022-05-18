import React, {ChangeEvent, FC, useEffect, useState} from 'react';
// @ts-ignore
import s from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner?: any
}

const ProfileStatusWithHook: FC<PropsType> = props => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return <div>
        {!editMode &&
            <div>
                <b className={s.status}>Status:</b> <span
                onDoubleClick={props.isOwner && activateEditMode}>{status || "no status"}</span>
            </div>
        }
        {editMode
            ? <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            : null
        }
    </div>

}
export default ProfileStatusWithHook;