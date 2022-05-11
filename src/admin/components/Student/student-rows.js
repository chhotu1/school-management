import React from 'react'
import { Table } from 'react-bootstrap'
const StudentRows = (props) => {
    const { data } = props;
    return (
        <Table responsive size="sm" >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {data?(data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>{item?.phone}</td>
                        </tr>
                    )
                })):(<tr><td colSpan={3}> Record Not Found</td></tr>)}
            </tbody>
        </Table>
    )
}

export default StudentRows
