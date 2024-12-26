import "./features.css"
import React from 'react'
import featurecardicon from "../../assets/featureicon1.png"
import featurecardicon2 from "../../assets/featureicon2.png"
import featurecardicon3 from "../../assets/featureicon3.png"
import featurecardicon4 from "../../assets/featureicon4.png"
import FeaturesCard from '../featurescard/FeaturesCard'
import featureimg from "../../assets/featuresimg.png"

const Features = () => {
   const featurecardData = [
    {
      id:1,
      cardImg:featurecardicon,
      title:"Market Trends Analysis",
      description:"Predictive insights to guide real estate strategies."
    },
    {
      id:2,
      cardImg:featurecardicon2,
      title:"Targeted Buyer Persona",
      description:"Understand and connect with your ideal property buyers."
    },
    {
      id:3,
      cardImg:featurecardicon3,
      title:"Competitor Insights",
      description:"Stand out in the property market with informed strategies."
    },
    {
      id:4,
      cardImg:featurecardicon4,
      title:"Visual Content Appeal",
      description:"Captivate buyers with appealing visuals and immersive experiences."
    },
  ]
  return (
    <>
     <div className='service-section'>
       <div className='service-heading'>
          <h1>Navigating Real Estate's Digital Landscape</h1>
       </div>
       <div className='service-para'>
        <p>Insights for Real Estate Marketing Advantage</p>
       </div>
    </div>

    <div className="features-contain">
    <div className='feature-session'>
         {
          featurecardData.map((featurecard,index)=>(
             <FeaturesCard key={index} cardImg={featurecard.cardImg}
              title={featurecard.title} 
              description={featurecard.description}/>
              
          ))
         } 
      </div>
      <div>
        <img src={featureimg} alt="" />
      </div>
    </div>
    </>
  )
}

export default Features