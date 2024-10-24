// import style from './Profile.module.css';
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedierct } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount () {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 31761;
        }

        this.props.getProfile(userId);
    }

    render () {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div >
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
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
    connect(mapStateToProps, {getProfile} ),
    withRouter,
    withAuthRedierct
)(ProfileContainer)

