import React, { ReactNode, useEffect } from 'react';
import {HeaderWrapper, BrandName, Nav, ShoppingCartLink, All, Jewelery, Electronics, MensClothing, WomensClothing} from './header.style';
import { Router, useRouter } from 'next/router';

const Header_Box = () => {
    const router = useRouter();

    return (
        <HeaderWrapper>
            <BrandName>SERIN STORE</BrandName>
            <Nav>
                <All>All</All>
                <Electronics onClick={() => router.push('./electronics')}>Electronics</Electronics>
                <Jewelery onClick={() => router.push('./jewelery')}>Jewelery</Jewelery>
                <MensClothing onClick={() => router.push('./mensclothing')}>Men's Clothing</MensClothing>
                <WomensClothing onClick={() => router.push('./womensclothing')}>Women's Clothing</WomensClothing>
                <div><ShoppingCartLink onClick={() => router.push('./shoppingcart')}>장바구니로 이동</ShoppingCartLink></div>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header_Box;