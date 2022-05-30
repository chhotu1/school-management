import React from 'react'
import Router from 'next/router'
import { Table } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import { toast } from 'react-toastify';
import {
    IconButton,
  } from "@mui/material";
class Rows extends React.Component {

    constructor(props){
        super(props)
        this.view = this.view.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    view(id){
        // Router.push("/admin/fee/"+id)
    }

    handleDelete(id) {
        if(confirm("Are you sure?")) {
            this.props.deleteFee(id, function (res) {
                if(res.data.status===true){
                    toast.success(res.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                    })
                }else{
                    toast.warning(res.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                    })
                }
            })
        }
    }

    render(){
        const { data } = this.props;
        return (
            <Table responsive size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?(data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item?.title}</td>
                                <td>{item?.amount}</td>
                                <td>
                                <IconButton aria-label="delete" color="error">
                                    <FeatherIcon icon="trash" width="20" height="20" onClick={()=>this.handleDelete(item._id)}/>
                                </IconButton>
                                <IconButton aria-label="edit" color="success">
                                    <FeatherIcon icon="edit" width="20" height="20"/>
                                </IconButton>
                                <IconButton aria-label="eye" color="primary">
                                    <FeatherIcon icon="eye" width="20" height="20"/>
                                </IconButton>
                                </td>
                            </tr>
                        )
                    })):(<tr><td colSpan={3}> Record Not Found</td></tr>)}
                </tbody>
            </Table>
        )
    }
}

export default Rows
