import React from 'react'
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
    Item
} from "@mui/material";

import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
const Add = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Employee" backArrow="return">
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                    <input type="text" className="form-control" placeholder="Phone" />
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="*********" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Experience</label>
                                    <input type="text" className="form-control" placeholder="Experience" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Father Name</label>
                                    <input type="text" className="form-control" placeholder="Father Name" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Date Of Birth</label>
                                    <input type="date" className="form-control" placeholder="12/03/2020" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Date Of Joing</label>
                                    <input type="date" className="form-control" placeholder="12/03/2020"  min="2022-06-04" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Qualification</label>
                                    <input type="text" className="form-control" placeholder="Qualification" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Father Phone</label>
                                    <input type="text" className="form-control" placeholder="Father Phone" />
                                </div>
                            </div>
                        </div>
                        <p class="h3">Current Address</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                                    <select class="form-select" aria-label="Default select example">
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
                                    <select class="form-select" aria-label="Default select example">
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

                        <p class="h3">Parmanent Address</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                                    <select class="form-select" aria-label="Default select example">
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
                                    <select class="form-select" aria-label="Default select example">
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
                        

                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new employee</button>
                        </div>
                </BaseCard>
            </Grid>
        </Grid>
    )
}

export default Add
