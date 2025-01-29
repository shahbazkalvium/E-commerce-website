import React from 'react';
import { Productcard } from '../Component/Productcard';


const productdetails =[
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.S2Q6lEBvMi1NWqWhte21hQHaEM&pid=Api&P=0&h=180",
        name:"Product 1",
        price:"$100",
        description:"new product"
    },

    {
        image:"https://tse1.mm.bing.net/th?id=OIP.H_NPgDbL-eQ1SakiDU9bPAHaFL&pid=Api&P=0&h=180",
        name:"Product 2",
        price:"$200",
        description:"new product"
    },

    {
        image:"https://tse1.mm.bing.net/th?id=OIP.GudFSQlVMLtHPqEHdFx8wAHaFD&pid=Api&P=0&h=180",
        name:"Product 3",
        price:"$300",
        description:"new product"
    },

    {
        image:"https://tse2.mm.bing.net/th?id=OIP.hPz9b8KU_0a_16YvQrT5jQHaFs&pid=Api&P=0&h=180",
        name:"Product 4",
        price:"$400",
        description:"new product"
    }
]

export const Home = () => {
    return (
        <div className='w-full min-h-screen bg-nuetral-800'>
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            {
                productdetails.map((product, index) => {
                    return(
                    <>
                    <Productcard key={index}{...product} /></>
                    )
                }
                )}
            
        </div> </div>
    );
}