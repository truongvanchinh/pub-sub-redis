import express from 'express'
import redis from 'redis'

const app = express()

const subscribe = redis.createClient()
subscribe.connect()

//subscribe channel
subscribe.subscribe('ordersystem', (message) => {
    console.log(`The message for sendmail is `, JSON.parse(message));    
})

app.listen(3002, () => {
    console.log("The sendmail running at http://localhost:3002");
})