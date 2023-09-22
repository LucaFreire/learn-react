import mongoose from "mongoose";

const Record = mongoose.model('Record', {
    Name: String,
    Address: String,
    CNPJ: String
});

export default Record;