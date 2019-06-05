 export const HttpRequest = {
  api:'http://40.78.159.93:3000/api',
  postWithSignature: async(url, data, signature) => {
    let method = 'post';
    let headers = {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
        'x-signature': 'bc5c24987c4646e450d89ba1d80fcb0139b44a0a869490b8be88e5c7d416e384'
    };
    let body = JSON.stringify(data);
    let options = {method, headers, body};
    return fetch(url, options).then(res => res.json())
},
  // postWithoutAuth=(url,data)=>{
  //     return fetch(url, {
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-type': 'application/json',
  //           'Access-Control-Allow-Credentials': 'true'
  //         },
  //         method: 'POST',
  //         body: JSON.stringify(
  //         data
  //     )
  //       })
  //       .then(res=>res.json())
        
  // }
}