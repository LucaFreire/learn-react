import mongoose from 'mongoose';

const Users = mongoose.model('Users', {
    name: String,
    password: String
});

export default Users;