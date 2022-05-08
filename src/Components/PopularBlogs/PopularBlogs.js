import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PopularSingleBlog from '../PopularSingleBlog/PopularSingleBlog';
import Spinner from '../Spinner/Spinner';

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const {data} = await axios.get('http://localhost:5000/popularBlog');
            setBlogs(data.data);
            setLoading(false);
            
        })();
        
    },[]);

    if(loading){
        return <Spinner/>
    }

    return (
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div data-aos="zoom-in" data-aos-duration="1000" className='space-y-2 text-center mb-10'>
                    <h2 className="text-2xl">Popular Blogs</h2>
                    <p>See all the pupular blogs</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                    {
                        blogs?.map(blog => <PopularSingleBlog loading={loading} key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PopularBlogs;