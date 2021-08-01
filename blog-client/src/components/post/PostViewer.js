import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import {FaTags} from 'react-icons/fa';

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
    margin-top: 3rem;
    margin-bottom: 3rem;
    .tag-title {
        color: ${palette.violet[3]};
        margin-bottom: 1rem;
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        svg {
            margin-left: 0.25rem;
            margin-top: 0.25rem;
        }
    }
    .tag {
        display: inline-block;
        color: ${palette.violet[2]};
        text-decoration: none;
        margin-right: 0.5rem;
        border: 1px solid ${palette.violet[0]};
        border-radius: 16px;
        padding: 0.25rem 0.75rem;
        &:hover {
            color: #130f40;
            background: #fff9da;
            //아니면 그냥 회색바탕
        }
    }
`;

const PostViewer = ({post, error, loading}) => {
    if(error) {
        if(error.response && error.response.status === 404) {
            return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
        }
        return <PostViewerBlock>Error</PostViewerBlock>
    }

    if(loading || !post) {
        return null;
    }

    const {title, body, tags, user, publishedDate} = post;
    return (
        <PostViewerBlock>
            <PostHead>
                <h1>{title}</h1>
                <SubInfo>
                    <span>
                        <b>{user.username}</b>
                    </span>
                    <span>{new Date(publishedDate).toLocaleDateString()}</span>
                </SubInfo>
            </PostHead>
            <PostContent
                dangerouslySetInnerHTML={{__html: body}}
            />
            <Tags>
                <div className="tag-title">
                    Tags
                    <FaTags />
                </div>
                {tags.map(tag => (
                    <div className="tag" key={tag}>#{tag}</div>
                ))}
            </Tags>
        </PostViewerBlock>
    );
}

export default PostViewer;