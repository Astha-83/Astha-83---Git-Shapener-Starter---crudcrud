import {promise} from "bycrypt/promise"
console.log('a')
console.log('b')
new promise((resolve,reject)=>{
    setTimeout(()=>resolve('c'),1000)
}).then(data=>{
    console.log(data);
    new promise((resolve,reject)=>{
        setTimeout(()=>resolve('d'),1000)
    }).then(data =>{
        console.log(data);
        console.log('e')

    })


})
const   data = await axios.get()
function random(){
    return new promise();
}
random.then()

