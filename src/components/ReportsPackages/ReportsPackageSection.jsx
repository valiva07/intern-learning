import React from 'react'
import './ReportsPackageSection.css';
import MediaQuery from 'react-responsive';


function ReportsPackageSection({ title, description, creditsDescription, cardsSection }) {
    console.log({ title, description, creditsDescription, cardsSection });
    return (
        <div className='reports-package-wrapper-section'>
            <div className='reports-package-content-section'>
                <div className='valuation-reports-section'>
                  <h1 className='main-heading'>{title}</h1><br>
                    </br>
                    <p>{description}</p>
                    <br></br>
                    <p>Currently, you have <b><u>0</u></b> credits remaining</p><br></br>
                </div>
                <div className='valuation-reports-card-section'>
                    {cardsSection.map((object, index) => {
                        let enterpriseCss = '';
                        let enterpriseButtonCss = '';
                        let enterpriseTitleCss = '';
                        let enterpriseAmountCss = '';

                        if (index === 3) {
                            enterpriseCss = "enterprise-card-section";
                            enterpriseButtonCss = "enterprise-card-button";
                            enterpriseTitleCss = "enterprise-card-title";
                            enterpriseAmountCss = "enterprise-card-amount";
                        }
                        return <div className={`reports-package-card-single-section ${enterpriseCss}`}>
                            {index === 3 && <div className='logo-icon'><img src="logo_pom.webp" width='30' height='30' alt='logo-pomanda' /></div>}
                            {index !== 3 && <><div >
                                <h5 className={`reports-package-card-title ${enterpriseTitleCss}`}>{object.title}</h5>

                                {<p className={`reports-package-card-amount ${enterpriseAmountCss}`}>{object.amount} <span className='card-amount-suffix'>{object.sufix}</span></p>}
                                {object.repoInfo && <p className='reports-package-card-para'>{object.repoInfo}</p>}


                                {object.description && <p className={`reports-package-card-para ${enterpriseTitleCss}`}>{object.description}</p>}

                            </div>
                                <button className={`reports-package-card-button ${enterpriseButtonCss}`}>{object.btnText}</button></>}
                            {index === 3 && <MediaQuery minWidth={992} > <><div >
                                <h5 className={`reports-package-card-title ${enterpriseTitleCss}`}>{object.title}</h5>

                                {<p className={`reports-package-card-amount ${enterpriseAmountCss}`}>{object.amount} <span className='card-amount-suffix'>{object.sufix}</span></p>}
                                {object.repoInfo && <p className='reports-package-card-para'>{object.repoInfo}</p>}


                                {object.description && <p className={`reports-package-card-para ${enterpriseTitleCss}`}>{object.description}</p>}

                            </div>
                                <button className={`reports-package-card-button ${enterpriseButtonCss}`}>{object.btnText}</button></>
                            </MediaQuery>}
                            {index === 3 && <MediaQuery maxWidth={991.98}> <div className='enterprise-card-tablet-wrapper'>
                                <div>
                                    <h5 className={`reports-package-card-title ${enterpriseTitleCss}`}>{object.title}</h5>

                                    {<p className={`reports-package-card-amount ${enterpriseAmountCss}`}>{object.amount} <span className='card-amount-suffix'>{object.sufix}</span></p>}
                                </div>
                                <button className={`reports-package-card-button ${enterpriseButtonCss}`}>{object.btnText}</button></div>
                                {object.description && <p className={`reports-package-card-para ${enterpriseTitleCss}`}>{object.description}</p>}
                            </MediaQuery>}
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default ReportsPackageSection
