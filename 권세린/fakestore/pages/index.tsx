import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header_Box from '../components/header_box'
import {useQuery} from 'react-query'

const Home: NextPage = () => {

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
    return await (await fetch("https://fakestoreapi.com/products")).json();
  };
    const { data, isLoading, error } = useQuery("products", getProducts);

    if (isLoading) return <div>'Loading...'</div>;

    if (error) return <div>'Error..'</div>
  
  

  return (
    <div className={styles.container}>
      <Header_Box/>
    </div>
  )
}


export default Home
