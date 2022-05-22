import React from 'react'
import { Table } from 'react-bootstrap'
import FeatherIcon from "feather-icons-react";
import {
    IconButton,
  } from "@mui/material";
const EmployeeRow = (props) => {
    const { data } = props;
  return (
    <Table responsive size="sm" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data && data.length!==0?(data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>{item?.phone}</td>
                            <td>{item?.role}</td>
                            <td>
                            <IconButton aria-label="delete" color="error">
                                <FeatherIcon icon="trash" width="20" height="20" />
                            </IconButton>
                            <IconButton aria-label="edit" color="success">
                                <FeatherIcon icon="edit" width="20" height="20" />
                            </IconButton>
                            <IconButton aria-label="eye" color="primary">
                                <FeatherIcon icon="eye" width="20" height="20" />
                            </IconButton>
                            </td>
                        </tr>
                    )
                })):(<tr><td colSpan={5} className="text-center py-4"> Record Not Found</td></tr>)}
            </tbody>
        </Table>
  )
}

export default EmployeeRow
