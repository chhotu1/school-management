import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Breadcrumb } from './../src/web-app/components';
import { setAuthDefaults } from '../src/redux/actions/AuthActions';

const Contact = (props) => {
  useEffect(()=>{
      props.setAuthDefaults()
  },[])
  return (
    <>
    <Breadcrumb page="Contact"/>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
		setAuthDefaults: () => dispatch(setAuthDefaults()),
	};
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Contact);
