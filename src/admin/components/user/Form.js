import React from 'react'
import { Country, State, City } from 'country-state-city';
const className = ['one', 'two', 'three'];
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            countries:[],
            states:[],
            cities:[],
            countryCode:'IN',
        }
        this.getState=this.getState.bind(this);
        this.getCity=this.getCity.bind(this);
    }

    componentDidMount(){
        this.getCountry();
    }

    getCountry (){
        this.setState({countries:Country.getAllCountries()})
    }
    
    getState(e){
        const { value, name } = e.target;
        this.props.countryhandleChange('country', Country.getCountryByCode(value).name)
        this.setState({countryCode:value});
        this.setState({states:State.getStatesOfCountry(value)})
    }

    getCity(e){
        const { value, name } = e.target;
        this.setState({cities:City.getCitiesOfState(this.state.countryCode, value)})
        this.props.countryhandleChange('state', State.getStateByCodeAndCountry(value, this.state.countryCode).name)
    }

    render(){
        const { handleChange, user,formErrors } = this.props;
        const {countries,cities ,states} = this.state;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} value={user.name ? user.name : ''} />
                            {formErrors?.name ? ( <div className="error">{formErrors?.name}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" placeholder="12/03/2020" name="dob" onChange={handleChange} value={user.dob ? user.dob : ''} />
                            {formErrors?.dob ? ( <div className="error">{formErrors?.dob}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Qualification</label>

                            <input type="text" className="form-control" placeholder="qualification" name="qualification" onChange={handleChange} value={user.qualification ? user.qualification : ''} />
                            {formErrors?.qualification ? ( <div className="error">{formErrors?.qualification}</div> ) : null}
                        </div>
                       
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" onChange={handleChange} name="gender" >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Famel</option>
                            </select>
                            {formErrors?.gender ? ( <div className="error">{formErrors?.gender}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">user Photo</label>
                            <input className="form-control" type="file" id="photo" name="photo" accept='image/*'  onChange={handleChange}/>
                        </div>
    
    
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Father Name</label>
                            <input type="text" className="form-control" placeholder="Father Name" name="father" onChange={handleChange} value={user.father ? user.father : ''} />
                            {formErrors?.father ? ( <div className="error">{formErrors?.father}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={handleChange} value={user.phone ? user.phone : ''} />
                            {formErrors?.phone ? ( <div className="error">{formErrors?.phone}</div> ) : null}
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={handleChange} value={user.email ? user.email : ''} />
                            {formErrors?.email ? ( <div className="error">{formErrors?.email}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Experience</label>
                            <select className="form-select" onChange={handleChange} name="experience" >
                                <option>Select Qualification</option>
                                <option>1 years</option>
                                <option>1.5 years</option>
                                <option>2 years</option>
                                <option>2.5 years</option>
                                <option>3 years</option>
                                
                            </select>
                            {formErrors?.qualification ? ( <div className="error">{formErrors?.qualification}</div> ) : null}
                        </div>
                        
    
                    </div>
                </div>
                <p className="h3">Current Address</p>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Country</label>
                            <select className="form-select" aria-label="Default select example" onChange={this.getState} >
                                <option>Select Country</option>
                                {countries && countries ? (
                                    countries.map((item, index) => {
                                        return (
                                            <option key={index} value={item.isoCode} onChange={() => { }}>{item.name}</option>
                                        )
                                    })
                                ) : null}
                            </select>
                            {formErrors?.country ? ( <div className="error">{formErrors?.country}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <select className="form-select" aria-label="Default select example" name="city" onChange={handleChange}>
                                <option>Select City</option>
                                {cities && cities ? (
                                    cities.map((item, index) => {
                                        return (
                                            <option key={index} value={item.name} onChange={() => { }}>{item.name}</option>
                                        )
                                    })
                                ) : null}
                            </select>
                            {formErrors?.city ? ( <div className="error">{formErrors?.city}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleChange} value={user.address ? user.address : ''} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <select className="form-select" aria-label="Default select example" onChange={this.getCity}>
                                <option>Select State</option>
                                {states && states ? (
                                    states.map((item, index) => {
                                        return (
                                            <option key={index} value={item.isoCode} onChange={() => { }}>{item.name}</option>
                                        )
                                    })
                                ) : null}
                            </select>
                            {formErrors?.state ? ( <div className="error">{formErrors?.state}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pincode</label>
                            <input type="text" className="form-control" placeholder="Pincode" onChange={handleChange} name="pincode" value={user.pincode ? user.pincode : ''} />
                            {formErrors?.pincode ? ( <div className="error">{formErrors?.pincode}</div> ) : null}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
