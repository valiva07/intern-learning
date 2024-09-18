
import React from 'react';
import './App.css';


function App() {  
  // const [isShowMore, setIsShowMore] = useState(false);
 
  // function onShowMoreClick() {

  //   setIsShowMore(isShowMore);
  // }

  return (
    <div className='main-container'>
      <div className='container'>
        <div className='data-information'> 
          <div>
            <img src='imagelogo.png' />
          </div>
          <h1>Lead Generation</h1>
          <p className='paragraph'>
            <p >Pomanda's Power Search allows you to filter the entire UK market by hundreds of parameters to identify and source new business leads. These leads can then be exported to use with your CRM system.</p>
            <div className='more-paragraph'>
              <p>
                Unlike  companies House search, Pomanda Power Search is a lead generation tool that enables users to instantly explore UK businesses, company directors, industries, shareholders and charges.
              </p>
              <p>
                Covering the entire UK market and specialising in SME data, Pomanda is the ultimate sales tool to identify new customers, leads and opportunities of any size.
              </p>
            </div> 
          </p>
        </div>
        <div className='image-showing '>
          <img className='image-modification' src='lapimg.png'></img>
        </div>
      </div>
    </div>

  );
}

export default App;

