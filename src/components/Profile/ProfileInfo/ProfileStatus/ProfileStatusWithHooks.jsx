import React, { useEffect, useState } from "react";
import style from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
 
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onStatusChange = (evt) => {
        setStatus(evt.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <span className={style.statusText} onClick={activateEditMode}>{props.status || 'Hi all!'}</span>
            }
            {editMode &&
                <input className={style.statusInput} onBlur={deactivateMode} onChange={onStatusChange} value={status} autoFocus={true}></input>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
