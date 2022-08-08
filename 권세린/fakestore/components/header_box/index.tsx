import React, { ReactNode, useEffect } from 'react';
import {HeaderWrapper, BrandName, Nav, ShoppingCartLink} from './header.style';
import { Router, useRouter } from 'next/router';

const Header_Box = () => {
    const router = useRouter();

    return (
        <HeaderWrapper>
            <BrandName>SERIN STORE</BrandName>
            <Nav>
                <ShoppingCartLink onClick={() => router.push('./shoppingcart')}>장바구니로 이동</ShoppingCartLink>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header_Box;