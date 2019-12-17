module.exports = async (con, type) => con.define("kids", {
    kid_name: type.STRING,
    alias: type.STRING,
    age: type.INTEGER,
    yob: type.INTEGER,
    img: type.STRING(1000)
})