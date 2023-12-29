
export async function fetchallProducts (){
           
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

        export async function fetchallProductsByFilter (filter){
            let queryString=``;
            console.log(filter)
            for (let key in filter){
                queryString += `${key}=${filter[key]}&`
            }
            try {

                const response = await fetch("http://localhost:3001/products?"+queryString)
                console.log("http://localhost:3001/products?"+queryString)
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