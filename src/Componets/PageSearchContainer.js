import React from 'react';
import '../styleComponent/PageSearchContainer.css';
import PageSearchLeft from './PageSearchLeft';
import PageSearchRight from './PageSearchRight';

function PageSearchContainer({city}) {
    return (
        <div className='pageSearchContainer'>
            <div className="pageSearch">
                <PageSearchLeft/>
                <PageSearchRight/>
            </div>
        </div>
    )
}
export default PageSearchContainer;
