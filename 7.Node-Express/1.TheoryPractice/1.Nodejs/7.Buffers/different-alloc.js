const {Buffer} = require('buffer');

const buffer = Buffer.alloc(1000,0)

console.log(Buffer.poolSize>>>1) 

const unsafeBuffer= Buffer.allocUnsafe(1000)

for(let i=0;i<unsafeBuffer.length;i++){
    if(unsafeBuffer[i]===0){
        console.log(`Element at position ${i} has value : ${unsafeBuffer[i].toString(2)}`)
    }
}