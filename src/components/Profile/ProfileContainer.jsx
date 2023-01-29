import React from "react";
import MainContent from "./Profile";
import { getAndSetUserProfile, getStatus, updateStatus } from "../../redux/reduce-profile";
import { connect } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 27534;
        }
        this.props.getAndSetUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {

        if(!this.props.isAuth) {
            return <Navigate to="/login"/>    
        }

        return (
            <MainContent {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    };

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status : state.profilePage.status,
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(connect(mapStateToProps, {
    getAndSetUserProfile, getStatus, updateStatus
}), withRouter, withAuthRedirect)(ProfileContainer);