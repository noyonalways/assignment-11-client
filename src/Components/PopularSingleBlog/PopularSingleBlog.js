import React from 'react';

const PopularSingleBlog = ({blog}) => {
    const {img, description, name} = blog;
    
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1500" className="p-6 hover:shadow-md duration-300">
            <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={img} alt="blog" />

            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl" title={name}>{name.length > 18 ? name.slice(0, 18) + ".." : name}</h1>
            <p title={description} className="mx-auto text-base leading-relaxed text-gray-500">{description?.length > 100 ?description.slice(0, 100) + "...": description}</p>

            <div className="mt-4">
                <button className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </button>
            </div>
        </div>
    );
};

export default PopularSingleBlog;