//const BASE_URL = 'http://localhost:8000'
const BASE_URL = 'https://fixter-shop.herokuapp.com'
const user = JSON.parse(localStorage.getItem('user'));

export function googleAuth(access_token){
    //console.log(access_token)
    return fetch(BASE_URL + '/auth/google', {
        method:"POST",
        body:JSON.stringify({access_token}),
        headers:{'Content-Type':'application/json'} //super importante siempre!
    })
    .then(res=>{
        if(!res.ok) throw Error(res);
        return res.json()
    });
}

export function localAuth(auth){
    return fetch(BASE_URL + '/auth/login', {
        method:"POST",
        body:JSON.stringify(auth),
        headers:{'Content-Type':'application/json'} //super importante siempre!
    })
    .then(res=>{
        if(!res.ok) throw Error(res.statusText);
        return res.json()
    });
}

export function facebookAuth(access_token){
    return fetch(BASE_URL + '/auth/facebook', {
        method:"POST",
        body:JSON.stringify({access_token}),
        headers:{'Content-Type':'application/json'} //super importante siempre!
    })
    .then(res=>{
        if(!res.ok) return  console.log(res)
        return res.json()
    });
}

export function postProduct(newProduct={name:"pollo"}){
   // console.log(newProduct);
    return fetch(BASE_URL + '/products', {
        method:'POST',
        body:JSON.stringify(newProduct),
        headers:{'Content-Type':'application/json'} //super importante siempre!
    })
    .then(res=>{
        if(!res.ok) throw new Error(res.statusText);
        return res.json()
    });
}
