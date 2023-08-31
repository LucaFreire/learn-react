import mongoose from 'mongoose';

const URI = process.env.URI;

function ConnectDB() {
    mongoose.connect(URI, { useNewurlParser: true, useUnifiedTopology: true })
        .then(() => console.log('connected to database'))
}

export default ConnectDB;