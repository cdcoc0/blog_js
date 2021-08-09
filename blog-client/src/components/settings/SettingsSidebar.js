import React from "react";
import styled, {css} from "styled-components";
import {IoHomeOutline, IoSettingsOutline, IoChatbubblesOutline, IoListOutline} from 'react-icons/io5';
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

const SettingsSidebarBlock = styled.div`
    //position: absolute;
    width: 280px;
    margin-top: 5rem;
    margin-left: 1rem;
`;

const SettingsList = styled.div`
    padding: 1rem 2rem;
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
    border: 1px solid ${palette.gray[4]};
    color: ${palette.gray[6]};
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: white;
    svg {
        margin-right: 0.25rem;
    }
    &:hover {
        border: 1px solid ${palette.violet[3]};
        color: ${palette.violet[3]};
        //font-weight: bold;
    }
    ${props => (props.home || props.blog) &&
        css`
        background: ${palette.violet[3]};
        color: white;
        &:hover {
            border: 1px solid ${palette.gray[4]};
            color: white;
        }
        `
    }
`;

const SettingsSidebar = props => {
    return (
        <SettingsSidebarBlock>
            <Link to="/settings">
                <SettingsList home={props.home ? 1 : 0}>
                    <IoHomeOutline />
                    블로그 관리 홈
                </SettingsList>
            </Link>
            <Link to="/settings/blog">
                <SettingsList blog={props.blog ? 1 : 0}>
                    <IoSettingsOutline />
                    블로그 설정
                </SettingsList>
            </Link>
            <Link>
                <SettingsList>
                    <IoListOutline />
                    카테고리 관리
                </SettingsList>
            </Link>
            <Link>
                <SettingsList>
                    <IoChatbubblesOutline />
                    댓글・공감
                </SettingsList>
            </Link>
        </SettingsSidebarBlock>
    );
}

export default SettingsSidebar;