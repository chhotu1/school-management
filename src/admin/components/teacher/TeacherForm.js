import React from 'react'
import { Country, State, City } from 'country-state-city';
const className = ['one', 'two', 'three'];
class TeacherForm extends React.Component {
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
        const { handleChange, student } = this.props;
        const {countries,cities ,states} = this.state;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} value={student.name ? student.name : ''} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" placeholder="12/03/2020" name="dob" onChange={handleChange} value={student.dob ? student.dob : ''} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Class</label>
                            <select className="form-select" onChange={handleChange} name="class" >
                                <option>Select Class</option>
                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" onChange={handleChange} name="gender" >
                                <option>Select Gender</option>
                                <option>Male</option>
                                <option>Famel</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Student Photo</label>
                            <input className="form-control" type="file" id="photo" name="photo" accept='image/*'  onChange={handleChange}/>
                        </div>
    
    
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Father Name</label>
                            <input type="text" className="form-control" placeholder="Father Name" name="father_name" onChange={handleChange} value={student.father_name ? student.father_name : ''} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Father Phone</label>
                            <input type="text" className="form-control" placeholder="Phone" name="father_mobile" onChange={handleChange} value={student.father_mobile ? student.father_mobile : ''} />
                        </div>
    
                        <div className="mb-3">
                            <label className="form-label">Father Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={handleChange} value={student.email ? student.email : ''} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Father occupation</label>
                            <input type="text" className="form-control" placeholder="Father occupation" name="occupation" onChange={handleChange} value={student.occupation ? student.occupation : ''} />
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
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" placeholder="Address" name="address" onChange={handleChange} value={student.address ? student.address : ''} />
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
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Pincode</label>
                            <input type="text" className="form-control" placeholder="Pincode" onChange={handleChange} name="pincode" value={student.pincode ? student.pincode : ''} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherForm
