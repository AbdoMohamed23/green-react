import React from 'react';
import aboutimg from '../images/green.jpg';

const About = () => {
    return (
        <div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutimg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5'>The unseen of spending three years at pixelgrade</h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate dolorem quam odit natus? Incidunt exercitationem itaque mollitia quas, voluptatibus sit? Unde delectus quas, aliquid voluptas quasi consequuntur ipsam exercitationem accusamus laudantium enim voluptatem maxime dolores! Cum aspernatur aliquid dolorum natus repudiandae eaque, eum perspiciatis, recusandae tempore pariatur incidunt soluta libero suscipit distinctio laboriosam esse sapiente magni. Asperiores similique unde, fugit veniam provident eos iure qui animi sint aspernatur, error id omnis voluptate impedit nulla corporis? Consequuntur et laborum officiis possimus.</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
            
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 '>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                         <h2 className='text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3'>Helping a local <br /> <span className='text-brandprimary'>business reinvent itself</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGray mb-8'>We reacted here with our hard work and dedication</p>
                    </div>

                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/images/1.jpg" className='w-20 rounded-full' alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        
                            <div className='flex items-center gap-4'>
                                <img src="/src/images/2.jpg" className='w-20 rounded-full' alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>46,328</h4>
                                    <p>Event Bookings</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/images/3.jpg" className='w-20 rounded-full' alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>245,867</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        
                            <div className='flex items-center gap-4'>
                                <img src="/src/images/4.jpg" className='w-20 rounded-full' alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGray font-semibold'>1,485,341</h4>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
