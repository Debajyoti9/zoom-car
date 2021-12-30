import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styleComponent/Main.css';
import Location from './location';
import data from '../JSON/searchPlaces.json';
function Main({setCity}) {
    const [filterData,setFilterData] = useState([]);
    const [wordEntered,setWordEntered] = useState('');

    const handelFilter = (e)=>{
      const searchWord = e.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value)=>{
          return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });

      if(searchWord === ""){
          setFilterData([]);
      }
      else{
          setFilterData(newFilter);
      }
    }
    return (
        <div className="subPage location-selector layout-one">
             <div className="header">
                 <div>
                 <Link to='/'>
                 <i class="fas fa-long-arrow-alt-left"></i>
                 </Link>
                 </div>
             </div>
             <section className='main'>
                 <div className="main_component_adress_picker">
                     <div className="main_component_adress_picker_box_border">
                            <div className="field_wrap field_one">
                                <div className="field field_address">
                                    <div className="field_adress_icon"></div>
                                    <input id="origin" type="text" autocomplete="off" placeholder="Select your starting point" value={wordEntered} class="input-text" onChange={handelFilter}/>  
                                </div>
                            </div>
                     </div>
                     <div className="location_option">
                         <i class="fas fa-search-location"></i>
                         <div>Current Location</div>
                     </div>
                      {filterData.map((value,key)=>{
                          return(<Location place={value.name} value={value} setCity={setCity} location={value.location} key={key}/>)
                      })}
                 </div>
             </section>
        </div>
    )
}

export default Main;
