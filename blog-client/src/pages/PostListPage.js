import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import Sidebar from '../components/common/Sidebar';
import styled from 'styled-components';

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
                <div>하이!</div>
            </Display>
        </>
    );
};

export default PostListPage;