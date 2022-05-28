import React, { useEffect } from 'react'
import Link from 'next/link';
import { connect } from 'react-redux';
import { Navbar, Nav,Button } from 'react-bootstrap';
import { ToastContainer } from "react-toastify";
import Helpers from '../../Helpers';
import { setAuthDefaults } from '../../redux/actions/AuthActions';
import  Router  from 'next/router';
const Header = (props) => {
	useEffect(()=>{
		let token =Helpers.StorageService.getAccessToken();
		props.setAuthDefaults();
		console.log('===============',props.auth.isToken)
	},[props.auth.isToken])
	const logOut=()=>{
		localStorage.clear();
		props.setAuthDefaults();
		Router.push('/login')
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
					
					<Button variant="outline-success" type="button" onClick={logOut}>Search</Button>
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
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
		setAuthDefaults: () => dispatch(setAuthDefaults()),
	};
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
