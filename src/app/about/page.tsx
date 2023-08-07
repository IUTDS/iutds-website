"use client"

import React from 'react'
import Map from '@/components/Map'

const page = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non risus vitae
          lacus blandit ullamcorper a ac velit. Fusce luctus ante ut sapien consequat, in
          hendrerit ipsum scelerisque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, est! Perspiciatis, voluptate tenetur nulla ratione odit hic officia. Mollitia assumenda consectetur impedit eum nobis sapiente, autem saepe. Voluptatibus, explicabo iste!
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non risus vitae
          lacus blandit ullamcorper a ac velit. Fusce luctus ante ut sapien consequat, in
          hendrerit ipsum scelerisque.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Life after IUTDS</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non risus vitae
          lacus blandit ullamcorper a ac velit. Fusce luctus ante ut sapien consequat, in
          hendrerit ipsum scelerisque.
        </p>
      </section>

      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <div className='flex flex-row'>
        <div className='basis-1/2'>
          <div className='mb-4'>
            <h3 className="text-xl font-bold mb-4">Moderator</h3>
            <p className="text-gray-600 mb-2">Dr. A.R.M Harunur Rashid</p>
            <p className="text-gray-600 mb-2">Email: a_rashid@iut-dhaka.edu</p>
            <p className="text-gray-600 mb-4">Phone: +880-1844-056-105</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-xl font-bold mb-4">President</h3>
            <p className="text-gray-600">Sakif Ahbab</p>
            <p className="text-gray-600">Email: president@example.com</p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
            <h3 className="text-xl font-bold mb-4">Vice President</h3>
            <p className="text-gray-600">Alice Smith</p>
            <p className="text-gray-600">Email: vicepresident@example.com</p>
          </div>
        </div>
        <div className='basis-1/2 text-center drop-shadow-xl'>
          <Map />
        </div>
      </div>

    </div>
  )
}

export default page
