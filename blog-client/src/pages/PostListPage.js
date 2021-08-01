import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import styled from 'styled-components';
import PostList from '../components/posts/PostList';

const PostListPage = () => {
    const Display = styled.div`
    display: flex;
    margin-top: 5rem;
`;

    return (
        <>
            <HeaderContainer />
            <Display>
                <Sidebar />
                <PostList />
            </Display>
        </>
    );
};

export default PostListPage;