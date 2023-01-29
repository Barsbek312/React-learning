import React from 'react';
import { setAuthUserToState } from '../../redux/auth-reducer';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserToState();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setAuthUserToState
})(HeaderContainer);