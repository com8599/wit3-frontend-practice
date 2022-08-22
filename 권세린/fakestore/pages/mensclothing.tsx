import { NextPage } from "next";
import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import Header_Box from '../components/header_box'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const MensClothing: NextPage = () => {
    type CartItem = {
        id: number;
        category: string;
        description: string;
        image: string;
        price: number;
        title: string;
        amount: number;
      };
    
      
      const getProducts = async (): Promise<CartItem[]> => {
        return await (await fetch("https://fakestoreapi.com/products/category/men's%20clothing")).json();
      };
        const { data, isLoading, error } = useQuery(["products"], getProducts);
        const router = useRouter();
    
        if (isLoading) return <div>'Loading...'</div>;
    
        if (error) return <div>'Error..'</div>

        console.log(data);
        
        if(data != undefined) {
          let i = 0;
          let indata: JSX.Element[];
          indata = data.map(
            (ind: CartItem) => 
            <div key={ind.title}>{ind.title}<br/>${ind.price}<br/><div className={styles.product_img_div}>
              <img className={styles.product_img} src={ind.image}/></div>
              <button className={styles.add_cart_btn} onClick={() => router.push({pathname: './shoppingcart', query: {title: ind.title, price: ind.price}}, "./shoppingcart" )}>장바구니에 추가</button></div>);
          return (
            <div className={styles.container}>
              <Header_Box/>
              <div>{indata}</div>
            </div>
          )
        }
    
        return (
          <div className={styles.container}>
            <Header_Box/>
          </div>
        )
    
};

export default MensClothing;