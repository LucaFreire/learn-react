import mongoose from "mongoose"

const URI = process.env.URI

function connect () {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("conected to database"))
}

export default connect