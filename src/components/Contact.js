import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h1z7b6a', 'template_hknnctf', form.current, '3i30GUb85ZnsUxIwM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <main className="">
      <section className="container mx-auto">
          <h1 className="text-secondary text-5xl flex justify-center Roboto">Contact Form</h1>
          <h2 className="text-lg text-secondary flex justify-center mb-12">Fill out the form to send me an Email</h2>
          <form action="https://formsubmit.co/d.standerwick@hotmail.com" method="POST" className='bg-secondary grid gap-6 md:mx-auto w-full md:w-1/2 p-4 md:rounded-lg shadow-xl text-primary'>
            <label>Name</label>
            <input type="text" name="user_name" className='bg-primary border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary-dark focus:border-secondary-dark block w-full p-2.5' />
            <label>Email</label>
            <input type="email" name="user_email" className='bg-primary border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary-dark focus:border-secondary-dark block w-full p-2.5' />
            <label>Message</label>
            <textarea name="message" className='bg-primary border border-secondary text-secondary text-sm rounded-lg focus:ring-secondary-dark focus:border-secondary-dark block w-full p-2.5' />
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>
            <button type="submit" className='btn border-2 border-primary rounded-xl mx-auto w-2/12 h-10 hover:bg-primary hover:text-secondary'>Send</button>
          </form>
      </section>
    </main>
  );
};