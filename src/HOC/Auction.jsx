import React from 'react';
import './Auction.css';
import RCB from './RCB';
import RR from './RR';

const Auction = () => {
    const [currentBid, setCurrentBid] = React.useState(20);
    const calculateFinalBid = (bid) => {
        setCurrentBid(Number(bid) + Number(currentBid))
    }
    return (
        <>
            <h1>IPL Auction</h1>
            <div className="wrapperDiv">
            <div className="PlayerDiv">
                <p><strong>Player Name:</strong><span className="playerSpan">Sanju Samson</span></p> 
            </div>
            <div className="PriceDiv">
                <strong>Base Price:</strong> Rs. 20 Lakh
            </div>
            </div>
            <div>Final Bid: {currentBid} lakh</div>
            <h3>Auctioneers</h3>
            <RCB handleFinalBid = {calculateFinalBid}/>
            <RR handleFinalBid = {calculateFinalBid}/>
        </>
    )
}

export default Auction;