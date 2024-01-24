import React from 'react'
import Explorecard from '../Component/common/explorecard'
import './exploreSection.css'

const ExploreSection = ({list, collectionName}) => {
  return (
    <div className='max-width explore-section' >
        <div className='collection-title'>{collectionName}</div>
        <div className="explore-grid">
            {list.map((restaurant)=>{
                return <Explorecard restaurant={restaurant}/>
            })}
        </div>
    </div>
  )
}

export default ExploreSection; 