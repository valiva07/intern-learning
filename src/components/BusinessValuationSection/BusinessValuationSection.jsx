import React from 'react'
import MediaQuery from 'react-responsive'
import './BusinessValuationSection.css'

function BusinessValuationSection({ title, sections }) {
  return (
    <div className='valution-steps-component'>
      <div className='business-valution-step-main'>
        <div className='business-valution-steps-info-container'>
          <p className='business-valution-steps-heading'>{title}</p>
          <div className='busniess-valution-step-wrapper'>

            {sections.map((object,index) => {
              return <div className='business-valution-step-box'>
                 <MediaQuery minWidth={992}> <h2 className='business-valution-index'>{index+1}</h2>
                <div className='business-valution-info-box'>
                  <h2 className='step-info-box'>{object.title}</h2>
                  <p className='step-info-box-para'>{object.description}</p>
                </div></MediaQuery>
                <MediaQuery maxWidth={992}>
                <div className='business-valution-info-box'>
                <h2 className='business-valution-index'>{index+1}</h2>
                <h2 className='step-info-box'>{object.title}</h2>
                </div>
                <p className='step-info-box-para'>{object.description}</p>
                  </MediaQuery>

              </div>
            })}
          </div>
        </div>
        <div className='business-valution-video-container'>
          <img src='business_valuation_video_img.webp' width='100%'></img>

        </div>
      </div>
    </div>
  )
}

export default BusinessValuationSection