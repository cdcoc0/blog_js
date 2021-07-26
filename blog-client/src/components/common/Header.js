import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import {RiMapPinUserFill} from 'react-icons/ri';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    //background: #141433;
    //background: #481080;
    background: ${palette.violet[3]};
    //border-bottom: 2px solid ${palette.violet[3]};
    box-shadow: 0px 1px 3px ${palette.violet[4]};
`;

const Wrapper = styled(Responsive)`
    height: 10rem;
    display: flex;
    //align-items: center;
    justify-content: space-between; //서로간의 여백 최대
    .logo {
        font-size: 2rem;
        font-weight: 800;
        letter-spacing: 2px;
        margin-top: 4rem;
        color: white;
    }
    .right {
        display: flex;
        align-items: flex-start;
        margin-top: 1rem;
        color: white;
        svg {
            font-size: 1.25rem;
            margin-right: 0.075rem;
        }
    }
`;

const Spacer = styled.div`
    height: 18rem;
`;

const UserInfo = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 1rem;
`;

const Header = ({user, onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">KIRRIS</Link>
                    {user ? (
                        <div className="right">
                            <RiMapPinUserFill />
                            <UserInfo>{user.username}</UserInfo>
                            <Button frame onClick={onLogout}>Log out</Button>
                        </div>
                    ) : (
                        <div className="right">
                            <Button to="/login" frame>Sign in</Button>
                        </div>
                    )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default Header;