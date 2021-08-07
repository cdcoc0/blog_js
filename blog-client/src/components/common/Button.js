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
                //background: #141433;
            }
            transition: 0.1s ease-in;
        `
    }

    ${props =>
        props.frame && 
        css`
            background: none;
            border: 2px solid ${palette.violet[3]};
            color: ${palette.violet[3]};
            &:hover {
                background: none;
                border: 2px solid ${palette.violet[2]};
                color: ${palette.violet[2]};
            }
            transition: 0.1s ease-in;
        `
    }
    ${props => 
        props.radius &&
        css`
            border-radius: 16px;
            background: none;
        `
    }
    &:disabled {
        background: ${palette.gray[3]};
        color: ${palette.gray[5]};
        cursor: not-allowed;
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
        <StyledLink {...props} violet={props.violet ? 1 : 0} frame={props.frame ? 1 : 0} radius={props.radius ? 1 : 0} />
    ) : (
        <StyledButton {...props} radius={props.radius ? 1 : 0} />
    );
}

export default Button;