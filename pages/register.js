import { useEffect, useState } from 'react';
import Image from 'next/image';
import Router from 'next/router'
import { toast } from 'react-toastify';
import Helpers from '../src/Helpers';
import { Breadcrumb } from '../src/web-app/components';
import { buttonSpinner, isNumber } from '../src/Share/CommonFunction';
import { connect } from 'react-redux';
import { setAuthDefaults } from '../src/redux/actions/AuthActions';
const Register = (props) => {
    useEffect(() => {
        props.setAuthDefaults();
        if (typeof window !== "undefined") {
            if (localStorage.getItem("ClientAccessToken")) {
              let token = Helpers.StorageService.getAccessToken();
              if(token && token!==null)
              Router.push("/");
            }
        }
    }, [])
    const initialForm = {
        email: '',
        password: '',
        phone:'',
        name:''
    }
    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState(initialForm);
    const [isSpinner, setIsSpinner] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        setFormErrors({ ...formErrors, [name]: Helpers.Forms.registerForm(name, value) })
    }

    /**
     * Login form submit
     * @param Email and Password are required fields.
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const formObject = Helpers.Forms.validateForm(
            form,
            formErrors,
            Helpers.Forms.registerForm
        );
        if (Object.keys(formObject).length !== 0) {
            setFormErrors({ ...formErrors, ...formObject });
            return false;
        }
        setIsSpinner(true)
        Helpers.AuthServices.register(form)
            .then((response) => {
                // setIsSpinner(false)
                if (response.data.status === true) {
                    props.setAuthDefaults();
                    toast.success("Register Succssfuly", {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                    });
                    Helpers.StorageService.setAccessToken(response.data.token);
                    Router.push('/user/dashboard');
                } else {
                    setIsSpinner(false)
                    toast.error(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                    });
                }
            })
            .catch(function (error) {
                setIsSpinner(false)
                if (error.response) {
                    toast.error(error.response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                    });
                }
            });
    }
    return (
        <>
            <Breadcrumb page="Register" />
            <div className="container mt-4">
                <div className='row'>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" onChange={handleChange} name="name" />
                                {formErrors.name ? ( <div className="error">{formErrors.name}</div> ) : null}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" placeholder="Phone" onChange={handleChange} name="phone" maxLength={10} onKeyUp={isNumber} />
                                {formErrors.phone ? ( <div className="error">{formErrors.phone}</div> ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange} name="email" />
                                {formErrors.email ? ( <div className="error">{formErrors.email}</div> ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="********" onChange={handleChange} name="password" />
                                {formErrors.email ? (<div className="error">{formErrors.password}</div>) : null}
                            </div>
                            {isSpinner?( <button className='btn btn-success' type="button">{buttonSpinner(isSpinner)}</button>): <button className='btn btn-success' type="submit">Login</button>}
                        
                            
                        </form>

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