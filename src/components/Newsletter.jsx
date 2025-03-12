import React from 'react'
import background from '../assets/images/background1.jpg'

const Newsletter = () => {
    return (
        <div
            className="h-[350px] bg-center bg-no-repeat bg-cover text-white flex items-center justify-center mx-20 flex-col gap-10 mb-10"
            style={{ backgroundImage: `url(${background})` }}>
            <div className="text-center flex flex-col gap-2">
                <h2 className="text-5xl font-bold mb-2">Join Newsletter</h2>
                <p>Sign up with us for updates on new books, educational tours, and inspirational messages.</p>
            </div>
            <div className='flex gap-5'>
                <input type="email" name="email" id="" placeholder='Please enter your email' className='bg-amber-50 p-5 p w-60 h-12 rounded-4xl focus:outline-none text-black' />
                <button type="submit" className='bg-red-600 px-6 py-3 rounded-4xl '>Subscribe</button>
            </div>
        </div>

    )
}

export default Newsletter