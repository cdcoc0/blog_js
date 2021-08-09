import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";

const SettingsBlock = styled(Responsive)`
    margin-left: 2rem;
    margin-top: 3rem;
    h2 {
        font-weight: 500;
    }
`;

const SettingsBody = styled.div`
    background: white;
    border: 1px solid ${palette.gray[4]};
`;

const Settings = () => {
    return (
        <SettingsBlock>
            <h2>블로그 정보</h2>                
            <SettingsBody>
                블로그 이름
                전체 게시글 댓글 공감 tags
            </SettingsBody>
            블로그를 아름답게 꾸며보세요!
        </SettingsBlock>
    );
}

export default Settings;