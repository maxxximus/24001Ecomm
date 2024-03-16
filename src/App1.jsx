


import { getProducts } from './apiservice';

import { useCallback, useEffect, useState } from 'react';



function App1() {

  const [countries, setCountries] = useState([]);

  async function fetchCountries(){
    const result = await getProducts(1);
    setCountries(result.recordset);
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <div className="App"><h4>Hello</h4>

      {countries.length > 0 && 
        countries.map((country) => {
          return(
            <h1>{country.itemcode}</h1>
          )
        })
      }
        
      
       
    </div>
  );

  
}


export {App1};
