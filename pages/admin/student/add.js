import React,{useState} from 'react'
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import Studentform from '../../../src/admin/components/Student/student-form';
import { useDispatch,useSelector } from 'react-redux';
import { inputChange } from '../../../src/redux/reducers/StudentReducer';

const Add = () => {
    const dispatch = useDispatch();
    const student = useSelector((state)=>state.student.student);
    const handleChange =async(e)=>{
        const { name, value } = e.target;
        await dispatch(inputChange({ [name]: value }));
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(student,'data')
        /*
        Helpers.AuthServices.register(form)
        .then((response) => {
            if(response.data.status===true){
                toast.success("Student Added Succssfuly", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }else{
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }
        })
        .catch(function (error) {
          if(error.response){
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            });
          }
        });
        */
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Student" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <Studentform  handleChange={handleChange} student={student}/>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new student</button>
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}

export default Add
