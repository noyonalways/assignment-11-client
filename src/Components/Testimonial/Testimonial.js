import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import Spinner from '../Spinner/Spinner';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await axios.get('https://salty-refuge-04381.herokuapp.com/testimonial')
            setTestimonials(data?.data);
            setLoading(false);
        })();


    }, []);

    if (loading) {
        return <Spinner />
    }

    return (
        <section className='py-20 mb-10'>
            <div className="container mx-auto lg:px-24">
                <div className='mb-10' data-aos="zoom-in" data-aos-duration="1000">
                    <h2 className="text-center text-2xl">What our client says</h2>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                    {
                        testimonials?.map(testimonial => <SingleTestimonial key={testimonial._id} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;