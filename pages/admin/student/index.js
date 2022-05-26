import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import StudentRows from '../../../src/admin/components/Student/student-rows';
import { setStudentDefaults,studentList } from '../../../src/redux/actions/StudentActions';

const Student = (props) => {
    useEffect(()=>{
        props.studentList();
    },[])

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="All student" link="student/add" linkTitle="Add student">
                    <div>
                        <StudentRows data={props.student.students}/>
                    </div>
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
        studentList: () => dispatch(studentList()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)((Student));


