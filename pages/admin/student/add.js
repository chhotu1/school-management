import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import Studentform from '../../../src/admin/components/Student/student-form';
import { setStudentDefaults, handleStudentChange, createStudent, checkStudentValidation } from '../../../src/redux/actions/StudentActions';
import Helpers from '../../../src/Helpers';
import { CustomLoader } from '../../../src/Share/CommonFunction';

const Add = (props) => {
    const handleChange = (event) => {
        if (event.target.name === 'photo') {
            if (event.target.files && event.target.files.length > 0) {
                props.handleStudentChange("photo", event.target.files[0]);
            }
        } else {
            props.handleStudentChange(event.target.name, event.target.value);
        }
    }

    useEffect(() => {
        props.setStudentDefaults();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formObject = Helpers.Forms.validateForm(
            props.student.student,
            props.student.formError,
            Helpers.Forms.studentForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkStudentValidation(formObject);
            return false;
        }
        props.createStudent(props.student.student, function () {
            Router.push("/admin/student")
            toast.success("New Student Added Successfully", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored",
            })
        });
    }

    const countryhandleChange = (name, value) => {
        props.handleStudentChange(name, value);
    }

    return (
        <Grid container spacing={0}>
            {props.student.create_update_spinner?<CustomLoader/>:null}
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Student" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <Studentform handleChange={handleChange} student={props.student.student} formErrors={props.student.formError} countryhandleChange={countryhandleChange} />
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
        handleStudentChange: (field, value) => dispatch(handleStudentChange(field, value)),
        checkStudentValidation: (value) => dispatch(checkStudentValidation(value)),
        createStudent: (payload, cb) => dispatch(createStudent(payload, cb)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)((Add));

