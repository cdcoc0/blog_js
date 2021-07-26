import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const AuthTemplateBlock = styled.div`
    /* 화면 전채를 채움 */
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    //background: ${palette.gray[8]};
    background: #141433;

    /* 내부 중앙 정렬 */
    display: flex;
    //flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 3rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
        color: ${palette.violet[3]};
    }
    margin-top: 2rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    //background: ${palette.violet[3]};
    border-radius: 4px;
    border: 1px solid ${palette.violet[3]};
`

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/">KIRRIS</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
}

export default AuthTemplate;