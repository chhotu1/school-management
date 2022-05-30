import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import TeacherRow from '../../../src/admin/components/teacher/TeacherRow';
import { setTeacherDefaults,teacherList,deleteTeacher } from '../../../src/redux/actions/TeacherActions';
import withAuth from '../../../src/Share/withAuth';
import { CustomLoader } from '../../../src/Share/CommonFunction';

class Teacher extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    componentDidMount(){
        this.props.teacherList();
    }

    render(){
        return (
            <Grid container spacing={0}>
                {this.props.teacher.list_spinner?<CustomLoader/>:null}
                <Grid item xs={12} lg={12}>
                    <BaseCard title="All Teacher" link="teacher/add" linkTitle="Add Teacher">
                        <div>
                            <TeacherRow data={this.props.teacher.teachers} deleteTeacher={this.props.deleteTeacher}/>
                        </div>
                    </BaseCard>
                </Grid>
            </Grid>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      teacher: state.teacher,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setTeacherDefaults: () => dispatch(setTeacherDefaults()),
        teacherList: () => dispatch(teacherList()),
        deleteTeacher: (id,cp) => dispatch(deleteTeacher(id,cp))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Teacher));


