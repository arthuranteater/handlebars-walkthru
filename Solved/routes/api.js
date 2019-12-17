// dependencies

// var db = require("../models")

module.exports = function (app, tables) {

    const kids = tables[0]
    const parents = tables[1]
    const hobbies = tables[2]


    // Create all our routes and set up logic within those routes where required.
    app.get("/api", function (req, res) {
        kids.findAll({}).then(data => {
            res.json(data)
            console.log(data)
        })
    })

    app.post("/api/kids", function (req, res) {
        console.log('adding kid to db')
        kids.create(
            { kid_name: req.body.kid_name, alias: req.body.alias, age: req.body.age, yob: req.body.yob, img: req.body.img }
        ).then((data) => {
            console.log(data)
            res.json(data)
        })
    })

    app.post("/parents", function (req, res) {
        parents.create(
            { parent_name: req.body.name, kid_id: req.body.id }
        ).then((data) => {
            console.log(data)
            res.json(data)
        })
    })

    app.post("/hobbies", function (req, res) {
        hobbies.create(
            { parent_name: req.body.name, kid_id: req.body.id }
        ).then((data) => {
            console.log(data)
            res.json(data)
        })
    })

    app.put("/api/kids/:id", function (req, res) {
        console.log(req.body)
        kids.update({
            alias: req.body.alias,
            age: req.body.age,
            yob: req.body.yob
        }, {
            where: {
                id: req.params.id
            }
        }).then((data) => {
            res.json(data)
        })
    })

    app.delete("/api/kids/:id", function (req, res) {
        kids.destroy({
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        })
    })

    app.delete("/parents/:id", function (req, res) {
    })

    app.delete("/hobbies/:id", function (req, res) {
    })
}