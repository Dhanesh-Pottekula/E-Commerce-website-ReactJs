
export async function fetchallProducts (){
            console.log("api called in ProductAPI")
            try {
                const response = await fetch("http://localhost:3001/products")
                if (!response.ok) {
                   throw new Error(`HTTP error! status: ${response.status}`);
                }
 
                const data = await response.json()
                
                return({data})
            } catch (error) {
                console.error('There was an error with the fetch operation: ', error);
                return(error);
            }
        }