import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    //background: #141433;
    background: ${palette.violet[7]};
    box-shadow: 0px 1px 3px ${palette.gray[3]};
    //box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
    height: 18rem;
    display: flex;
    //align-items: center;
    justify-content: space-between; //서로간의 여백 최대
    .logo {
        font-size: 2rem;
        font-weight: 800;
        letter-spacing: 2px;
        margin-top: 8rem;
        color: ${palette.violet[0]};
    }
    .right {
        margin-top: 1rem;
    }
`;

const Spacer = styled.div`
    height: 18rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">KIRRIS</Link>
                    <div className="right">
                        <Button to="/login" frame>Sign in</Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default Header;