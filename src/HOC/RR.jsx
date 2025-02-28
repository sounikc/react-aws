import React from "react";
const RR = ({handleFinalBid}) =>{
    const [money, setMoney] = React.useState();
    const handleSetMoney= (e) =>{
        setMoney(e.target.value)
    }
    const handleRaiseBid= () =>{
        handleFinalBid(money)
    }
    return (
        <>
            <div>
                RR: 
                <input type="text" value={money} onChange={handleSetMoney} />
                <button type="button" onClick={handleRaiseBid}>Raise Bid</button>
            </div>
        </>
    )
}

export default RR;