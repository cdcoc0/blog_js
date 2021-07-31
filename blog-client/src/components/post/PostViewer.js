import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";

const PostViewerBlock = styled(Responsive)`
    //margin-top: 4rem;
    padding-left: 0;
`;

const PostHead = styled.div`
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5; //폰트 사이즈의 1.5배
        margin: 0;
    }
`;

const SubInfo = styled.div`
    margin-top: 1rem;
    color: ${palette.gray[6]};

    span + span:before {
        color: ${palette.gray[5]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${palette.gray[8]};
    min-height: 320px;
`;

const Tags = styled.div`
    //color: ${palette.gray[6]};
    margin-top: 3rem;
    margin-bottom: 3rem;
    .tag {
        display: inline-block;
        color: ${palette.gray[7]};
        text-decoration: none;
        margin-right: 0.5rem;
        border: 1px solid ${palette.violet[3]};
        border-radius: 16px;
        padding: 0.25rem;
        font-size: 0.75rem;
        background: #fbf7ff;
        &:hover {
            color: #130f40;
            background: #fff9da;
            //아니면 그냥 회색바탕
        }
    }
`;

const PostViewer = () => {
    return (
        <PostViewerBlock>
            <PostHead>
                <h1>Title</h1>
                <SubInfo>
                    <span>
                        <b>tester</b>
                    </span>
                    <span>{new Date().toLocaleDateString()}</span>
                </SubInfo>
            </PostHead>
            <PostContent
                dangerouslySetInnerHTML={{__html: '<p>HTML <b>내용</b></p>'}}
            />
            <Tags>
                <div className="tag">#태그</div>
                <div className="tag">#태그</div>
            </Tags>
        </PostViewerBlock>
    );
}

export default PostViewer;