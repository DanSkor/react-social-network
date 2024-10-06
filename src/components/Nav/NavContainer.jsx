import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';

// const NavContainer = () => {
//     return <StoreContext.Consumer>
//         {store => {
//             return <Nav state={store} />
//         }
//         }
//     </StoreContext.Consumer>
// }



let mapStateToProps = (state) => {
    return {
        state: state.navBar,
    }
}

let mapDispatchToProps = (dispatch) => {
    return  {}
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)

export default NavContainer;