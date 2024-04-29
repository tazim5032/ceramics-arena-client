import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import CardCat from '../Components/CardCat';

const ShowByCategory = () => {
    const category = useParams();
    //console.log(category.subcategory)

    const [items, setItems] = useState([]);
   
    useEffect(() =>{
        fetch(`http://localhost:5000/allCategory/${category.subcategory}`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    return (
        <div className='py-12'>
            <Helmet>
                <title>{category.subcategory}</title>
            </Helmet>
            <h1 className='text-5xl text-center font-bold text-blue-600'>{category.subcategory}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-12 pt-12 mx-[2%] sm:mx-[4%]">
                {
                    items.map(item => <CardCat
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    ></CardCat>)
                }
            </div>
        </div>
    );
};

export default ShowByCategory;