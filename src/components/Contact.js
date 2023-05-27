import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
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
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
          <h1 className="text-secondary text-5xl flex justify-center Roboto">Contact Form</h1>
          <h2 className="text-lg text-secondary flex justify-center mb-12">Fill out the form to send me an Email</h2>
          <form ref={form} onSubmit={sendEmail} className='shadow-secondary-dark bg-gradient-to-br from-secondary to-secondary-dark grid gap-6 mx-auto w-full md:w-1/2 p-4 rounded-lg shadow-xl text-primary'>
            <label>Name</label>
            <input type="text" name="user_name" className='bg-primary-dark border border-secondary text-secondary-dark text-sm rounded-lg focus:ring-secondary-dark focus:border-secondary-dark block w-full p-2.5' />
            <label>Email</label>
            <input type="email" name="user_email" className='bg-primary-dark border border-secondary text-secondary-dark text-sm rounded-lg focus:ring-secondary-dark focus:border-secondary-dark block w-full p-2.5' />
            <label>Message</label>
            <textarea name="message" className='bg-primary-dark border border-secondary text-secondary-dark text-sm rounded-lg focus:ring-secondary-dark focus:border-secondary-dark block w-full p-2.5' />
            <button type="submit" className='btn border-2 border-primary rounded-xl mx-auto w-2/12 h-10 hover:bg-primary hover:text-secondary-dark'>Send</button>
          </form>
      </section>
    </main>
  );
};