import React, { ReactNode } from 'react';
import {HeaderWrapper, BrandName, Nav, ShoppingCartLink} from './header.style';

const Header_Box = () => {
    return (
        <HeaderWrapper>
            <BrandName>SERIN STORE</BrandName>
            <Nav>
                <ShoppingCartLink>장바구니로 이동</ShoppingCartLink>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header_Box;