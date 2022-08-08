import { NextPage } from "next";
import { useRouter } from 'next/router'
import React, {useState} from 'react'


const ShoppingCartPage: NextPage = () => {
    const router = useRouter();
    const title = router.query.title;
    let price = router.query.price as string;
    let priceNum: number;

    priceNum = Number(price);

    let [selectamount, setselectamount] = useState(1);
    
    const onIncrease = () => {
        setselectamount(selectamount + 1);
    }
    
    const onDecrease = () => {
        if(selectamount == 0) {
            selectamount = 0;
        }
        setselectamount(selectamount - 1);
    }

    let priceall = (priceNum * selectamount);


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
