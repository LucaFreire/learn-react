import mongoose from 'mongoose';

const Transaction = mongoose.model('Transaction', {
        Name: String,
        Value: Number
});

export default Transaction;