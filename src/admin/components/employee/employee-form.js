import React, { useEffect, useState } from 'react'
import { Country, State, City }  from 'country-state-city';
import {useDispatch} from 'react-redux';
import { inputChange } from '../../../redux/reducers/UserReducer';

const EmployeeForm = (props) => {
    const {handleChange,user} = props;
    const [countries,setCountry] = useState([]);
    const [states,setStates] = useState([]);
    const [cities,setCity] = useState([]);
    const [countryCode,setCountryCode] = useState('IN')
    const dispatch = useDispatch();


    useEffect(()=>{
        getCountry();
    },[])

    const getCountry =()=>{
        setCountry(Country.getAllCountries())
        
    }

    const getState =(e)=>{
        const {value,name} = e.target;
        // console.log('value',Country.getCountryByCode(value).name)
        dispatch(inputChange({ ['country']: Country.getCountryByCode(value).name }));
        setCountryCode(value)
        setStates(State.getStatesOfCountry(value))
    }

    const getCity =(e)=>{
        const {value,name} = e.target;
        // console.log('state name',State.getStateByCodeAndCountry(value,countryCode).name)
        setCity(City.getCitiesOfState(countryCode,value));
        dispatch(inputChange({ ['state']: State.getStateByCodeAndCountry(value,countryCode).name }));
    }
    
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} value={user.name?user.name:''}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={handleChange} value={user.phone?user.phone:''} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="*********" name="password" onChange={handleChange} value={user.password?user.password:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Experience</label>
                        <input type="text" className="form-control" placeholder="Experience" name="experience" onChange={handleChange} value={user.experience?user.experience:''}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Father Name</label>
                        <input type="text" className="form-control" placeholder="Father Name" name="father" onChange={handleChange} value={user.father?user.father:''} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={handleChange} value={user.email?user.email:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" placeholder="12/03/2020" name="dob" onChange={handleChange} value={user.dob?user.dob:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Date Of Joing</label>
                        <input type="date" className="form-control" placeholder="12/03/2020" min="2022-06-04" name="doj" onChange={handleChange} value={user.doj?user.doj:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Qualification</label>
                        <input type="text" className="form-control" placeholder="Qualification" name="qualification" onChange={handleChange} value={user.qualification?user.qualification:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Father Phone</label>
                        <input type="text" className="form-control" placeholder="Father Phone" />
                    </div>
                </div>
            </div>
            <p className="h3">Current Address</p>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                        <select className="form-select" aria-label="Default select example" onChange={getState} >
                            <option>Select Country</option>
                            {countries && countries?(
                                countries.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.isoCode} onChange={()=>{}}>{item.name}</option>
                                    )
                                })
                            ):null}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                        <select className="form-select" aria-label="Default select example"  name="city" onChange={handleChange}>
                            <option>Select City</option>
                            {cities && cities?(
                                cities.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.name} onChange={()=>{}}>{item.name}</option>
                                    )
                                })
                            ):null}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                        <select className="form-select" aria-label="Default select example" onChange={getCity}>
                        <option>Select State</option>
                            {states && states?(
                                states.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.isoCode} onChange={()=>{}}>{item.name}</option>
                                    )
                                })
                            ):null}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder="Pincode" />
                    </div>


                </div>
            </div>

            <p className="h3">Parmanent Address</p>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">State</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder="Pincode" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default EmployeeForm
