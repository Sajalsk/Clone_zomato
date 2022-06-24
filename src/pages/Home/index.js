import React, {useState} from "react";
import Footer from "../../Component/common/footer";
import Header from "../../Component/common/header";
import Taboptions from "../../Component/common/tabOptions";
import Delivery from "../../Component/delivery";
import Dining from "../../Component/dining";
import Night from "../../Component/night";


const Homepage = () => {
  
  const [activeTab, setActiveTab] = useState("Dining Out");  //state & hooks

   return (  
   <div>
       <Header/>
       <Taboptions activeTab={activeTab} setActiveTab={setActiveTab}/>
       {getcorrectscreen(activeTab)}
       <Footer/>
  </div>
  );

};

const getcorrectscreen=(tab)=>
{
     switch(tab)
  {
     case "Delivery":
     return <Delivery/>;

     case "Dining Out":
     return <Dining/>;
    
    case "Nightlife":
      return <Night/>;

     default:
    return <Delivery/>

  };
};

export default Homepage;