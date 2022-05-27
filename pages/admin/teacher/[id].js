import React,{useEffect, useState} from 'react';
import Router  from 'next/router';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import {
    Grid,
} from "@mui/material";
import BaseCard from "../../../src/admin/components/baseCard/BaseCard";

const StudentView = () => {
  return (
    <Grid container spacing={0}>
    <Grid item xs={12} lg={12}>
        <BaseCard title="Student" backArrow="return">
            <p>welcome</p>
        </BaseCard>
    </Grid>
</Grid>
  )
}

export default StudentView
