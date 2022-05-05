import React from 'react'
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from "@mui/material";

import BaseCard from "../../../src/admin/components/baseCard/BaseCard";
const Add = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <BaseCard title="Form Layout" backArrow="return">
                    <Stack spacing={3}>
                        <TextField
                            id="name-basic"
                            label="Name"
                            variant="outlined"
                            defaultValue="Nirav Joshi"
                        />
                        <TextField id="email-basic" label="Email" variant="outlined" />
                        <TextField
                            id="pass-basic"
                            label="Password"
                            type="password"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Text Area"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                        />
                    </Stack>
                    <br />
                    <Button variant="contained" mt={2}>
                        Submit
                    </Button>
                </BaseCard>
            </Grid>

           
        </Grid>
    )
}

export default Add
