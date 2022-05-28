import React from 'react'
import withAuth from '../../src/Share/withAuth';
import { connect } from 'react-redux';
import { setAuthDefaults } from '../../src/redux/actions/AuthActions';
import { setUserDefaults, currentUser } from '../../src/redux/actions/UserActions';
class User extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setAuthDefaults();
        this.props.setUserDefaults();
        this.props.currentUser();
    }
    render() {
        return (
            <p>dasboard</p>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthDefaults: () => dispatch(setAuthDefaults()),
        setUserDefaults: () => dispatch(setUserDefaults()),
        currentUser: () => dispatch(currentUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(User));