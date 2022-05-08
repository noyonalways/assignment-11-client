import React from 'react';

const SingleTestimonial = ({ testimonial }) => {
    const { img, name, description } = testimonial
    return (
        <div data-aos="flip-up" data-aos-duration="1500" className="cursor-pointer flex flex-col w-full p-8 text-left shadow-xl lg:mx-auto rounded-xl">
            <p title={description} className="mx-auto text-base leading-relaxed text-gray-500">{description?.length > 100 ? description.slice(0, 100) + "..." : description}</p>
            <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
                {name}
                <span href="#" className=" ml-3 font-semibold text-gray-200 lg:mb-0">facebook</span>
            </h2>
            <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full" src={img} />
        </div>
    );
};

export default SingleTestimonial;