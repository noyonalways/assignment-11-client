import React from 'react';

const PopularBlogs = () => {
    return (
        <section>
            <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
                <div className='space-y-2 text-center mb-10'>
                    <h2 className="text-2xl">Popular Blogs</h2>
                    <p>See all the pupular blogs</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://gostro.familab.net/wp-content/uploads/2021/12/pdp_jasper-package-1a_main_front_20161123_19-1.jpg" alt="blog" />

                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                        <div className="mt-4">
                            <a href="!#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://gostro.familab.net/wp-content/uploads/2021/12/pdp_jasper-package-1a_main_front_20161123_19-1.jpg" alt="blog" />

                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                        <div className="mt-4">
                            <a href="!#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                        </div>
                    </div>
                    <div className="p-6">
                        <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://gostro.familab.net/wp-content/uploads/2021/12/pdp_jasper-package-1a_main_front_20161123_19-1.jpg" alt="blog" />

                        <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Short headline.</h1>
                        <p className="mx-auto text-base leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>

                        <div className="mt-4">
                            <a href="!#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularBlogs;