import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
});

UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
};

UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

UserSchema.methods.generateToken = function() {
    //파라미터 1)토큰 안에 넣을 데이터, 2)JWT 암호, 3)기타 옵션
    const token = jwt.sign(
        {
            _id: this.id,
            username: this.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d' //7일동안 유효
        }
    );
    return token;
}

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({username});
};

const User = mongoose.model('User', UserSchema);
export default User;