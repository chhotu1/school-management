import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import EmployeeForm from '../../../src/admin/components/employee/employee-form';
import withAuth from '../../../src/Share/withAuth';
const Add = () => {
    const handleChange = async (e) => {
        const { name, value } = e.target;
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Employee" backArrow="return">
                    <form>
                        <EmployeeForm handleChange={handleChange}/>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new employee</button>
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}

export default withAuth(Add)
