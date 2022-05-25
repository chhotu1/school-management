import React, { useEffect, useState } from 'react'
import { Country, State, City } from 'country-state-city';
import { useDispatch } from 'react-redux';
import { inputChange } from '../../../redux/reducers/StudentReducer';
const className = ['one', 'two', 'three'];
const Studentform = (props) => {
    const { handleChange, student } = props;
    const [countries, setCountry] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCity] = useState([]);
    const [countryCode, setCountryCode] = useState('IN')
    const dispatch = useDispatch();


    useEffect(() => {
        getCountry();
    }, [])

    const getCountry = () => {
        setCountry(Country.getAllCountries())

    }

    const getState = (e) => {
        const { value, name } = e.target;
        // console.log('value',Country.getCountryByCode(value).name)
        dispatch(inputChange({ ['country']: Country.getCountryByCode(value).name }));
        setCountryCode(value)
        setStates(State.getStatesOfCountry(value))
    }

    const getCity = (e) => {
        const { value, name } = e.target;
        // console.log('state name',State.getStateByCodeAndCountry(value,countryCode).name)
        setCity(City.getCitiesOfState(countryCode, value));
        dispatch(inputChange({ ['state']: State.getStateByCodeAndCountry(value, countryCode).name }));
    }

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
                            {className && className ? (
                                className.map((item, index) => {
                                    return (
                                        <option key={index} value={item} onChange={() => { }}>{item}</option>
                                    )
                                })
                            ) : null}
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
                        <input className="form-control" type="file" id="formFile"/>
                    </div>


                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">Father Name</label>
                        <input type="text" className="form-control" placeholder="Father Name" name="father_name" onChange={handleChange} value={student.father_name ? student.father_name : ''} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Father Phone</label>
                        <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={handleChange} value={student.phone ? student.phone : ''} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Father Email</label>
                        <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={handleChange} value={student.email ? student.email : ''} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Father occupation</label>
                        <input type="text" className="form-control" placeholder="Father Name" name="occupation" onChange={handleChange} value={student.occupation ? student.occupation : ''} />
                    </div>

                </div>
            </div>
            <p className="h3">Current Address</p>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">Country</label>
                        <select className="form-select" aria-label="Default select example" onChange={getState} >
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
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label className="form-label">State</label>
                        <select className="form-select" aria-label="Default select example" onChange={getCity}>
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
                        <input type="text" className="form-control" placeholder="Pincode" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Studentform
