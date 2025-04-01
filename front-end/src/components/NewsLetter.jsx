import React from 'react'

const NewsLetter = () => {

const onSubmitHandler =(event)=>{
    event.preventDefault();
}

  return (
    <div className='text-center'>
        <p className='text-3xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum laudantium tempore recusandae, veritatis in dignissimos vero consectetur molestias unde culpa vel, sint ducimus iste quia asperiores officiis. Consequatur, repellat.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetter
