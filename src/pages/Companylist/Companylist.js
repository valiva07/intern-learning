import React, { useState, useEffect } from 'react';
import './Companylist.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { TableFooter } from '@mui/material';

import moment from 'moment';

function Companylist() {
    const [companyList, setCompanyList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    
    const [companyName, setCompanyName] = useState('');
    const [companyId, setCompanyId] = useState('');

    useEffect(() => {
        fetchCompaniesData();
    }, []);

    function fetchCompaniesData() {
        fetch('https://data-service.pomandauk.co.uk/v1/search/companies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuaWwueWFzaHdhbnRyYW9AYmFkYmVhdC5jb20iLCJpYXQiOjE3Mjc3OTU0ODMsImV4cCI6MTcyNzc5OTA4M30.Vxvq9CnWzFzHRd_O31AmPz2zNpJqiKxc2EUGm3iRmD8', // Replace with your actual token
            },
            body: JSON.stringify({ "country": "uk" }),
        })
        .then(res => res.json())
        .then(d => setCompanyList(d.searchData||[]))
        .catch(error => console.error('Error fetching data:', error));
    }

    function onNameChange(event) {
        setCompanyName(event.target.value);
        const timeoutId = setTimeout(() => nameChange(event.target.value), 2000);
        return () => clearTimeout(timeoutId);
    }

    function onIdChange(event) {
        setCompanyId(event.target.value);
        const timeoutId = setTimeout(() => idChange(event.target.value), 2000);
        return () => clearTimeout(timeoutId);
    }

    function nameChange(inputName) {
        fetch('https://data-service.pomandauk.co.uk/v1/search/companies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuaWwueWFzaHdhbnRyYW9AYmFkYmVhdC5jb20iLCJpYXQiOjE3Mjc3OTU0ODMsImV4cCI6MTcyNzc5OTA4M30.Vxvq9CnWzFzHRd_O31AmPz2zNpJqiKxc2EUGm3iRmD8',
            },
            body: JSON.stringify({ "companyName": inputName, "country": "uk" }),
        })
        .then(res => res.json())
        .then(d => setCompanyList(d.searchData))
        .catch(error => console.error('Error fetching data:', error));
    }

    function idChange(inputId) {
        fetch('https://data-service.pomandauk.co.uk/v1/search/companies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuaWwueWFzaHdhbnRyYW9AYmFkYmVhdC5jb20iLCJpYXQiOjE3Mjc3OTU0ODMsImV4cCI6MTcyNzc5OTA4M30.Vxvq9CnWzFzHRd_O31AmPz2zNpJqiKxc2EUGm3iRmD8',
            },
            body: JSON.stringify({ "reg": inputId, "country": "uk" }), // Use companyId
        })
        .then(res => res.json())
        .then(d => setCompanyList(d.searchData))
        .catch(error => console.error('Error fetching data:', error));
    }


    const recordsPerPage = 10;
     const lastIndex = currentPage * recordsPerPage;
     const firstIndex = lastIndex - recordsPerPage;
   
    const records = companyList.slice(firstIndex, lastIndex);

     const npage = companyList?.length? Math.ceil(companyList.length / recordsPerPage) :0;
     console.log('the pages is',npage);
     const numbers  = Array.from({ length: npage }, (v, i) => i + 1);;
console.log('the numbers',numbers);
    function handleSort(byKey) {
        console.log(' the company list',companyList);
        const sortedData = [...companyList].sort((a, b) => {
            console.log(byKey);
            if (byKey === 'companyName') {
               
                return a.companyName.localeCompare(b.companyName);
            } else if (byKey === 'incorporatedDate') {
                if(!a.incorporatedDate || !moment(a.incorporatedDate, moment.ISO_8601, true).isValid()){
                    console.log(a.companyName);
                    return 1;
                }
                if(!b.incorporatedDate || !moment(b.incorporatedDate, moment.ISO_8601, true).isValid()){
                    console.log(b.companyName);
                    return -1;
                }
               
                return  moment(b.incorporatedDate).valueOf() - moment(a.incorporatedDate).valueOf();
            }
            return 0;
        });
        setCompanyList(sortedData);
    }
            
    return (
        <div className='container'>
            <h1>COMPANY LIST</h1>
            <div className='input-container'>
                <div>
                    <label>Company Name</label>
                    <input
                        className='input-field-company'
                        type="text"
                        placeholder='Company Name'
                        value={companyName}
                        onChange={onNameChange}
                    />
                </div>
                <div>
                    <label>Company Id</label>
                    <input
                        className='input-field-company'
                        type="text"
                        placeholder='Company Id'
                        value={companyId}
                        onChange={onIdChange}
                    />
                </div>
            </div>

            <TableContainer component={Paper} className='table-section'>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell className='table-head-text'>Company Id</TableCell>
                            <TableCell >Company Name <i  onClick={() => handleSort('companyName')}  className="bi bi-arrow-up-short"></i></TableCell>
                            <TableCell >Incorporated Date <i onClick={() => handleSort('incorporatedDate')} className=" bi bi-arrow-up-short"></i></TableCell>
                            <TableCell>SIC Group Desc</TableCell>
                            <TableCell>Reg Address</TableCell>
                            <TableCell>Reg Post</TableCell>
                            <TableCell>Dis Desc</TableCell>
                            <TableCell>Liq Desc</TableCell>
                            <TableCell>Dormant</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.map((row) => (
                            <TableRow key={row.companyId}>
                                <TableCell>{row.companyId}</TableCell>
                                <TableCell><Link to={`companyInfo/${row.companyId}`}>{row.companyName}</Link></TableCell>
                                <TableCell>{row.incorporatedDate}</TableCell>
                                <TableCell>{row.sicGroupDesc}</TableCell>
                                <TableCell>{row.regAddress}</TableCell>
                                <TableCell>{row.regPost}</TableCell>
                                <TableCell>{row.disDesc}</TableCell>
                                <TableCell>{row.liqDesc}</TableCell>
                                <TableCell>{row.dormant ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TableFooter className='footer'>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a className='page-link' onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Prev</a>
                        </li>
                        {numbers.map((_,n) => (
                            <li key={n+1} className={`page-item ${currentPage === n+1 ? 'active' : ''}`}>
                                <a className='page-link' onClick={() => setCurrentPage(n+1)}>{n+1}</a>
                            </li>
                        ))}
                        <li className='page-item'>
                            <a className='page-link' onClick={() =>currentPage !==3 ? setCurrentPage(prev =>prev + 1):null}>Next</a>
                        </li>
                    </ul>
                </nav>
            </TableFooter>
        </div>
    );
}

export default Companylist;
