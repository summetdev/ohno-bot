const { Schema, model } = require("mongoose");

const schema = new Schema({
    prefix: { type: String, default: "." },
    id: { type: Number, unique: true, required: true }
})

module.exports = model("Guild", schema);