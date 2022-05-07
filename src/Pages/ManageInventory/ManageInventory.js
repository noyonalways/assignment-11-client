import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import axios from 'axios';
import Spinner from '../../Components/Spinner/Spinner';
import toast from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';


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
            setProducts(data.data);
            setTotalPage(Math.ceil(data.count / limit));
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
                <div className='text-center space-y-3 mb-3'>
                    <h3 className="text-2xl">Add more product</h3>
                    <Link className='inline-block bg-green-400 ring-2 ring-green-400 text-white rounded px-3 py-2 hover:bg-transparent hover:text-green-400' to='/add-product '>Add product </Link>
                </div>
                <div className="space-y-3 flex flex-col items-center justify-center">
                    {
                        products?.length ?
                            products?.map(product => <SingleProduct handleDeleteProduct={handleDeleteProduct} product={product} key={product._id} />)
                            : <div><h2 className="text-3xl text-center">No Product found</h2></div>
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