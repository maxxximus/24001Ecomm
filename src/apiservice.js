const apiURL = "http://localhost:3002"

export async function getCountries(countryCode) {

    const response = await fetch(
        apiURL + "/item/" + countryCode
    );
    
    return response.json(); 

}

