const apiURL = "http://localhost:3002"

export async function getProducts(productid) {

    const response = await fetch(
        apiURL + "/item/" + productid
    );
    
    return response.json(); 

}

