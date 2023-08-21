import mongoose from 'mongoose';

const Users = mongoose.model('Users', {
    name: String,
    passwrod: String
});

export default Users;