import React from 'react'
import Images from '../../assets/polk.jpg'
const About = () => {
  return (
    <div className="lg:w-100%">
   
    <div className="bg-gray-100 min-h-screen mb-[3px] px-[40px]  min-w-screen">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-9">
          <div className="md:w-[360px]">
            <img
              src={Images}
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 mb-4">
            Our platform sparkles with a diverse constellation of freelancers, each shining in their own field of expertise. From coding wizards to design maestros, writing virtuosos to marketing sages, you'll find the perfect match here.
            </p>
              <h2 className='font-bold text-xl'>Our Journey</h2>
            <p className="text-gray-700 mb-4">
            Our story began with a simple yet powerful idea: to create a space that unites remarkable freelancers with clients seeking excellence. From that spark, we've grown into a bustling hub where innovation and passion intertwine, producing outstanding results every step of the way.
            </p>
            <h1 className='font-bold text-xl'>Company Foundation</h1>
            <p className="text-gray-700 mb-4">
            Gig Pawa Freelancing Company is a thriving platform connecting skilled freelancers and clients across various industries. Founded with a focus on quality and diversity, it offers a user-friendly interface, transparent transactions, and constant innovation. Services include web development, design, writing, marketing, and more. It's a community for clients to find talent and freelancers to access global opportunities. Exceptional work and collaboration define Gig Pawa's essence.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default About