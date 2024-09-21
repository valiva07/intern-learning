import React from 'react'
import './Footer.css'
import MediaQuery from 'react-responsive';

function Footer(props) {
  
  const{title, subpara,cardSection}=props;
  
  return (

    <div className='footer'>
      <div className='footer-card-container'>
        <h1 className='pmanda-value-business-heading'>
          {title}
        </h1>
        <MediaQuery maxWidth={992}>
          <p className='business-heading-sub-para'>
            {subpara}
          </p>
        </MediaQuery>

        <div className='card-wrapper-section'>
         {cardSection.map((object) => { 
          return <div className='card-feature-section'>
            <img src={object.src} width="52px" height="52px" alt='footerImages'></img>
            <h3>{object.title}
            </h3><br></br>
            <p>{object.description}
            </p>
          </div>})} 
        </div>
      </div>
    </div>
  )
}

export default Footer