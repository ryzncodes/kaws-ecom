import React from 'react'

const Home = () => {
  return (
    <>

      HeroBanner

      <div className='text-center p-4 flex flex-col'>
        <h2 className='text-5xl font-bold text-gray-800 py-2'>KAWS on a Budget.</h2>
        <p className='text-lg text-gray-500'>High Quality Replicas.</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      Footer
    </>
  )
}

export default Home
