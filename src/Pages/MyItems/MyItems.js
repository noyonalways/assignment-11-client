import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import NoDataFound from '../../Components/NoDataFound/NoDataFound';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import Spinner from '../../Components/Spinner/Spinner';
import auth from '../../Firebase/firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myAddedProducts, setMyAddedProducts] = useState([]);
    const email = user?.email;
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await axios.get(`http://localhost:5000/myItem?email=${email}`);
            setMyAddedProducts(data);
            setLoading(false)
        })();

    }, [email]);

    if (loading) {
        return <Spinner />
    };

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            (async () => {
                const { data } = await axios.delete(`http://localhost:5000/product/${id}`);
                if (data) {
                    const remaining = myAddedProducts.filter(service => service._id !== id);
                    setMyAddedProducts(remaining);
                    toast.success(data.message);
                }
            })();
        }
    }


    return (
        <div className='py-10'>
            <PageTitle title={'My items'} />
            <div className="container mx-auto lg:px-16 px-3">
                <h2 className="text-2xl text-center mb-5">My Added Products</h2>
                <div className="flex flex-col lg:flex-row lg:justify-between min-h-[80vh]">
                    <div className="space-y-3  baiss-full lg:basis-[70%] order-1 lg:order-[0] ">
                        {
                            myAddedProducts.length ? myAddedProducts.map(product => <SingleProduct handleDeleteProduct={handleDeleteProduct} product={product} key={product._id} />)  : <NoDataFound/>
                        }
                    </div>
                    <div className="basis-full lg:basis-[28%] mb-10 md:mb-0">
                        <div className='p-4 rounded w-full bg-gray-50'>
                            <h3 className="text-xl">Name: {user?.displayName}</h3>
                            <p className="text-lg">Email address: {user?.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;