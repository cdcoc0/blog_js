import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';
import { check } from '../../modules/user';

const LoginForm = ({history}) => {
    const [error, setError] = useState(null);

    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        )
    };

    const onSubmit = e => {
        e.preventDefault();
        const {username, password} = form;
        dispatch(login({username, password}));
    }

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log('authError');
            console.log(authError);
            setError('로그인 실패');
            return;
        }
        if(auth) {
            console.log('login succeeded');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch(e) {
                console.log('error in localStorage');
            }
        }
    }, [history, user]);
    
    return (
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
    );
};

export default withRouter(LoginForm);