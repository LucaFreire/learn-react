import mongoose from 'mongoose';

const Casa = mongoose.model('Casa',{
    Owner: String,
    Location: String,
    Price: Number
});

export default Casa;