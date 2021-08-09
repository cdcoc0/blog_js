import React from 'react';
import styled from 'styled-components';
import SettingBlog from '../components/settings/SettingBlog';
import SettingsSidebar from '../components/settings/SettingsSidebar';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';

const Display = styled.div`
    position: absolute;
    display: flex;
    top: 4rem;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[0]};
`;

const SettingBlogPage = () => {
    return (
        <>
            <HeaderContainer />
            <Display>
                <SettingsSidebar blog />
                <SettingBlog />
            </Display>
        </>
    );
};

export default SettingBlogPage;