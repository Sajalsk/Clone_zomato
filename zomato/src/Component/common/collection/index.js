import React from 'react'
import Slider from "react-slick";
import Nextarrow from '../Carousel/nextarrow';
import Prevarrow from '../Carousel/prevarrow';
import './collection.css'

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Nextarrow/>,
    prevArrow: <Prevarrow />,
  };

const Collection = ({list}) => {
  return (
    <div className='collcetion-wrapper'>
        <div className="max-width collection">
            <div className="collection-title">Collections</div>
            <div className="collection-subtitle-row">
            <div className="collection-subtitle">Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</div>

            <div className="collection-location">
                <div className="collection-location-text"> All collection in Lucknow</div>
                <i className="fi fi-rr-caret-right absolute-centre"></i>
               
            </div>
            </div>
           
           
           <Slider  {...settings}>
                 {list.map((item)=>(
                     <div>
                        <div className="collection-cover">
                            <img className='collection-image' src= {item.cover} alt={item.title} />
                            <div className="gradient">
                                <div className="collection-card-title">{item.title}</div>
                                <div className="collection-card-places">
                                    <div>{item.places}</div>
                                </div>
                            </div>
                        </div>
                     </div>
                 
                ))}
           </Slider>
        </div>
    </div>
   
  )
}

export default Collection