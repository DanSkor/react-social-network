import React from "react";
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span className={style.statusText} onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                }
                {this.state.editMode &&
                    <input className={style.statusInput} value={this.props.status} onBlur={this.deactivateMode} autoFocus={true}></input>
                }
            </div>
        )
    }
}

export default ProfileStatus;
