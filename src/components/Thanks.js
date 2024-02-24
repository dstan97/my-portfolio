import React, { useRef, useEffect } from 'react';

export const Thanks = () => {
    useEffect(() => {
      document.title = 'Thank you';
    }, []);
  
    return (
      <main className="">
        <section className="container mx-auto">
            <h1 className="text-secondary text-5xl flex justify-center Roboto">Thank You</h1>
            <h2 className="text-lg text-secondary flex justify-center mb-12">Your message & details have been sent to d.standerwick@hotmail.com</h2>
            <p className='bg-secondary grid gap-6 md:mx-auto w-full md:w-1/2 p-4 md:rounded-lg shadow-xl text-primary'>
                Thanks for checking out my website and my projects. I'll get back to you as soon as possible (Usually within 24 hours at the latest). 
                <br></br>
                <br></br>
                Have a nice day. 
            </p>
        </section>
      </main>
    );
  };