
// export async function fetchallProducts (){
           
//             try {
//                 const response = await fetch("http://localhost:3001/products")
//                 if (!response.ok) {
//                    throw new Error(`HTTP error! status: ${response.status}`);
//                 }
 
//                 const data = await response.json()
                
//                 return({data})
//             } catch (error) {
//                 console.error('There was an error with the fetch operation: ', error);
//                 return(error);
//             }
//         }

        export async function fetchallProductsByFilter ({filter,sort,pagination}){
            let queryString=``;
            
            for (let key in filter){
                for (let key2 in filter[key]){
                    queryString =queryString+`${key}=${filter[key][key2]}&`
                }
            }
            if (sort){
                queryString+=`_sort=${sort._sort}&_order=${sort._order}&`
                console.log(sort)
            }
            for (let key in pagination){
                queryString+=`${key}=${pagination[key]}&`
                
            }
            try {

                const response = await fetch("http://localhost:3001/products?"+queryString)
                if (!response.ok) {
                   throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                const totalitems = await response.headers.get("X-Total-Count")
                return({data:{
                    products:data,totalitems:totalitems
                }})
            } catch (error) {
                console.error('There was an error with the fetch operation: ', error);
                return(error);
            }
        }
        export async function fetchallProductsById ({id}){
            try {
                console.log("http://localhost:3001/products/"+id)
                const response = await fetch("http://localhost:3001/products/"+id)
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
