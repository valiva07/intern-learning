import React from 'react'
import './HeaderSection.css'
import MediaQuery from 'react-responsive'

function HeaderSection() {
    return (
        <div className='header-container'>
            <div className='business-valudation-header'>
                <div className='business-valudation-header-container'>
                    <h2 className='business-valudation-heading'>
                        Get a Business Valuation Report
                        in under 10 minutes
                    </h2>
                    <div className='business-valudation-search-container'>
                     <div className='busniess-valudation-search-wrapper'>
                        <div className='search-bar-section'>
                                    <img src='logo_pom_black (1).webp' width='24' height='24'/>
                                    <input className='input-width' type='text' placeholder='Enter a company name to get started' />
                                  <MediaQuery maxWidth={575}><button className='header-button'> <i className="bi bi-search"></i></button></MediaQuery> 
                                  <MediaQuery minWidth={575}><button className='header-button'> <i className="bi bi-search"></i>SEARCH</button></MediaQuery> 
                        </div>
                    </div>
                    <div className='business-valudation-header-sub-section-container'>
                    <MediaQuery minWidth={576}>   <div className='header-sub-section-text'>
                        Valuation reports can be edited and recalculated for up to 30 days after purchase.
                        </div>
                        <button className='header-sub-section-view-sample-button'>VIEW SAMPLE REPORT </button></MediaQuery>
                      
                    <MediaQuery maxWidth={575.98}>  
                        <button className='header-sub-section-view-sample-button'>VIEW SAMPLE REPORT </button>
                        <div className='header-sub-section-text'>
                        Valuation reports can be edited and recalculated for up to 30 days after purchase.
                        </div></MediaQuery>
                    </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection