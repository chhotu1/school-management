import React,{useEffect, useState} from 'react';
import Router  from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import TeacherForm from '../../../src/admin/components/teacher/TeacherForm';
import { setTeacherDefaults,handleTeacherChange, createTeacher,checkTeacherValidation } from '../../../src/redux/actions/TeacherActions';
import Helpers from '../../../src/Helpers';
const Add = (props) => {
    const handleChange =(event)=>{
        if(event.target.name==='photo'){
            if (event.target.files && event.target.files.length > 0) {
                props.handleTeacherChange("photo", event.target.files[0]);
            }
        }else{
            props.handleTeacherChange(event.target.name, event.target.value);
        }
    }
    useEffect(()=>{
        props.setTeacherDefaults();
    },[])

    const handleSubmit =(e) => {
        e.preventDefault();
        const formObject = Helpers.Forms.validateForm(
            props.teacher.teacher,
            props.teacher.formError,
            Helpers.Forms.teacherForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkTeacherValidation(formObject);
            return false;
        }

        
        props.createTeacher(props.teacher.teacher, function () {
            Router.push("/admin/teacher")
            toast.success("New Teacher Added Successfully", {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            })
        });
    }

    const countryhandleChange =(name,value)=>{
        props.handleTeacherChange(name, value);
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Teacher" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <TeacherForm  handleChange={handleChange} teacher={props.teacher.teacher} countryhandleChange={countryhandleChange}/>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new teacher</button>
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
      teacher: state.teacher,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setTeacherDefaults: () => dispatch(setTeacherDefaults()),
        handleTeacherChange: (field, value) =>dispatch(handleTeacherChange(field, value)),
        checkTeacherValidation: (value) => dispatch(checkTeacherValidation(value)),

        createTeacher: (payload, cb) => dispatch(createTeacher(payload, cb)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)((Add));
  
