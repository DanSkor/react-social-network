import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import { getAuthData } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        getAuthData().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
})


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
