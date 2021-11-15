import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return ( 
        <HeaderContainer>
            <h1>Innovate4WASH</h1>
        </HeaderContainer>
     );
}
 
export default Header;

const HeaderContainer = styled.header`
    grid-column: 2 / span 12;
`