import React,{useEffect, useState} from 'react';
import Router  from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import { setUserDefaults,handleUserChange, createUser,checkUserValidation } from '../../../src/redux/actions/UserActions';
import Helpers from '../../../src/Helpers';
import {buttonSpinner} from '../../../src/Share/CommonFunction'
import withAuth from '../../../src/Share/withAuth';
import Forms from '../../../src/admin/components/user/Forms';
const Add = (props) => {
    const handleChange =(event)=>{
        if(event.target.name==='photo'){
            if (event.target.files && event.target.files.length > 0) {
                props.handleUserChange("photo", event.target.files[0]);
            }
        }else{
            props.handleUserChange(event.target.name, event.target.value);
        }
    }
    
    useEffect(()=>{
        props.setUserDefaults();
    },[])

    const handleSubmit =(e) => {
        e.preventDefault();
        const formObject = Helpers.Forms.validateForm(
            props.user.user,
            props.user.formError,
            Helpers.Forms.userForm
        );
        if (Object.keys(formObject).length !== 0) {
            props.checkUserValidation(formObject);
            return false;
        }

        
        props.createUser(props.user.user, function (response) {
            if(response.data.status===true){
                Router.push("/admin/user")
                toast.success("New User Added Successfully", {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored",
                })

            }else{
                toast.error(response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                theme: "colored",
                })

            }
            
        });
    }


    const countryhandleChange =(name,value)=>{
        props.handleUserChange(name, value);
    }


    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New User" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <Forms  handleChange={handleChange} formErrors={props.user.formError} user={props.user.user} countryhandleChange={countryhandleChange}/>
                        <div className="col-auto">
                            {props.user.create_update_spinner?(
                                 <button type="button" className="btn btn-primary mb-3">{buttonSpinner(props.user.create_update_spinner)}</button>
                            ):(
                                <button type="submit" className="btn btn-primary mb-3">Add new user</button>
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
      user: state.user,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setUserDefaults: () => dispatch(setUserDefaults()),
        handleUserChange: (field, value) =>dispatch(handleUserChange(field, value)),
        checkUserValidation: (value) => dispatch(checkUserValidation(value)),

        createUser: (payload, cb) => dispatch(createUser(payload, cb)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Add));
  
