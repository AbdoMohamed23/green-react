import React from 'react';

const Blog = () => {
    const blogs = [
        { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: "/src/images/person_1.jpg" },
        { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: "/src/images/person_4.jpg" },
        { id: 3, title: "Revamping the Membership Model with Triathlon Austrslia", image: "/src/images/person_3.jpg" },
    ];
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='md:w-3/4 text-sm mx-auto text-neutralGray mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorem quam odit natus? Incidunt exercitationem itaque mollitia quas, voluptatibus sit? Unde delectus.</p>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                        <img src={blog.image} alt="" className='hover:scale-95 rounded transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-0'>
                            <h3 className='mb-3 text-neutralGray font-semibold'>{blog.title}</h3>
                            <div className='flex items-center justify-center gap-8'>
                                <a href="/" className='font-bold text-brandprimary hover:text-neutral-700'>Read More</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Blog;
