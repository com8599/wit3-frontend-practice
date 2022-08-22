import { NextPage } from "next";
import { useRouter } from 'next/router'
import React, {useState} from 'react'


const ShoppingCartPage: NextPage = () => {
    const router = useRouter();
    const title = router.query.title as string;
    let price = router.query.price as string;
    let priceNum: number;

    if (typeof title == 'undefined') {
        return (
            <div>
                <p>장바구니가 비어있습니다.</p>
            </div>
        );
    }

    priceNum = Number(price);

    let [selectamount, setselectamount] = useState(1);
    
    const onIncrease = () => {
        setselectamount(selectamount + 1);
    }
    
    const onDecrease = () => {
        setselectamount(selectamount - 1);
        if(selectamount == 0) {
            setselectamount(0);
        }
    }

    let priceall = (priceNum * selectamount);

    sessionStorage.setItem("title", title);
    sessionStorage.setItem("price", price);

    let a = sessionStorage.getItem("title");
    let b = sessionStorage.getItem("price");

    console.log(a);
    console.log(b);

    return (
        <div>
            <p>{title}</p>
            <p>${price}</p>
            <button onClick={onDecrease}>-</button>
            <div>{selectamount}</div>
            <button onClick={onIncrease}>+</button>
            <div>${priceall}</div>
        </div>
    );
    
};

export default ShoppingCartPage;
