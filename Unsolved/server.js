const express = require('express')


const app = express()
const port = process.env.PORT || 3000

const dotenv = require('dotenv')
const path = require('path')

// Parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


dotenv.config({ path: path.resolve(__dirname, './config/.env') })
