const mongoose = require("mongoose");

const connectDB = async (
  uri,
  options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
) => {
  try {
    await mongoose.connect(uri, options);
    console.log("Connected to database");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
