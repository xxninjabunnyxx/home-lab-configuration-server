import express from 'express'
import ubuntu from './ubuntu/index'

const app = express();
const port = 3000;

app.use('/ubuntu', ubuntu)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})