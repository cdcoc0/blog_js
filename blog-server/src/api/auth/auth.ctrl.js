import Joi from '@hapi/joi';
import User from '../../models/user';

/*
    POST /api/auth/register
    {
        username: 'kirri',
        password: '123456
    }
*/
export const register = async ctx => {
    const schema = Joi.object().keys({
        username: Joi.string()
            .alphanum() //alphanumeric
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().min(6).required()
    });
    const result = schema.validate(ctx.request.body);
    if(result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const {username, password} = ctx.request.body;
    try {
        const exists = await User.findByUsername(username); //모델에 접근
        if(exists) {
            ctx.status = 409; //Conflict
            return;
        }

        const user = new User({
            username,
        });
        await user.setPassword(password); //레코드(문서)에 접근
        await user.save();

        //응답할 데이터에서 hashedPassword 필드 제거
        ctx.body = user.serialize();
    } catch(e) {
        ctx.throw(500, e);
    }
};

export const login = async ctx => {
    //login
};

export const check = async ctx => {
    //check status
};

export const logout = async ctx => {
    //logout
};