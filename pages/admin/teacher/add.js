import React,{useEffect, useState} from 'react';
import Router  from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import TeacherForm from '../../../src/admin/components/teacher/TeacherForm';
import { setStudentDefaults,handleStudentChange, createStudent } from '../../../src/redux/actions/StudentActions';
const Add = (props) => {
    const handleChange =(event)=>{
        if(event.target.name==='photo'){
            if (event.target.files && event.target.files.length > 0) {
                props.handleStudentChange("photo", event.target.files[0]);
            }
        }else{
            props.handleStudentChange(event.target.name, event.target.value);
        }
    }
    useEffect(()=>{
        props.setStudentDefaults();
    },[])

    const handleSubmit =(e) => {
        e.preventDefault();
        
        props.createStudent(props.student.student, function () {
            Router.push("/admin/student")
            toast.success("New Student Added Successfully", {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            })
        });
    }

    const countryhandleChange =(name,value)=>{
        props.handleStudentChange(name, value);
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Student" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <TeacherForm  handleChange={handleChange} student={props.student.student} countryhandleChange={countryhandleChange}/>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new student</button>
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
      student: state.student,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setStudentDefaults: () => dispatch(setStudentDefaults()),
        handleStudentChange: (field, value) =>dispatch(handleStudentChange(field, value)),
        createStudent: (payload, cb) => dispatch(createStudent(payload, cb)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)((Add));
  
