import React from "react";
import MainContent from "./Profile";
import axios from "axios";
import { setUserProfile } from "../../redux/reduce-profile";
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 27534;
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(res => {
                this.props.setUserProfile(res.data)
            }
            )

    }

    render() {
        return (
            <MainContent {...this.props} profile={this.props.profile} />
        )
    };

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
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

let withUrlDataContaineComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContaineComponent);