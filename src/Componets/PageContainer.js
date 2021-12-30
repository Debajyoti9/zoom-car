import React, { useEffect, useState } from 'react';
import '../styleComponent/PageContainer.css';
import car from '../images/bg-desktop.png';
import { Link } from 'react-router-dom';

function PageContainer({city}) {
    const sectionStyle = {
        width:'100%',
        height:'100vh',
        backgroundImage:`url(${car})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
     const [open,setIsOpen] = useState(false);
     const [loc,setLoc] = useState("Pick Up City, Airport, Address or Hotel");
     useEffect(() => {
            if(!city) return setIsOpen(true);
            const address = city.location;
            setLoc(address);
     },city)
    return (
        <div className='conatiner' style={sectionStyle}>
            <section className='conatainer_serach'>
                 <form>
                     <div className="conatiner_ride_selection">
                     <span>Round Trip</span>
                        <i className="fas fa-chevron-down"></i> 
                     </div>
                     <Link to='/location'>
                     <div className="container_box" onClick={()=>{setIsOpen(true)}}>
                         <div className="conatiner_field_wrap">
                             <div className="conatiner_field_address">
                                 <div className="container_field_adress_icon"></div>
                                  <div className="container_field_adress_placeholder">{loc}</div>
                             </div>
                         </div>
                     </div>
                     </Link>
                     {open?
                     <div className="calender_box">
                         <div className="calender_field_wrap">
                             <div className="calender_field_address">
                                <i class="fas fa-calendar-week"></i>
                                  <div className="calender_field_adress_placeholder">Tue,28 Dec'21,5:15PM - Tue,28 Dec'21 ,11:15</div>
                             </div>
                         </div>
                     </div>:null
                     }
                        <Link to='/PageSearch'>
                         <div className="container_box_button_wrapper">
                             <button disabled= { !city?true:false} className='button_primary'>Find Cars</button>
                         </div>
                         </Link>
                 </form>
            </section>
        </div>
    )
}

export default PageContainer;
