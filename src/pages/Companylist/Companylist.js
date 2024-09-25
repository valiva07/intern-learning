import React, { useState } from 'react'
import './Companylist.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, } from 'react';
import { Link } from 'react-router-dom';



function Companylist() {
    const[comapnyList,setCompanyList]=useState([]);


    useEffect(() => {
        fetchCompaniesData();
    }, []);
    function fetchCompaniesData() {
        try {
            return fetch('https://data-service.pomandauk.co.uk/v1/search/companies',
              {
                    method: 'post',
                    headers: new Headers({
                        'Content-Type': 'application/json',

                        'accesstoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuaWwueWFzaHdhbnRyYW9AYmFkYmVhdC5jb20iLCJpYXQiOjE3MjcyNjc4MDMsImV4cCI6MTcyNzI3MTQwM30.KpgEcg8USZZjEC481-xvAeDicAth_9rIFZxgrXt9xTA'
                    }
                        
                    ),
                    body:JSON.stringify(
                    {"companyName": "finf",
                        "country": "uk"
                     })
                    })

                        .then((res) => res.json())
                        .then((d) => setCompanyList(d.searchData))


                }
        catch (error) {
                console.log('error inside fetchCompaniesData', error);
            }
        }
    

    const rows = comapnyList;
    console.log('length of the company list',comapnyList?.length);
       
        console.log('length of the company list',comapnyList?.length);
        return (
            <div className='container'>

                <h1> COMPANY LIST</h1>
                <TableContainer component={Paper} className='table-section'>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table">

                        <TableHead className='table-head'>
                            <TableRow>
                                <TableCell className='table-head-text'>Company Id</TableCell>
                                <TableCell >Comapny Name</TableCell>
                                <TableCell>incorporatedDate</TableCell>
                                <TableCell >sicGroupDesc</TableCell>
                                <TableCell >regAddress</TableCell>
                                <TableCell >regPost</TableCell>
                                <TableCell >disDesc</TableCell>
                                <TableCell >liqDesc</TableCell>
                                <TableCell >dormant</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows?.map((row) => (
                                <TableRow key={row.companyId}>
                                    <TableCell component="th" scope="row">
                                        {row.companyId}
                                    </TableCell>
                                    <TableCell ><Link to={`companyInfo/${row.companyId}`}>{row.companyName}</Link></TableCell>
                                    <TableCell >{row.incorporatedDate}</TableCell>
                                    <TableCell >{row.sicGroupDesc}</TableCell>
                                    <TableCell >{row.regAddress}</TableCell>
                                    <TableCell >{row.regPost}</TableCell>
                                    <TableCell >{row.disDesc}</TableCell>
                                    <TableCell >{row.liqDesc}</TableCell>
                                    <TableCell >{row.dormant}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                       
                    </Table>
                   
                </TableContainer>

            </div>
        )
    }

    export default Companylist