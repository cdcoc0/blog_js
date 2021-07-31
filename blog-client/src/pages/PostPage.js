import React from 'react';
import Sidebar from '../components/common/Sidebar';
import PostViewer from '../components/post/PostViewer';
import HeaderContainer from '../containers/common/HeaderContainer';
import styled from 'styled-components';

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
                <PostViewer />
            </Display>
        </>
    );
};

export default PostPage;