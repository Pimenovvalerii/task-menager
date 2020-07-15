const BASE_KEY = '$2b$10$5lgVDxg.soDXeYRaXUq8huBbb3U.F4V84S1kdZaKnf7Ri9l2OU3le';
const BASE_URL = '5f07225f5d4af74b01293f0b';
export const createPost = () => {
    return fetch(`https://api.jsonbin.io/b`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'secret-key':   BASE_KEY,
        },
        body : JSON.stringify( {data: [], todayData: []})
    }
    )
}


export function readBin(){
    return fetch(`https://api.jsonbin.io/b/${BASE_URL}`,{
        method: 'GET',
        headers: {
            'secret-key':BASE_KEY,
        },
  
    })
    .then( response => response.json()) 
}

export function updateBin(body){
    return fetch(`https://api.jsonbin.io/b/${BASE_URL}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
            'secret-key':BASE_KEY,
            'versioning':'false',
        },
        body : JSON.stringify( body )
        // body : JSON.stringify( {homework:'-1'})
    }) 
}

// eslint-disable-next-line
function deleteBin(){
    return fetch(`https://api.jsonbin.io/b/5d978992de1e6569c2490df1/latest`,{
        method: 'DELETE',
        headers: {
            'secret-key':BASE_KEY,
        },
        
    })
    .then( response => response.json()) 
    .then( res => console.log( res))

}
function save(obj,id){
    readBin(id)
    .then(res => {
        res.users.forEach((el,i) => {
            if(el.phone===obj.phone){
                res.users[i] = obj
            }
        });
        updateBin(id,res)
    })
}


