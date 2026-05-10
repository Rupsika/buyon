import React, { use } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

    const {currency} = use(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
            
            {/* ✅ Fixed container - any image size will look same */}
            <div className='w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm'>
                <img 
                    className='w-full h-full object-cover object-top hover:scale-110 transition duration-500' 
                    src={image[0]} 
                    alt={name} 
                />
            </div>

            <p className='text-sm mt-3 truncate'>{name}</p>
            <p className='font-medium mt-1'>{currency} {price}</p>
        </Link>
    )
}

export default ProductItem