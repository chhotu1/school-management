import React,{useState,useEffect} from 'react'
import { Grid } from "@mui/material";
import { toast } from 'react-toastify';
import BaseCard from '../../../src/admin/components/baseCard/BaseCard';
import EmployeeRow from '../../../src/admin/components/employee/employee-row';
import Helpers from '../../../src/Helpers';
const Employee = () => {
    const [datas,setDatas] = useState([]);
    useEffect(()=>{
        getStudent();
    },[])
    console.log('response','-------------')
    const getStudent =()=>{
        console.log('response','-------sss------')
        Helpers.UserServices.getAll()
        .then((response) => {
            console.log(response,'-------------')
            if(response.data.status===true){
                setDatas(response.data.data);
            }else{
                toast.error(response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                });
            }
        })
        .catch(function (error) {
            console.log(error,'------sss-------')
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
                <BaseCard title="All Employee" link="employee/add" linkTitle="Add Employee">
                   <EmployeeRow data={datas}/>
                </BaseCard>

            </Grid>
        </Grid>
    )
}

export default Employee
