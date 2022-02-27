const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransporterSchema = new Schema({
  plate: {
    type: String,
    required: true,
  },
  mainLines: [
    {
      type: Schema.Types.ObjectId,
      ref: "lines",
    },
  ],
  minorLines: [
    {
      type: Schema.Types.ObjectId,
      ref: "lines",
    },
  ],
});
module.exports = mongoose.model("transporters", TransporterSchema);
