import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import Rows from '../../../src/admin/components/fee/Rows';
import { setFeeDefaults,feeList } from '../../../src/redux/actions/FeeActions';
import withAuth from '../../../src/Share/withAuth'
class Fee extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    componentDidMount(){
        this.props.feeList();
    }

    render(){
        return (
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <BaseCard title="All Fee" link="fee/add" linkTitle="Add Fee">
                        <div>
                            <Rows data={this.props.fee.fees}/>
                        </div>
                    </BaseCard>
                </Grid>
            </Grid>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
      fee: state.fee,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setFeeDefaults: () => dispatch(setFeeDefaults()),
        feeList: () => dispatch(feeList()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Fee));


