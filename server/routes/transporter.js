const express = require("express");
const router = express.Router();
const line = require("../model/Line");
const transporter = require("../model/Transporter");
const transporterUnit = require("../model/TransporterUnit");
const transportDocument = require("../model/TransportDocument");

// @route GET api/qlnv/lines
// @desc Get all lines
// @access Public

router.get("/lines", async (req, res) => {
  try {
    // get all line
    const lines = await line.find();
    res.json({ success: true, lines });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ success: false, message: "server error" });
  }
});

// @ route POST api/qlnv/lines
// @ desc Create a new line
// @ access Public
router.post("/lines", async (req, res) => {
  try {
    // Simple validation
    const { lineNumber, description, status } = req.body;
    if (!lineNumber || lineNumber < 1) {
      return res
        .status(400)
        .json({ success: false, message: "lineNumber must be greater than 0" });
    }
    // Check if lineNumber already exists
    const lineExists = await line.findOne({ lineNumber });
    if (lineExists) {
      return res
        .status(400)
        .json({ success: false, message: "lineNumber already exists" });
    }
    // Create new line
    const newLine = new line({
      lineNumber: lineNumber,
      description: description,
      status: status,
    });
    await newLine.save();
    res.json({ success: true, message: "line created", newLine });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "server error" });
  }
});

// @route PUT api/qlnv/line
// @desc Update a transporter
// @access Public
router.put("/lines", async (req, res) => {
  try {
    const { id, lineNumber, description, status } = req.body;
    //simple validation
    if (!lineNumber || lineNumber < 1) {
      return res
        .status(400)
        .json({ success: false, message: "lineNumber must be greater than 0" });
    }
    const lineExists = await line.findOne({ lineNumber: lineNumber });
    if(lineExists) {
        return res.status(400).json({ success: false, message: "lineNumber already exists" });
    }
    // Check if lineNumber already exists
    let updateLine = {
      lineNumber: lineNumber,
      description: description,
      status: status,
    };
    updateLine = await line.findOneAndUpdate({ _id: id }, updateLine, {
      new: true,
    });
    if (!updateLine) {
      return res
        .status(400)
        .json({ success: false, message: "line not found" });
    }
    return res.json({ success: true, message: "line updated", updateLine });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: "server error" });
  }
});
// @route DELETE api/qlnv/line
// @desc Delete a line
// @access Public
router.delete("/lines/:lineNumber", async (req, res) => {
    try {
     const params = req.params;   
     console.log(params);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: "server error" });
    }
        
    
});
module.exports = router;
