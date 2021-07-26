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
    //background: #fdfbff;
    //border-bottom: 2px solid ${palette.violet[3]};
    //box-shadow: 0px 1px 3px ${palette.violet[0]};
`;

const Wrapper = styled(Responsive)`
    display: flex;
    //align-items: center;
    //justify-content: space-between; //서로간의 여백 최대
    flex-direction: row-reverse;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    .right {
        display: flex;
        align-items: flex-start;
        color: ${palette.violet[3]};
        svg {
            font-size: 1.5rem;
            margin-right: 0.075rem;
        }
    }
`;

const HeaderBar = styled(Responsive)`
    width: 100%;
    background: ${palette.violet[3]};
    display: flex;
    .logo {
        font-size: 2rem;
        font-weight: 800;
        letter-spacing: 2px;
        color: #fbf7ff;
        width: 1024px;
        margin: 0.5rem auto;
    }
`;

const Spacer = styled.div`
    height: 8rem;
`;

const UserInfo = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 1.5rem;
`;

const Header = ({user, onLogout}) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    
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
                <HeaderBar>
                    <Link to="/" className="logo">KIRRIS</Link>
                </HeaderBar>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default Header;