import React from 'react';
import Sidebar from '../components/common/Sidebar';
import HeaderContainer from '../containers/common/HeaderContainer';
import styled from 'styled-components';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const Display = styled.div`
    display: flex;
    margin-top: 5rem;
`

const PostPage = () => {
    return (
        <>
            <HeaderContainer />
            <Display>
                <Sidebar />
                <PostViewerContainer />
            </Display>
        </>
    );
};

export default PostPage;