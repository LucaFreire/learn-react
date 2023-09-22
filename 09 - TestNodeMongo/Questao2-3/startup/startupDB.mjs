import mongoose from "mongoose";

const URI = process.env.URI;

function startupDB() {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('connected to database'))
}

export default startupDB;