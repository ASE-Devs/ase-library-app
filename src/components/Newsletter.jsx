import React from 'react'
import background from '../assets/images/background1.jpg'

const Newsletter = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '100px',
                margin: '20px'
            }
        }>


        </div>
    )
}

export default Newsletter