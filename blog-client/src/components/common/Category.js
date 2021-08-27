import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

const CategoryBlock = styled.div`
    /* padding: 1rem; */
    color: ${palette.gray[6]};
`;

const SubCategory = styled.div``;

const MainCategory = ({mainCategory, subs}) => {
    subs.map(sub => (
        <SubCategory sub={sub} />
    ))
};

const Category = () => {
    return (
        <CategoryBlock>
            CategoryBox
        </CategoryBlock>
    );
}

export default Category;