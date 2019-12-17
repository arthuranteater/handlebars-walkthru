//dependencies

const express = require("express")
const exphbs = require("express-handlebars")
const path = require('path')

//express and port setup

const app = express();
const PORT = process.env.PORT || 8080;

// Parse application body as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes

const api = require(path.resolve(__dirname, "./routes/api"))
const client = require("./routes/client")

// serve js and assets to browser

app.use(express.static("public"));

//handles bars setup

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// dependencies for sequelize

const Sequelize = require("sequelize")

// tables to create

const kids = require('./models/kids')
const parents = require('./models/parents')
const hobbies = require('./models/hobbies')

// dotenv for password

require('dotenv').config({ path: path.resolve(__dirname, './config/.env') })

// connect to mysql using sequelize

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

// build tables function

const builder = async (con, seq, table1, table2, table3) => {
    const tables = await Promise.all([table1(con, seq), table2(con, seq), table3(con, seq)])
    return tables
}

// build tables, sync, send them to routes then app.listen

builder(connection, Sequelize, kids, parents, hobbies).then((tables) => {
    connection.sync()
    api(app, tables)
    client(app, tables)
    console.log(tables)
}).then(() => {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT)
    })
})

