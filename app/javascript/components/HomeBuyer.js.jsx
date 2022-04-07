import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeBuyerTopNav from "./homebuyer/HomeBuyerTopNav";
import HomeBuyerLeftSide from './homebuyer/HomeBuyerLeftSide';
import HomeBuyerRightSideMap from './homebuyer/HomeBuyerRightSideMap';


const HomeBuyer = () => {
    const [cardClicked, setCardClicked] = React.useState(false);
    
        return (
            <div>
                <HomeBuyerTopNav />   
                <div className='row'>
                    <HomeBuyerLeftSide cardClicked={cardClicked}
                      setCardClicked={setCardClicked}
                    />
                     <HomeBuyerRightSideMap cardClicked={cardClicked} />
                </div> 
             
            </div>
        );
    
}

export default HomeBuyer;