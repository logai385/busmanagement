const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LineSchema = new Schema({
    lineNumber:{
        type: Number,
        min: 1,
        required: true,
        unique: true,
    },
    description:{
        type: String,        
    },
    status:Boolean,
});
module.exports = mongoose.model("lines", LineSchema);