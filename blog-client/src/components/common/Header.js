import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import {RiMapPinUserFill} from 'react-icons/ri';
import SetUserInfo from "../auth/SetUserInfo";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    //background: #141433;
    box-shadow: 0px 1px 3px ${palette.gray[2]};
    z-index: 5;
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between; //서로간의 여백 최대
    color: ${palette.violet[3]};
    //margin-top: 1rem;
    //margin-bottom: 0.75rem;
    .logo {
        font-size: 2rem;
        font-weight: 800;
        letter-spacing: 2px;
        //color: #fbf7ff;
    }
    .right {
        display: flex;
        color: ${palette.gray[7]};
        svg {
            font-size: 1.75rem;
            margin-right: 0.25rem;
        }
        //cursor: pointer;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 1.5rem;
`;

const AuthButton = styled(Button)`
    background: none;
    color: ${palette.violet[2]};
    border: 1px solid ${palette.violet[2]};
    border-radius: 16px;
    &:hover {
                background: none;
                border: 1px solid ${palette.violet[1]};
                color: ${palette.violet[1]};
            }
`;

const Header = ({user, onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">KIRRIS</Link>
                    {user ? (
                        <div className="right">
                            <SetUserInfo username={user.username}>
                                    <AuthButton onClick={onLogout}>Log out</AuthButton>
                                </SetUserInfo>
                            <RiMapPinUserFill />
                            <UserInfo>
                                {user.username}
                                
                            </UserInfo>
                            {/* <AuthButton onClick={onLogout}>Log out</AuthButton> */}
                        </div>
                    ) : (
                        <div className="right">
                            <AuthButton to="/login">Sign in</AuthButton>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default Header;