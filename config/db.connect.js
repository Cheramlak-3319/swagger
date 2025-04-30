const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://cheeman:9Bcts_2015@atlascluster.untqfzs.mongodb.net/Swagger?retryWrites=true&w=majority");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = dbConnect;
