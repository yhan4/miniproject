import React from "react";
import { useState } from "react";

const DeleteCurrency = ({currencies}) => {
    const [currencyCode, setCurrencyCode] = useState("");

    const handleDeleteCurrency = async (e) => {
        e.preventDefault()
        console.log('form submitted')
        const selectedCurrency = currencies.find((c) => c.currencyCode === currencyCode)

        if (selectedCurrency) {
            const id = selectedCurrency.id;

        try {
            const response = await fetch(`http://localhost:3001/api/currency/${id}`, {
                method:'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            if (response.ok) {
                console.log('currency deleted');
              } else {
                console.error('failed to delete');
              }
        } catch (error) {
            console.error('error in fetch',error)
        }

        setCurrencyCode("")
    }}

    return (
        <div className="container">
            <h2>Delete</h2>
            <form onSubmit={handleDeleteCurrency}>
                <label>Currency Code: </label>
                <input type="text" value={currencyCode} 
                onChange={(e) => setCurrencyCode(e.target.value)} />
                <button type="submit">Delete</button>
            </form>
        </div>
    )
}

export default DeleteCurrency;