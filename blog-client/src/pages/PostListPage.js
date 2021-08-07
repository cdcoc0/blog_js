import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <Sidebar />
            <div>
                <PostListContainer />
                <PaginationContainer />
            </div>
        </>
    );
};

export default PostListPage;