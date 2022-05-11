import React,{useState} from 'react'
import {
    Grid,
} from "@mui/material";
import { toast } from 'react-toastify';
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
import Studentform from '../../../src/admin/components/Student/student-form';
import Helpers from '../../../src/Helpers';
const Add = () => {
    const initialValue = {
        email: "",
        password: "",
        name:'',
        phone:'',
        photo:"",
        address:'',
        country:'',
        state:'',
        city:'',
        gender:'',
        class:'',
        father:'',
        dob:'',
    };
    const [form, setForm] = useState(initialValue);
    const [formErrors, setFormErrors] = useState(initialValue);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(form,'data')
        Helpers.AuthServices.register(form)
        .then((response) => {
            console.log(response.data.status,'response')
            if(response.data.status===true){
                toast.success("Student Added Succssfuly", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }else{
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }
        })
        .catch(function (error) {
          if(error.response){
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_RIGHT,
              theme: "colored",
            });
          }
        });
    }
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="New Student" backArrow="return">
                    <form onSubmit={handleSubmit}>
                        <Studentform handleChange={handleChange} form={form}/>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3">Add new student</button>
                        </div>
                    </form>
                </BaseCard>
            </Grid>
        </Grid>
    )
}

export default Add
