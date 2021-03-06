import React from 'react';
import styled from 'styled-components';
import Settings from '../components/settings/Settings';
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

const SettingsPage = () => {
    return (
        <>
        <HeaderContainer />
        <Display>
            <SettingsSidebar home />
            <Settings />
        </Display>
        </>
    );
};

export default SettingsPage;