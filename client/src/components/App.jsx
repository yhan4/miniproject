import React from 'react';
import { useState, useEffect  } from 'react';
import '../styles/App.css'
import Login from './Login';
import Conversion from './Conversion';
import AddCurrency from './AddCurrency';
import UpdateCurrency from './UpdateCurrency';
import DeleteCurrency from './DeleteCurrency';


const App = () => {
  const [currencies, setCurrencies] = useState([])
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/currency')
        if (response.ok) {
          const data = await response.json();
          setCurrencies(data);
        } else {
          console.error('failed to fetch currency data');
        }
      } catch (error) {
        console.error("error in fetch", error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div>
      <Login />
      <Conversion />
      <AddCurrency />
      <UpdateCurrency currencies={currencies} />
      <DeleteCurrency currencies={currencies} />
    </div>
  )
}

export default App
