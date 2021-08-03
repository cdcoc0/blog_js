import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";

const PostListBlock = styled(Responsive)`
    //margin-left: 0;
`;

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2 {
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p {
        margin-top: 2rem;
    }
`;

// const SubInfo = styled.div`
//     margin-top: 1rem;
//     color: ${palette.gray[6]};

//     span + span:before {
//         color: ${palette.gray[4]};
//         padding-left: 0.25rem;
//         padding-right: 0.25rem;
//         content: '\\B7';
//     }
// `;

// const Tags = styled.div`
//     margin-top: 0.5rem;
//     .tag {
//         display: inline-block;
//         color: ${palette.violet[4]};
//         text-decoration: none;
//         margin-right: 0.5rem;
//         &:hover {
//             color: ${palette.violet[2]};
//         }
//     }
// `;

const PostItem = ({post}) => {
    const {title, body, publishedDate, tags, user, _id} = post;
    return (
        <PostItemBlock>
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo username={user.username} publishedDate={new Date(publishedDate)} />
            <p>{body}</p>
            <Tags tags={tags} />
        </PostItemBlock>
    );
}

const PostList = ({loading, error, posts, showWriteButton}) => {
    if(error) {
        return <PostListBlock>Error</PostListBlock>
    }

    return (
        <PostListBlock>
            <WritePostButtonWrapper>
                {showWriteButton && (
                    <Button violet to="/write">새 글 작성하기</Button>
                )}
            </WritePostButtonWrapper>
            {!loading && posts &&(
                <div>
                    {posts.map(post => (
                        <PostItem post={post} key={post._id} />
                    ))}
                </div>
            )}
        </PostListBlock>
    );
}

export default PostList;