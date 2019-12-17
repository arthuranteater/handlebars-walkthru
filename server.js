const express = require('express')


const app = express()
const port = process.env.PORT || 3000

const dotenv = require('dotenv')
const path = require('path')

// Parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


dotenv.config({ path: path.resolve(__dirname, './config/.env') })

const Sequelize = require("sequelize")

const connection = new Sequelize("coding_kids", "root", process.env.SECRET, {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

const kids = require('./models/kids.js')
const parents = require('./models/parents')
const hobbies = require('./models/hobbies')

const builder = async (con, Seq, table1, table2, table3) => {
    const tables = await Promise.all([table1(con, Seq), table2(con, Seq), table3(con, Seq)])
    return tables
}

const api = require('./routes/api')

builder(connection, Sequelize, kids, parents, hobbies).then((tables) => {
    connection.sync()
    api(app, tables)
}).then(() => {
    app.listen(port, function () {
        console.log("App is listening on http://localhost:" + port)
    })
})


