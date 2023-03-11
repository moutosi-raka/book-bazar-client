import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButtom from '../../../../Components/PrimaryButton/PrimaryButtom';

const CategoryCart = ({category}) => {
    const {category_id,category_name, category_img} = category;
    return (
        // <div className="card w-[70%] mx-auto shadow-xl image-full">
        //     <figure><img className='' src={category_img} alt="Shoes" /></figure>
        //     <div className="card-body mt-20">
        //        <div className='px-3 py-12'>
        //        <h2 className="text-3xl text-white font-bold text-center shadow-2xl">{category_name}</h2>
        //        </div>
                
        //         <div className="card-actions mt-8 justify-center">
        //             <Link to={`/category/${category_id}`}><PrimaryButtom>See Details</PrimaryButtom></Link>
        //         </div>
        //     </div>
        // </div>
        <div className='bg-slate-900 w-[22rem] mx-auto shadow-2xl rounded-lg'>
            <div>
            {/* <h2 className="text-5xl text-white font-bold text-center shadow-2xl">{category_name}</h2> */}
            <img className='h-40 object-cover w-full' src={category_img} alt='' />
            </div>
            <div className='py-3'>
            <h2 className="text-2xl text-white font-bold text-center shadow-2xl text-linear">{category_name}</h2>
            <div className='flex justify-center mt-5'>
            <Link to={`/category/${category_id}`}><PrimaryButtom>See Details</PrimaryButtom></Link>
            </div>
            </div>
            
        </div>
    );
};

export default CategoryCart;