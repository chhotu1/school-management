import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Grid } from "@mui/material";
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import Rows from '../../../src/admin/components/feeType/Rows';
import { setFeeTypeDefaults,feeTypeList,deleteFeeType } from '../../../src/redux/actions/FeeTypeActions';
import withAuth from '../../../src/Share/withAuth';
import { CustomLoader } from '../../../src/Share/CommonFunction';
class FeeType extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    componentDidMount(){
        this.props.feeTypeList();
    }

    render(){
        
        return (
            <Grid container spacing={0}>
                {this.props.feeType.list_spinner?<CustomLoader/>:null}
                <Grid item xs={12} lg={12}>
                    <BaseCard title="All Fee Type" link="fee-type/add" linkTitle="Add Fee Type">
                        <div>
                            <Rows data={this.props.feeType.feeTypes} deleteFeeType={this.props.deleteFeeType}/>
                        </div>
                    </BaseCard>
                </Grid>
            </Grid>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
    return {
        feeType: state.feeType,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setFeeTypeDefaults: () => dispatch(setFeeTypeDefaults()),
        feeTypeList: () => dispatch(feeTypeList()),
        deleteFeeType: (id,cp) => dispatch(deleteFeeType(id,cp))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(FeeType));


