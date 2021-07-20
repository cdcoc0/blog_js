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
        
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, //7일
            httpOnly: true, //XSS 방지
        })
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
    POST /api/auth/login
    {
        username: 'yes',
        password: '123456'
    }
*/
export const login = async ctx => {
    const {username, password} = ctx.request.body;

    if(!username || !password) {
        ctx.status = 401; //Unauthorized
        return;
    }

    try {
        const user = await User.findByUsername(username);
        if(!user) {
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password);
        if(!valid) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            httpOnly: true,
        })
    } catch(e) {
        ctx.throw(500, e);
    }
};

/*
    GET /api/auth/check
*/
export const check = async ctx => {
    const {user} = ctx.state;
    if(!user) {
        ctx.status = 401; //Unauthorized
        return;
    };
    ctx.body = user;
};

/*
    POST /api/auth/logout
*/
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204; //No Content
};