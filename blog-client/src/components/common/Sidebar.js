import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Category from "./Category";

const SidebarBlock = styled.div`
    position: absolute;
    width: 280px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    //background: pink;
    margin-top: 5rem;
`;

//category.map, React.memo 활용
const CategoryBox = styled.div``;

const Sidebar = () => {
    return (
        <SidebarBlock>
            <Category />
        </SidebarBlock>
    );
}

export default Sidebar;