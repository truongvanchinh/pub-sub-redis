import express from 'express'
import redis from 'redis'

const app = express()

const subscribe = redis.createClient()
subscribe.connect()

//subscribe channel
// subscribe.subscribe('ordersystem', (message) => {
//     console.log(`The message for payment is `, JSON.parse(message));    
// })

//psubscribe channel
subscribe.pSubscribe('o*', (message, channel) => {
    console.log(`The channel for payment is ${channel}`);
    console.log(`The message for payment is `, JSON.parse(message));    
    
})

app.listen(3001, () => {
    console.log("The payment running at http://localhost:3001");
})