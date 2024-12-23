// import style from './Profile.module.css';
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, savePhoto, updateStatus } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedierct } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount () {
       this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId)
        this.refreshProfile();
    }

    render () {
        return(
            <div>
                <Profile {...this.props} 
                            profile={this.props.profile} 
                            status={this.props.status} 
                            updateStatus={this.props.updateStatus} 
                            isOwner={!this.props.router.params.userId}
                            savePhoto={this.props.savePhoto}/>
            </div >
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return(
            <Component {...props} router={{location, navigate, params}}/>
        )
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto} ),
    withRouter,
    withAuthRedierct
)(ProfileContainer)

