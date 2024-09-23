import MediaQuery from 'react-responsive'
import './Task2.css';
import json from './app.json'
import BusinessValuationSection from './components/BusinessValuationSection/BusinessValuationSection';
import Footer from './components/Footer/Footer';
import HeaderSection from './components/Header/HeaderSection';
import ReportsPackageSection from './components/ReportsPackages/ReportsPackageSection';
import { useEffect, useState } from 'react';


function Task2() {
  const [navbarHeader,setNavbarHeader]=useState('');
  function onScroll(){
    setNavbarHeader('background-color-blue');
  }
  useEffect(() => {
    

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <div>
      <nav className={`Navbar ${navbarHeader}`} >
        
        <div className='navdiv'>
          <div className='navbar-logo'><MediaQuery minWidth={992}><img src='/pomandaimg.jpg' width='180' height='40' alt='pomando-logo'></img></MediaQuery>
            <MediaQuery maxWidth={992}><img src='logo_pom.webp' width='30' height='30' alt='valiva'></img></MediaQuery>
          </div>
          {/* <MediaQuery minWidth={992}> */}
            <div className='navbar-input-field'>
              <input className='navbar-input-sub-field' type='text' placeholder='Search for a Company or Director...'>
              </input>
              <div className='input-field-icon'><i className="bi bi-search"></i>
              </div>
            </div>
            {/* </MediaQuery> */}
         <div className='navbar-menu-icon'> <i class="fa fa-bars"></i></div>
          <MediaQuery minWidth={992}>
            <div className='navbar-button-wrapper'>

              <a href='#' className='header-link'>POWER <br></br>SEARCH</a>
              <a href='#' className='header-link'>PRICING</a>
              <a href='#' className='header-link'>SOLUTIONS</a>
              <button className='navbar-login-btn'>LOGIN</button>
              <button className='header-sign-up-btn'>SIGN UP</button>
            </div>
          </MediaQuery>

        </div>
      </nav>
      <HeaderSection {...json.headerSection} />
      <BusinessValuationSection {...json.businessValuationSection} />
      <ReportsPackageSection {...json.reportsPackagesSection} />
      <Footer {...json.footerSection} />
    </div>
  );
}

export default Task2;
