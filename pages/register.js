import Image from "next/image";
import { Breadcrumb } from '../src/web-app/components';
import Helpers from "../src/Helpers";
import withAuth from "../src/Share/withAuth";
import { connect } from 'react-redux';
import { setAuthDefaults } from '../src/redux/actions/AuthActions';
import { useEffect } from "react";
const Register = (props) => {
    useEffect(()=>{
        props.setAuthDefaults();
    },[])
    return (
        <>
            <Breadcrumb page="Register" />
            <div className="container mt-4">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className="form-control" id="phone" placeholder="Phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="********" />
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <Image
                            src={Helpers.Images.bradcome}
                            alt="Picture of the author"
                            height={880}
                            className="d-block w-100"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);