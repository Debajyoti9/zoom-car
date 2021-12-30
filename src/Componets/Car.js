import React from 'react'
import { Link } from 'react-router-dom';

function Car({carName,carLocation,seater,text,src,price}) {
    return (
        <div className="component_car_item pointer item">
        <div className="img">
                 <img src={src} alt="img" />
             </div>
         <div className="info">
             <div className="desc">
                 <div className="car_name_loacation ellipsis">
                      <div className="car_location ellipsis">
                        {carLocation}
                      </div>
                      <h3>{carName}</h3>
                 </div>
                 <div className="seater">
                     {seater}
                 </div>
                 <div className="car_item_extras">
                     <div className="car_item_message">
                         {/* <div>
                             <img src="" alt="" />
                         </div> */}
                         <div className="text">
                           {text}
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="price_book_cart">
         <div className="price_bar d-f ai-c ta-c">
         ₹ {price}
         </div>
         <div className="book">
             <Link to='/order'>
             <button className="pointer">Book Now</button>
             </Link>
         </div>
         </div>
    </div>
    )
}

export default Car;
