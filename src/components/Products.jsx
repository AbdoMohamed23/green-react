import React from 'react';
import aboutimg from '../images/green.jpg';
import fan from '../images/fan 2.jpg';

const Products = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='products'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutimg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorem quam odit natus? Incidunt exercitationem itaque mollitia quas, voluptatibus sit? Unde delectus quas, aliquid voluptas quasi consequuntur ipsam exercitationem accusamus laudantium enim voluptatem maxime dolores! Cum aspernatur aliquid dolorum natus repudiandae eaque, eum perspiciatis, recusandae tempore pariatur incidunt soluta libero suscipit distinctio laboriosam esse sapiente magni. Asperiores similique unde, fugit veniam provident eos iure qui animi sint aspernatur, error id omnis voluptate impedit nulla corporis? Consequuntur et laborum officiis possimus.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/3'>
                        <img src={fan} className='w-48 pl-6' alt="" />
                    </div>

                    <div className='md: w-2/3 mx-auto'>
                        <div>
                            <p className='md:w-4/5 text-sm text-neutralGray leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel ratione culpa officia, blanditiis doloribus eligendi sit deleniti porro illo suscipit possimus alias nostrum tempore dignissimos nulla ipsa sunt? Reprehenderit inventore possimus accusamus, error recusandae dolorem! Impedit adipisci ipsum laborum at, nihil laudantium aperiam  dolor? Suscipit dignissimos in laboriosam excepturi est fuga repellendus recusandae ipsum non facilis cum, magnam cupiditate quibusdam exercitationem voluptate illum nostrum aliquid molestias minima omnis sapiente quis! Temporibus qui nesciunt mollitia, facilis asperiores eveniet quisquam dolorum sunt eligendi quae alias, adipisci nostrum quidem quia sed aspernatur aperiam. Sit placeat optio maiores nisi omnis assumenda doloribus alias.</p>
                            <h5 className='text-brandprimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-base text-neutralGray mb-8'>British Oragon Boat Becing Association</p>
                            <div>
                                <div className='flex items-center gap-8 flex-wrap'>
                                    <img src="/src/images/img 1.jpg" className='cursor-pointer w-10' alt="" />
                                    <img src="/src/images/img 2.jpg" className='cursor-pointer w-10' alt="" />
                                    <img src="/src/images/img 3.jpg" className='cursor-pointer w-10' alt="" />
                                    <img src="/src/images/img 4.jpg" className='cursor-pointer w-10' alt="" />
                                    <img src="/src/images/img 5.jpg" className='cursor-pointer w-10' alt="" />
                                    <img src="/src/images/img 6.jpg" className='cursor-pointer w-10' alt="" />
                                    <div className='flex items-center gap-8'>
                                        <a href="/" className='font-bold text-brandprimary hover:text-neutral-700'>all customers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
