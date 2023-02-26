import React, {useState,useEffect} from "react";
import axios from "axios";




function CreateCard() {
    const [cryptoData, setCryptoData] = useState([])
    useEffect(()=>{
        async function fetchData()  {
            const response = await axios.get("http://localhost:3001/getCryptoCurrency")
            console.log(response);
            setCryptoData(response.data.data);
        }
        fetchData();
        setInterval(()=>{
            console.log("This code will run every 30 seconds!");
            fetchData();
        },60000);
    },[])
    
    return(
        <div>
            <h1>Cryptocurrency Realtime Price</h1>
            <div className="grid-container">
                {cryptoData && cryptoData.map((crypto)=>{
                    return(
                        <div className="container">
                            <h1>{crypto.data.name} ({crypto.data.symbol})</h1>
                            <h3>${crypto.data.priceUsd}</h3>
                            <div className="volume-change-content">
                                <div>
                                <p>Volume:</p>
                                <p>{crypto.data.vwap24Hr}</p>
                                </div>
                                <div>
                                <p>Change:</p>
                                <p style={{color: (crypto.data.changePercent24Hr*crypto.data.priceUsd)/100>"0"? "green": "red" }}>{(crypto.data.changePercent24Hr*crypto.data.priceUsd)/100}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CreateCard;