import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeBuyerTopNav from "./homebuyer/HomeBuyerTopNav";
import HomeBuyerLeftSide from './homebuyer/HomeBuyerLeftSide';


class HomeBuyer extends Component {
    render() {
        return (
            <div>
                <HomeBuyerTopNav />   
                <div className='row'>
                    <HomeBuyerLeftSide />
                </div> 
             
            </div>
        );
    }
}

export default HomeBuyer;