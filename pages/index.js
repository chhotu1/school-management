
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { SliderImages } from '../src/web-app/components'
import { setAuthDefaults } from '../src/redux/actions/AuthActions';
import { setUserDefaults, currentUser } from '../src/redux/actions/UserActions';

const Index = (props) => {
  useEffect(() => {
    props.setAuthDefaults();
    props.setUserDefaults();
    props.currentUser();
  }, [])
  return (
    <>
      <SliderImages />
    </>

  );
}



const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthDefaults: () => dispatch(setAuthDefaults()),
    setUserDefaults: () => dispatch(setUserDefaults()),
    currentUser: () => dispatch(currentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
