import React,{useEffect, useState} from 'react';
import Router  from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {Alert} from 'react-bootstrap';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import Forms from '../../../src/admin/components/feeType/Forms';
import { setFeeTypeDefaults,handleFeeTypeChange, createFeeType,checkFeeTypeValidation } from '../../../src/redux/actions/FeeTypeActions';
import Helpers from '../../../src/Helpers';
import {buttonSpinner} from '../../../src/Share/CommonFunction'
import withAuth from '../../../src/Share/withAuth';

const Add = (props) => {

    const handleChange =(event)=>{
        if(event.target.name==='amount'){
            props.handleFeeTypeChange(event.target.name, parseInt(event.target.value));
        }else{
            props.handleFeeTypeChange(event.target.name, event.target.value);
        }
    }

    useEffect(()=>{
        props.setFeeTypeDefaults();
    },[])

    const handleSubmit =(e) => {
        e.preventDefault();
        const formObject = Helpers.Forms.validateForm(
            props.feeType.feeType,
            props.feeType.formError,
            Helpers.Forms.feeTypeForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkFeeTypeValidation(formObject);
            return false;
        }

        props.createFeeType(props.feeType.feeType, function (res) {
            if(res.data.status===true){
                Router.push("/admin/fee-type")
                toast.success("New Fee Added Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }else{
                toast.warning(res.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                })
            }
        });
    }

    const countryhandleChange =(name,value)=>{
        props.handleFeeTypeChange(name, value);
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Fee Type" backArrow="return">
                    {props.feeType.error_message?<Alert  variant="danger">{props.feeType.error_message}</Alert>:''}
                                        
                    <form onSubmit={handleSubmit}>
                        <Forms  handleChange={handleChange} formErrors={props.feeType.formError} feeType={props.feeType.feeType} countryhandleChange={countryhandleChange}/>
                        <div className="col-auto">
                            {props.feeType.create_update_spinner?(
                                 <button type="button" className="btn btn-primary mb-3">{buttonSpinner(props.feeType.create_update_spinner)}</button>
                            ):(
                                <button type="submit" className="btn btn-primary mb-3">Add new feeType</button>
                            )}
                           
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
      feeType: state.feeType,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setFeeTypeDefaults: () => dispatch(setFeeTypeDefaults()),
        handleFeeTypeChange: (field, value) =>dispatch(handleFeeTypeChange(field, value)),
        checkFeeTypeValidation: (value) => dispatch(checkFeeTypeValidation(value)),

        createFeeType: (payload, cb) => dispatch(createFeeType(payload, cb)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Add));
  
