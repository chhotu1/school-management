import React from 'react'
import { Country, State, City } from 'country-state-city';
import { Form } from 'react-bootstrap'
const className = ['one', 'two', 'three'];
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
            countryCode: 'IN',
        }
        this.getState = this.getState.bind(this);
        this.getCity = this.getCity.bind(this);
    }

    componentDidMount() {
        this.getCountry();
    }

    getCountry() {
        this.setState({ countries: Country.getAllCountries() })
    }

    getState(e) {
        const { value, name } = e.target;
        this.props.countryhandleChange('country', Country.getCountryByCode(value).name)
        this.setState({ countryCode: value });
        this.setState({ states: State.getStatesOfCountry(value) })
    }

    getCity(e) {
        const { value, name } = e.target;
        this.setState({ cities: City.getCitiesOfState(this.state.countryCode, value) })
        this.props.countryhandleChange('state', State.getStateByCodeAndCountry(value, this.state.countryCode).name)
    }

    render() {
        const { handleChange, user, formErrors } = this.props;
        const { countries, cities, states } = this.state;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} value={user.name ? user.name : ''} />
                            {formErrors?.name ? (<div className="error">{formErrors?.name}</div>) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={handleChange} value={user.password ? user.password : ''} />
                            {formErrors?.password ? (<div className="error">{formErrors?.password}</div>) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" onChange={handleChange} name="gender" >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Famel</option>
                            </select>
                            {formErrors?.gender ? (<div className="error">{formErrors?.gender}</div>) : null}
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={handleChange} value={user.phone ? user.phone : ''} />
                            {formErrors?.phone ? (<div className="error">{formErrors?.phone}</div>) : null}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={handleChange} value={user.email ? user.email : ''} />
                            {formErrors?.email ? (<div className="error">{formErrors?.email}</div>) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role</label>
                            <Form.Select aria-label="Default select example" onChange={handleChange} name="role">
                                <option>Open this select menu</option>
                                <option value="1">Admin</option>
                                <option value="2">Teacher</option>
                                <option value="3">Student</option>
                            </Form.Select>
                            {formErrors?.role ? (<div className="error">{formErrors?.role}</div>) : null}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Forms
