import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import {FaTags} from 'react-icons/fa';

const TagsBlock = styled.div`
    ${props =>
        props.hasMarginBottom &&
        css`
            margin-bottom: 3rem;
        `
    }
        
    margin-top: 3rem;
    .tag-title {
        color: ${palette.violet[3]};
        margin-bottom: 1rem;
        font-size: 1.125rem;
        display: flex;
        align-items: center;
        svg {
            margin-left: 0.25rem;
            margin-top: 0.25rem;
        }
    }
    .tag {
        display: inline-block;
        color: ${palette.violet[2]};
        text-decoration: none;
        margin-right: 0.5rem;
        border: 1px solid ${palette.violet[0]};
        border-radius: 16px;
        padding: 0.25rem 0.75rem;
        &:hover {
            color: #130f40;
            background: #fff9da;
            //아니면 그냥 회색바탕
        }
    }
`;

const Tags = ({tags, tagTitle, hasMarginBottom}) => {
    return (
        <TagsBlock hasMarginBottom={hasMarginBottom}>
            {tagTitle && (
                <>
                <div className="tag-title">
                    Tags
                    <FaTags />
                </div>
        </>
            )}
            {tags.map(tag => (
                <Link to={`/?tag=${tag}`} key={tag} className="tag">
                    #{tag}
                </Link>
            ))}
        </TagsBlock>
    );
}

export default Tags;