import React, { useState } from 'react'
import '../styleComponent/PageSearchLeft.css';
function PageSearchLeft() {
    const [activeKms,setActiveKms] = useState(0);
    const [activeCost,setActiveCost] = useState(false);
    const [include,setInclude] = useState(false);
    const [inc,setInc] = useState("Not Included");
    const [carType,setCarType] = useState(false);
    const [activeTrans,setActiveTrans] = useState(false);
    const [delivery,setDelivery] = useState(false);
    const toggleCost = ()=>{
        setActiveCost(!activeCost)
    }
    const toggleIncude = () =>{
        if(include === false){
            setInc("Included");
            setInclude(true);
        }
        if(include === true){
            setInc("Not Included");
            setInclude(false);
        }
    }
    return (
        <div className="pageSearch_left">
                    <div className="pageSearch_left_sort_container">
                          <div className="filter_cart">
                              <div className="list_heading">
                                  Free kms
                              </div>
                              <div className="list_items">
                                  <div className={activeKms===0? 'list active':'list'} onClick={()=>{setActiveKms(0)}}>30</div>
                                  <div className={activeKms===1? 'list active':'list'} onClick={()=>{setActiveKms(1)}}>60</div>
                                  <div className={activeKms===2? 'list active':'list'} onClick={()=>{setActiveKms(2)}}>120</div>
                              </div>
                          </div>
                          <div className="filter_cart">
                              <div className="list_heading">Fuel Cost</div>
                              <div className="list_items">
                                  <div className={include?"list active":"list"} onClick={toggleIncude}>{inc}</div>
                              </div>
                          </div>
                          <div className="filter_cart">
                              <div className="list_heading">Seats</div>
                              <div className="list_items">
                                  <div className={activeCost?"list active":"list"} onClick={toggleCost}>5</div>
                              </div>
                          </div>
                          <div className="filter_cart">
                              <div className="list_heading">Car Types</div>
                              <div className="list_items">
                                  <div className={carType === 0?"list active":"list"} onClick={()=>setCarType(0)}>SUV</div>
                                  <div className={carType === 1?"list active":"list"} onClick={()=>setCarType(1)}>hatchback</div>
                              </div>
                          </div>
                          <div className="filter_cart">
                              <div className="list_heading">TransMisson</div>
                              <div className="list_items">
                                  <div className={activeTrans === 0?"list active":"list"} onClick={()=>setActiveTrans(0)}>Manual</div>
                                  <div className={activeTrans === 1?"list active":"list"} onClick={()=>setActiveTrans(1)}>Automatic</div>
                              </div>
                          </div>
                          <div className="filter_cart">
                              <div className="list_heading">Delivery Type</div>
                              <div className="list_items">
                                  <div className={delivery === 0?"list active":"list"} onClick={()=>setDelivery(0)}>Home</div>
                                  <div className={delivery === 1?"list active":"list"} onClick={()=>setDelivery(1)}>On Location</div>
                              </div>
                          </div>
                    </div>
                </div>
    )
}

export default PageSearchLeft;
