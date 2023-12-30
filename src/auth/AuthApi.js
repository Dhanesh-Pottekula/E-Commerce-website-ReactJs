export function CreateUser(userData){
    return new Promise (async (resolve)=>{
        const response = await fetch("http://localhost:8080/users",{
            method:"post",
            body:JSON.stringify(userData),
            headers:{'content-type':'application/json'}
        })
        const data= response.json()
        resolve({data})
    })
}