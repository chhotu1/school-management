import React from 'react'
import { Grid } from "@mui/material";
import BlogCard from "../../src/admin/components/dashboard/BlogCard";
import SalesOverview from "../../src/admin/components/dashboard/SalseOverview";
import DailyActivity from "../../src/admin/components/dashboard/DailyActivity";
import ProductPerfomance from "../../src/admin/components/dashboard/ProductPerfomance";

const Admin = () => {
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <SalesOverview />
                </Grid>
                {/* ------------------------- row 1 ------------------------- */}
                <Grid item xs={12} lg={4}>
                    <DailyActivity />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <ProductPerfomance />
                </Grid>
                <Grid item xs={12} lg={12}>
                    <BlogCard />
                </Grid>
            </Grid>

        </div>
    )
}

export default Admin
