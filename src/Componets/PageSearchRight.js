import React from 'react';
import  '../styleComponent/PageSearchRight.css';
import Car from './Car';
import data from '../JSON/carData.json';
function PageSearchRight() {
    return (
        <div className="pageSearch_right">
        <div className="car_list">
           {
               data.map((value,key)=>{
                   return(<Car carName={value.carName} carLocation={value.carLocation} seater={value.seater} text={value.text} src={value.src} price={value.price} key={key}/>)
               })
           }
        </div>
    </div>
    )
}

export default PageSearchRight
