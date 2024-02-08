import React from "react";
import { useState } from "react";

const AddCurrency = () => {
    const [currencyCode, setCurrencyCode] = useState("");
    const [conversionRate, setConversionRate] = useState("");
    const [countryID, setCountryID] = useState("");

    const handleAddCurrency = async (e) => {
        e.preventDefault()
        console.log('form submitted')

        try {
            const response = await fetch("http://localhost:3001/api/currency", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    currencyCode,
                    countryID, 
                    conversionRate,
                })
            })
            if (response.ok) {
                console.log('currency added');
              } else {
                console.error('failed to add currency');
              }
        } catch (error) {
            console.error('error in fetch', error)
        }

        setCurrencyCode("")
        setConversionRate("")
        setCountryID("")
    }

    return (
        <div>
            <h2>Add Currency</h2>
            <form onSubmit={handleAddCurrency}>
                <label>
                    Currency Code: 
                    <input type="text" value={currencyCode} 
                    onChange={(e) => setCurrencyCode(e.target.value)} />
                </label>
                <label>
                    Country ID: 
                    <input type="number" value={countryID}
                    onChange={(e) => setCountryID(e.target.value)}/>
                </label>
                <label>
                    Conversion Rate: 
                    <input type="number" value={conversionRate}
                    onChange={(e) => setConversionRate(e.target.value)}/>
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddCurrency;