import React from 'react'

const Background = ({ children }) => {
    return <div className='bg-white dark:bg-gray-800 h-screen flex-1 flex flex-col overflow-hidden'>{children}</div>
}

export default Background
