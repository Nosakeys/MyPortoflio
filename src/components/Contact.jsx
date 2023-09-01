import React from 'react'

const Contact = () => {
  return (
    <div name= 'contact' className='w-full h-[93svh] sm:h-screen bg-[#0a192f] flex justify-center items-center px-4 pt-20'>
        <form method='POST' action="https://getform.io/f/c365842e-0096-46b1-ada5-13c006a1d129" className='flex flex-col max-w-[600px] w-full h-full'>
            <div className='pb-5'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below to get in touch with me</p>
            </div>
            <input className='bg-[#ccd66f6] p-2 rounded-[4px]' type="text"  placeholder='Name' name = 'name' />
            <input className='my-4 p-2 bg-[#ccd66f6] rounded-[4px]' type="email"  placeholder='E-mail' name = 'email' />
            <textarea className='bg-[#ccd66f6] p-2 rounded-[4px]'  name="message"  rows="10" placeholder='Message'></textarea>
            <button className=' text-white  sm:border-[1px] sm:hover:bg-[#5a3f2c] sm:hover:border-[#a18674] px-4 py-4 my-8 mx-auto flex items-center sm:rounded-[4px] hover:rounded bg-gradient-to-r to-pink-900 from-amber-900 rounded-lg sm:border-red-400 hover:font-bold'>Let's Collaborate</button>
        </form>
        
      <footer>
       
      </footer>

    </div>
  )
}

export default Contact