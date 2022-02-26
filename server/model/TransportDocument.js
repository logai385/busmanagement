const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TransportDocumentSchema = new Schema();
TransportDocumentSchema.index(
  {
    dateUpload: {
      type: Date,
    },
    transporter: {
      type: Schema.Types.ObjectId,
      ref: "transporters",
    },
  },
  {
    unique: true,
  }
);
module.exports = mongoose.model("transportDocuments", TransportDocumentSchema);
