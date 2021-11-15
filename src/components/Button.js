import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Button = ({children, classname, to}) => {
    return ( 
        <StyledButton classname={classname} to={to}>
            {children}
        </StyledButton>
     );
}
 
export default Button;

const StyledButton = styled(Link)`
    cursor: pointer;
    display: inline-flex;
    appearance: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: transparent solid 2px;
    outline-offset: 2px;
    width: auto;
    min-height: 2rem;
    border-radius: 0.375rem;
    line-height: 1.2;
    padding-inline-start: 0.75rem;
    padding-inline-end: 0.75rem;
    background-color: #1AA19B;
    transition: transform 0.3s ease, border 0.3s ease;
    :active {
        transform: scale(0.98);
    }
    :focus {
        border: 0.1rem solid #8BEDE8; 
    }
    
`