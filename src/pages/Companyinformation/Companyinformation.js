import React from 'react'
import './Companyinformation.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Companyinformation() {
    const [companyData, setCompanyData] = useState([{
        "reg":"1234567",  
        "companyName":"fint",
        "regAddress":"london",
        "companyTypeDesc":"null",
        "disDesc":"",
        "liqDisc":"",
        "dormant":"",
        "accountsToDate":"",
        "regTel":"",
        "website":"",
        "regPostShort":"",
        "age":"11",
        "incorporatedDate":"11/09/2022"




      }]);

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
         fetchCompaniesData();
    }, []);
    function fetchCompaniesData() {
        try {
            return fetch('https://data-service.pomandauk.co.uk/v1/company/details/08487724?country=uk',
                {
                    method: 'get',
                    headers: new Headers({
                        'Content-Type': 'application/json',

                        'accesstoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN3YXBuaWwueWFzaHdhbnRyYW9AYmFkYmVhdC5jb20iLCJpYXQiOjE3MjcyNjc4MDMsImV4cCI6MTcyNzI3MTQwM30.KpgEcg8USZZjEC481-xvAeDicAth_9rIFZxgrXt9xTA'
                    }

                    ),
                })

                .then((res) => res.json())
                .then((d) => setCompanyData(d.companyDetails))


        }
        catch (error) {
            console.log('error inside fetchCompaniesData', error);
        }
    }
    const rows =[
        
    ]


    return (
        <div className='company-details-contanier'>
            <div className='company-details-card'>
                <div className='company-info-sheet-heading'><h1>COMPANY INFORMATION SHEET</h1></div>

                <div className='company-data-sub-container'>
                {Object.keys(companyData[0]).map((key) =>  <div className='company-info-sheet-reg'>
                        <label for="reg no">{key}</label>
                        <p>{companyData[0][key]}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Companyinformation