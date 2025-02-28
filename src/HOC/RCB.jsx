import React from "react";
const RCB = ({handleFinalBid}) =>{
    const [money, setMoney] = React.useState();
    const handleSetMoney= (e) =>{
        console.log(e); //synthetic event
        setMoney(e.target.value)
    }
    const handleRaiseBid= () =>{
        handleFinalBid(money)
    }
    return (
        <>
            <div>
                RCB: 
                <input type="text" value={money} onChange={handleSetMoney} />
                <button type="button" onClick={handleRaiseBid}>Raise Bid</button>
            </div>
        </>
    )
}

export default RCB;