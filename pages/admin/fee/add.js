import React,{useEffect, useState} from 'react';
import Router  from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import Form from '../../../src/admin/components/fee/Form';
import { setFeeDefaults,handleFeeChange, createFee,checkFeeValidation } from '../../../src/redux/actions/FeeActions';
import Helpers from '../../../src/Helpers';
import {buttonSpinner} from '../../../src/Share/CommonFunction'
import withAuth from '../../../src/Share/withAuth';
const Add = (props) => {
    const handleChange =(event)=>{
        if(event.target.name==='amount'){
            props.handleFeeChange(event.target.name, parseInt(event.target.value));
        }else{
            props.handleFeeChange(event.target.name, event.target.value);
        }
    }
    useEffect(()=>{
        props.setFeeDefaults();
    },[])
    console.log(props.fee.fee,'000')

    const handleSubmit =(e) => {
        e.preventDefault();
        const formObject = Helpers.Forms.validateForm(
            props.fee.fee,
            props.fee.formError,
            Helpers.Forms.feeForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkFeeValidation(formObject);
            return false;
        }

        
        props.createFee(props.fee.fee, function () {
            Router.push("/admin/fee")
            toast.success("New Fee Added Successfully", {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            })
        });
    }


    const countryhandleChange =(name,value)=>{
        props.handleFeeChange(name, value);
    }


    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Fee" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <Form  handleChange={handleChange} formErrors={props.fee.formError} fee={props.fee.fee} countryhandleChange={countryhandleChange}/>
                        <div className="col-auto">
                            {props.fee.create_update_spinner?(
                                 <button type="button" className="btn btn-primary mb-3">{buttonSpinner(props.fee.create_update_spinner)}</button>
                            ):(
                                <button type="submit" className="btn btn-primary mb-3">Add new fee</button>
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
      fee: state.fee,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setFeeDefaults: () => dispatch(setFeeDefaults()),
        handleFeeChange: (field, value) =>dispatch(handleFeeChange(field, value)),
        checkFeeValidation: (value) => dispatch(checkFeeValidation(value)),

        createFee: (payload, cb) => dispatch(createFee(payload, cb)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Add));
  
