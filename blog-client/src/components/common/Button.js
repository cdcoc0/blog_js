import React from "react";
import styled, {css} from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[7]};
    }

    ${props => 
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `
    }

    ${props =>
        props.violet &&
        css`
            background: ${palette.violet[3]};
            &:hover {
                background: ${palette.yellow[2]};
                color: #130f40;
            }
            transition: 0.1s ease-in;
        `
    }

    ${props =>
        props.frame &&
        css`
            background: none;
            border: 2px solid ${palette.violet[0]};
            border-radius: 15px;
            color: ${palette.violet[0]};
            &:hover {
                background: none;
                border: 2px solid ${palette.violet[6]};
                color: ${palette.violet[6]};
            }
            transition: 0.1s ease-in;
        `
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props} frame={props.frame ? 1 : 0} />
    ) : (
        <StyledButton {...props} />
    );
}

export default Button;