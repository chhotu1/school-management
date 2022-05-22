import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { inputChange } from '../../../src/redux/reducers/UserReducer';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import EmployeeForm from '../../../src/admin/components/employee/employee-form';
const Add = () => {
    const dispatch = useDispatch();
    const user = useSelector((state)=>state.user.user);
    console.log(user);
    const handleChange =async(e)=>{
        const { name, value } = e.target;
        await dispatch(inputChange({ [name]: value }));
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Employee" backArrow="return">
                    <form>
                        <EmployeeForm handleChange={handleChange} user={user}/>
                    <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new employee</button>
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}

export default Add
