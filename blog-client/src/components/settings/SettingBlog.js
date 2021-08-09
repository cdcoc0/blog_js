import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const SettingBlogBlock = styled.div`
    margin-left: 2rem;
    margin-top: 3rem;
    h2 {
        color: ${palette.gray[7]};
        font-weight: 500;
    }
`;

const SettingBlogBody = styled.div`
    background: white;
    border: 1px solid ${palette.gray[4]};
`;

const InputBlock = styled.div``;

const SettingBlog = () => {
    return (
        <SettingBlogBlock>
            <h2>블로그 설정</h2>
            <SettingBlogBody>
                <InputBlock>
                    블로그 이름
                    <input />
                </InputBlock>
                <InputBlock>
                    닉네임 수식어
                    <input />
                </InputBlock>
                <InputBlock>
                    블로그 설명
                    <input />
                </InputBlock>
            </SettingBlogBody>
        </SettingBlogBlock>
    );
}

export default SettingBlog;