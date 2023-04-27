import React, {useEffect} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import profileInfoCss from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    
    const statusOnChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Default'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={statusOnChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;