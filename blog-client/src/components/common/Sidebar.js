import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";

const SidebarBlock = styled.div`
    width: 280px;
    //margin-top: 4rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    //background: pink;
`;

const UserBox = styled.div`
`;

//category.map, React.memo 활용
const CategoryBox = styled.div``;

const Sidebar = () => {
    return (
        <SidebarBlock>
            <UserBox>UserName</UserBox>
            <CategoryBox>categories</CategoryBox>
        </SidebarBlock>
    );
}

export default Sidebar;