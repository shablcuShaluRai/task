const ACCESS_TOKEN = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c'


var api = 'http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities'
var at =  `?access_token=${ACCESS_TOKEN}`;

let token = localStorage.token
console.log("token ", token);
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
console.log("token2",token);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


export const getAllData = () =>
  fetch(`${api}/526${at}`, { headers })
    .then(res => res.json())
    .then(data => data)
    console.log(`${api}/526${at}`);
