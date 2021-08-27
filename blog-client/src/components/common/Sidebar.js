import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Category from "./Category";

const SidebarBlock = styled.div`
    position: absolute;
    width: 256px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* background: pink; */
    /* background: rgba(255, 255, 255, 0.9); */
    margin-top: 10rem;
    color: ${palette.gray[7]};
`;

const BlogTitleBlock = styled.div`
    
    /* font-size: 1rem; */
    font-weight: 500;
    margin-bottom: 1.5rem;
`;

//category.map, React.memo 활용
const CategoryBox = styled.div``;

const Sidebar = () => {
    return (
        <SidebarBlock>
            <BlogTitleBlock>
                Blog Title Here
                <span> (8)</span>
            </BlogTitleBlock>
            <Category />
        </SidebarBlock>
    );
}

export default Sidebar;