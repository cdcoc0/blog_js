import React from "react";
import styled, {css} from "styled-components";
import palette from "../../lib/styles/palette";

const StyledButton = styled.button`
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
                background-color: ${palette.yellow[2]};
                color: #130f40;
            }
            transition: 0.1s ease-in;
        `
    }
`;

const Button = props => {
    return (
        <StyledButton {...props} />
    );
}

export default Button;