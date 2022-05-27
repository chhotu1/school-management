import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import TeacherRow from '../../../src/admin/components/teacher/TeacherRow';
import { setStudentDefaults,studentList } from '../../../src/redux/actions/StudentActions';

class Teacher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }
    componentDidMount(){
        this.props.studentList();
    }

    render(){
        return (
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <BaseCard title="All Teacher" link="teacher/add" linkTitle="Add Teacher">
                        <div>
                            <TeacherRow data={this.props.student.students}/>
                        </div>
                    </BaseCard>
                </Grid>
            </Grid>
        )
    }

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
  
  export default connect(mapStateToProps, mapDispatchToProps)((Teacher));


