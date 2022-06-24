import React from 'react';
import ExploreSection from '../../exploreSection';
import { restaurants } from '../../data/restuarants';
import Filters from "../common/Filters";
import "./delivery.css";
import DeliveryCollections from './DeliveryCollections';
import Topbrands from './Topbrands';

const deliveryfilters=[
  {
    id:1,
    icon:<i class="fi fi-rr-settings-sliders absolute centre"></i>,
    title:"Filters",
  },

  {
    id:2,
    title:"Rating 4.0+",
  },

  {
    id:3,
    title:"Sage and Hygienic",
  },

  {
    id:4,
    title:"Pure veg",
  },

  { 
    id:5, 
    icon: <i class="fi fi-rr-truck-side absolute centre "></i>,
    title:"Delivery-Items",
  },

  {
    id:6,
    title:"Great Offers",
  },
]

const restuarantList= restaurants;
const Delivery = () => {
  return (
    <div>

    <div className='max-width'> 
    <Filters filterlist={deliveryfilters} />
    </div>
    
    <DeliveryCollections/>
    <Topbrands/>
    <ExploreSection list = {restuarantList} collectionName= "Delivery in Banglore"/>
    
   </div>
  ); 
};


export default Delivery;


