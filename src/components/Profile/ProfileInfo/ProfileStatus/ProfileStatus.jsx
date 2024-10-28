import React from "react";
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (evt) => {
        this.setState({
            status: evt.currentTarget.value,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <span className={style.statusText} onClick={this.activateEditMode}>{this.props.status || 'Hi all!'}</span>
                }
                {this.state.editMode &&
                    <input className={style.statusInput} onChange={this.onStatusChange} value={this.state.status} onBlur={this.deactivateMode} autoFocus={true}></input>
                }
            </div>
        )
    }
}

export default ProfileStatus;
