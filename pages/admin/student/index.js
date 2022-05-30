import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import StudentRows from '../../../src/admin/components/Student/student-rows';
import { setStudentDefaults,studentList,deleteStudent } from '../../../src/redux/actions/StudentActions';
import { CustomLoader } from '../../../src/Share/CommonFunction';
import withAuth from '../../../src/Share/withAuth';

const Student = (props) => {
    useEffect(()=>{
        props.studentList();
    },[])
    console.log(props.student.students,'student')
    return (
        <Grid container spacing={0}>
            {props.student.list_spinner?<CustomLoader/>:null}
            <Grid item xs={12} lg={12}>
                <BaseCard title="All student" link="student/add" linkTitle="Add student">
                    <div>
                        <StudentRows data={props.student.students} deleteStudent={props.deleteStudent}/>
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
        deleteStudent: (id,cp) => dispatch(deleteStudent(id,cp))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Student));


