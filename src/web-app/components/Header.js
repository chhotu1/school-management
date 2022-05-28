import React, { useEffect } from 'react'
import Link from 'next/link';
import { connect } from 'react-redux';
import { Navbar, Nav,Button } from 'react-bootstrap';
import { ToastContainer } from "react-toastify";
import Helpers from '../../Helpers';
import { setAuthDefaults } from '../../redux/actions/AuthActions';
import { setUserDefaults, currentUser } from '../../redux/actions/UserActions';

import  Router  from 'next/router';
import { UserRole } from '../../Share/CommonFunction';
const Header = (props) => {
	useEffect(()=>{
		props.setAuthDefaults();

	},[props.auth.isToken])

	useEffect(()=>{
		props.setUserDefaults();
		props.currentUser();
	},[])
	
	const logOut=()=>{
		localStorage.clear();
		props.setAuthDefaults();
		Router.push('/login')
	}

	const gotoDashboard=()=>{
		let role = props.user.user.role;
		if(role===Helpers.Constant.ADMIN || role===Helpers.Constant.TEACHER){
			Router.push('/admin')
		}else{
			Router.push('/user/dashboard')
		}
	}
	return (
		<>
		<Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-2">
		<Link href='/' passHref>
			<Navbar.Brand>School Managements</Navbar.Brand>
		</Link>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="me-auto">
				<Link href='/about' passHref>
					<Nav.Link >About</Nav.Link>
				</Link>
				<Link href='/contact' passHref>
					<Nav.Link >Contact</Nav.Link>
				</Link>
			</Nav>
			{props.auth.isToken?(
				<Nav>
					<Button  variant="danger" type="button" onClick={logOut}>Logout</Button>
					<Button  variant="success" type="button" onClick={gotoDashboard} className="dashboard-left">Dashboard</Button>
				</Nav>
			):(
				<Nav>
				<Link href='/login' passHref>
					<Nav.Link >Login</Nav.Link>
				</Link>
				<Link href='/register' passHref>
					<Nav.Link >Register</Nav.Link>
				</Link>
			</Nav>
			)}
		
		</Navbar.Collapse>
	</Navbar>
	<ToastContainer />
	</>
	)
}


const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
		user:state.user
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
		setAuthDefaults: () => dispatch(setAuthDefaults()),
		setUserDefaults: () => dispatch(setUserDefaults()),
		currentUser: () => dispatch(currentUser()),
	};
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
