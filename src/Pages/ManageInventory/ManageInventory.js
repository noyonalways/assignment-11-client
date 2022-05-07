import React, { useState, useEffect } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import axios from 'axios';
import Spinner from '../../Components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import NoDataFound from '../../Components/NoDataFound/NoDataFound';


const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);




    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const { data } = await axios.get(`http://localhost:5000/product?limit=${limit}&pageNumber=${pageNumber}`);
            
            if (!data?.success) {
                setProducts([])
            }
            else {
                setProducts(data?.data);
                setTotalPage(Math.ceil(data?.count / limit));
            }
            setLoading(false);

        };
        fetchProducts();

    }, [limit, pageNumber, totalPage]);


    if (loading) {
        return <Spinner />
    }

    const handleDeleteProduct = id => {
        if (!user) {
            toast.error("Please login first", { id: "loginFirst" });

        } else {
            const proceed = window.confirm('Are you sure?');
            if (proceed) {
                (async () => {
                    const { data } = await axios.delete(`http://localhost:5000/product/${id}`);
                    if (data) {
                        const remaining = products.filter(service => service._id !== id);
                        setProducts(remaining);
                        toast.success(data.message);
                    }
                })();
            }
        }
    }


    return (
        <div className='py-6 min-h-screen'>
            <PageTitle title={'Blogs'} />
            <div className="container mx-auto lg:px-16 px-3">
                <div className="space-y-3 flex flex-col">
                    {
                        products?.length ?
                            products?.map(product => <SingleProduct handleDeleteProduct={handleDeleteProduct} product={product} key={product._id} />)
                            : <NoDataFound />
                    }
                </div>
                <div className='space-x-2 flex justify-end mt-5'>
                    {
                        [...Array(totalPage).keys()]?.map((number) => <button key={number} onClick={() => setPageNumber(number)} className={` w-10 h-10 bg-gray-100 rounded-sm ${pageNumber === number ? 'bg-black text-white' : ''}`}>{number + 1}</button>)
                    }
                    <select defaultValue={limit} className='w-20 bg-gray-100' onChange={(e) => setLimit(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;