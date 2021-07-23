import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import {FaUserCircle} from 'react-icons/fa';

const AuthFormBlock = styled.div`
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${palette.violet[3]};
        margin-bottom: 1.75rem;
        svg {
            margin-right: 0.5rem;
            font-size: 1.5rem;
        }
        h2 {
            margin: 0;
        }
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    background: ${palette.gray[1]};
    border-radius: 4px;
    //border-bottom: 1px solid black;
    padding: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid black;
    }
    & + & {
        margin-top: 0.5rem;
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: center;
    span {
        margin-right: 0.75rem;
        color: ${palette.gray[5]};
        font-style: italic;
    }
    a {
        color: #04aaff;
        text-decoration: underline;
    }
`;

const AuthForm = () => {
    return (
        <AuthFormBlock>
            <div className="title">
                <FaUserCircle />
                <h2>Log in</h2>
            </div>
            <form>
                <StyledInput autoComplete="username" name="username" placeholder="ID" />
                <StyledInput autoComplete="new-password" name="password" placeholder="Password" type="password" />
                <ButtonWithMarginTop violet fullWidth>Enter</ButtonWithMarginTop>
            </form>
            <Footer>
                <span>Not registered?</span>
                <Link to="/register">create account</Link>
            </Footer>
        </AuthFormBlock>
    );
}

export default AuthForm;