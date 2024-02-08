import React from "react";

const Conversion = () => {
    return (
        <div className="container">
            <h2>Conversion</h2>
            <form>
                <label>
                    Currency From: <input type="text" />
                </label>
                <label>
                    Currency To: <input type="text" />
                </label>
                <label>
                    Amount: <input type="number" />
                </label>
                <button type="submit">Convert</button>
                <label>Converted Amount: </label>
            </form>
        </div>
    )
}

export default Conversion;