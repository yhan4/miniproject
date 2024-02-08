import React from "react";
import { useState } from "react";

const UpdateCurrency = ({ currencies}) => {
    const [currencyCode, setCurrencyCode] = useState("");
    const [newRate, setNewRate] = useState("");

    const handleUpdateCurrency = async (e) => {
        e.preventDefault()
        console.log('form submitted')

        const selectedCurrency = currencies.find((c) => c.currencyCode === currencyCode)

        if (selectedCurrency) {
            const id = selectedCurrency.id;

        try {
            const response = await fetch(`http://localhost:3001/api/currency/${id}/${newRate}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (response.ok) {
                console.log('conversion rate updated');
              } else {
                console.error('failed to update');
              }
        } catch (error) {
            console.error('error in fetch',error)
        }

        setCurrencyCode("")
        setNewRate("")
    }}

    return (
        <div>
            <h2>Update Currency</h2>
            <form onSubmit={handleUpdateCurrency}>
                <label>
                    Currency Code:
                    <input type="text" value={currencyCode} 
                    onChange={(e) => setCurrencyCode(e.target.value)} />
                </label>
                <label>
                    New Conversion Rate:
                    <input type="number" value={newRate}
                    onChange={(e) => setNewRate(e.target.value)} />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default UpdateCurrency;