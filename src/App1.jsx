


import { getProducts } from './apiservice';

import { useCallback, useEffect, useState } from 'react';



function App1() {

  const [countries, setCountries] = useState([]);

  async function fetchCountries(){
    const result = await getProducts(2);
    setCountries(result);
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  return (
    <div className="App"><h4>Hello</h4>

      {countries.length > 0 && 
        countries.map((country) => {
          return(<>
            <h1>{country.design}</h1>
            <img src={country.image} />
            <h1>{country.price}</h1>
        </>  )
        })
      }
        
      
       
    </div>
  );

  
}


export {App1};
