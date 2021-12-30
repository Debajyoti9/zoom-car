import React from 'react'
import { Link } from 'react-router-dom';

function Location({place,location,value,setCity}) {
    return (
        <Link to='/' >
        <div className="location" onClick={()=>{setCity(value)}}>
        <div className="location_search_results">
            <i class="fas fa-search-location"></i>
                <div>
                    <h5>{place}</h5>
                    <p>{location}</p>
                </div>  
        </div>
        </div>
        </Link>
    )
}

export default Location;
