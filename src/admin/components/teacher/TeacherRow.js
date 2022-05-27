import React from 'react'
import Router from 'next/router'
import { Table } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import {
    IconButton,
  } from "@mui/material";
class TeacherRow extends React.Component {

    constructor(props){
        super(props)
    }

    view(id){
        Router.push("/admin/student/"+id)
    }

    render(){
        const { data } = this.props;
        return (
            <Table responsive size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Father name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?(data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.class}</td>
                                <td>{item?.dob}</td>
                                <td>{item?.gender}</td>
                                <td>{item?.father_name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.father_mobile}</td>
                                <td>
                                <IconButton aria-label="delete" color="error">
                                    <FeatherIcon icon="trash" width="20" height="20" />
                                </IconButton>
                                <IconButton aria-label="edit" color="success" onClick={this.view(item._id)}>
                                    <FeatherIcon icon="edit" width="20" height="20" />
                                </IconButton>
                                <IconButton aria-label="eye" color="primary" onClick={this.view(item._id)}>
                                    <FeatherIcon icon="eye" width="20" height="20" />
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

export default TeacherRow
