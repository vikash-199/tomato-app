import mongoose, { Schema } from 'mongoose';
const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: null, //when user login in next page we are going to ask
    },
}, { timestamps: true });
const User = mongoose.model('User', schema);
//# sourceMappingURL=User.js.map