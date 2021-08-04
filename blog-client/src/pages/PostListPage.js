import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import styled from 'styled-components';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

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
                <div>
                    <PostListContainer />
                    <PaginationContainer />
                </div>
            </Display>
        </>
    );
};

export default PostListPage;