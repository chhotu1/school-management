
import React from 'react'
const Studentform = (props) => {
    const {form,handleChange} = props;
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleChange} value={form.name?form.name:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Phone" name="phone" onChange={handleChange} value={form.phone?form.phone:''} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="*********" name="password" onChange={handleChange} value={form.password?form.password:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Class</label>
                        <input type="text" className="form-control" placeholder="Class" name="class" onChange={handleChange} value={form.class?form.class:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Father Name</label>
                        <input type="text" className="form-control" placeholder="Father Name" name="father" onChange={handleChange} value={form.father?form.father:''} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="name@example.com" name="email" onChange={handleChange} value={form.email?form.email:''}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Date Of Birth</label>
                        <input type="date" className="form-control" placeholder="12/03/2020" name="dob" onChange={handleChange} value={form.dob?form.dob:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
                        <input type="text" className="form-control" placeholder="Gender" name="gender" onChange={handleChange} value={form.gender?form.gender:''} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Photo</label>
                        <input type="file" className="form-control" name="photo" onChange={handleChange} />
                    </div>
                   
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Country</label>
                        <select className="form-select" aria-label="Default select example" >
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">City</label>
                        <select className="form-select" aria-label="Default select example">
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

export default Studentform
