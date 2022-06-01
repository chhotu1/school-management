import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import { setUserDefaults,userList,deleteUser } from '../../../src/redux/actions/UserActions';
import withAuth from '../../../src/Share/withAuth';
import { CustomLoader } from '../../../src/Share/CommonFunction';
import Rows from '../../../src/admin/components/user/Rows';

class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    componentDidMount(){
        this.props.setUserDefaults();
        this.props.userList();
    }

    render(){
        return (
            <Grid container spacing={0}>
                {this.props.user.list_spinner?<CustomLoader/>:null}
                <Grid item xs={12} lg={12}>
                    <BaseCard title="All User" link="user/add" linkTitle="Add user">
                        <div>
                            <Rows data={this.props.user.users} deleteUser={this.props.deleteUser}/>
                        </div>
                    </BaseCard>
                </Grid>
            </Grid>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setUserDefaults: () => dispatch(setUserDefaults()),
        userList: () => dispatch(userList()),
        deleteUser: (id,cp) => dispatch(deleteUser(id,cp))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(User));


