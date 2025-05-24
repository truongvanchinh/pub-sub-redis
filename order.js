import express from 'express'
import redis from 'redis'

const app = express()

const publish = redis.createClient()
publish.connect()


app.get('/order', (req, res, next) => {
    const order = [
        {
            productId: 1,
            price: 5000
        },
        {
            productId: 2,
            price: 3000
        }
    ]

    //Step - payment and sendmail
    publish.publish('ordersystm', JSON.stringify(order))

    res.json({
        status: 'success',
        msg: 'Thank you!'
    })
})

app.listen(3000, () => {
    console.log("The order running at http://localhost:3000");
})