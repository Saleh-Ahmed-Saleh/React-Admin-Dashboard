import React from 'react'
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows,columns } from "./data"; 
import Header from '../../components/Header';


function Invoices() {
    return (
        <Box>
            <Header title="INVOICES" subTitle="List of Invoice Balances" />

            <Box sx={{ height: 600, width: '98%', mx:"auto"}}>
                <Typography>Invoices</Typography>
                    <DataGrid checkboxSelection rows={rows} columns={columns} slots={{ toolbar: GridToolbar }}/>
            </Box>
        </Box>
        
    )
}

export default Invoices
