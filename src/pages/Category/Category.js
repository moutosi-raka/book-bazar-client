
import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import BookCart from './BookCart/BookCart';
import BookingModel from './BookingModel/BookingModel';


const Category = () => {
   
    const categories = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);
    const navigation = useNavigation();

   let categoryName;
    console.log(categories[0].category_id)
   if(categories[0].category_id === "1" && categories.length>0)
   {
    categoryName= 'Nobel BooKs'
   }
  else if(categories[0].category_id === "2" && categories.length>0)
   {
    categoryName= 'Poetry Books'
   }
  else if(categories[0].category_id === "3"&& categories.length>0)
   {
    categoryName= 'Biograpy BooKs'
   }
   else
   {
     categoryName='Category'
   }
 

    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }

    
   
    return (
        <div className='w-11/12 mx-auto'>
          <h1 className='text-4xl text-center mt-6 font-bold text-linear'>{categoryName}</h1>
            {
              categories.length === 0?
              <h1 className='text-center h-[400px] mt-12 text-2xl'>NO Product</h1>  
              :
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-12'>
            {
              categories.map(category => <BookCart
              key={category._id}
              category={category}
              setBookProduct={setBookProduct}
              
              ></BookCart>)  
            }
            </div> 
            } 

        { bookProduct 
        && <BookingModel 
        bookProduct={bookProduct}
        setBookProduct={setBookProduct}
        ></BookingModel>}
       
        </div>
        
    );
};

export default Category;