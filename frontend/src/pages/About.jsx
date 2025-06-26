import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
        
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi cum repellat necessitatibus amet dicta vel voluptatum, sed assumenda atque impedit tenetur voluptates voluptas, aspernatur, unde quam illum autem iusto officiis.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae velit nemo saepe. Error, voluptates neque corporis, unde quaerat cum eligendi ipsa tenetur quidem voluptatibus officiis quos doloremque, omnis aspernatur nostrum!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam adipisci dolorum velit, explicabo, delectus, eligendi ex reprehenderit sunt optio perspiciatis fugit dolores cum! Dolorum earum, iste perspiciatis nihil eveniet illum atque inventore ducimus ea veniam molestiae neque vitae eum autem?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus illo hic vel, voluptate asperiores corrupti omnis inventore veniam, iusto quia, quaerat perspiciatis voluptatibus ex soluta? Voluptas cumque adipisci cupiditate.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus illo hic vel, voluptate asperiores corrupti omnis inventore veniam, iusto quia, quaerat perspiciatis voluptatibus ex soluta? Voluptas cumque adipisci cupiditate.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus illo hic vel, voluptate asperiores corrupti omnis inventore veniam, iusto quia, quaerat perspiciatis voluptatibus ex soluta? Voluptas cumque adipisci cupiditate.</p>
      </div>
    </div>
    <NewsletterBox/>
    </div>
  )
}

export default About