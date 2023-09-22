import mongoose from "mongoose";

const Wallet = mongoose.model("Wallet", {
    Name: String,
    Date: Date,
    Description: String,
    Balance: Number,
    Historic: {
        Date: Date,
        Value: Number
    }
});

export default Wallet;