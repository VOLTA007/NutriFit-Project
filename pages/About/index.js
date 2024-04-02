import { motion } from 'framer-motion'
import React from 'react'


const About = () => {
  return (
    <motion.div className='h-full' initial={{y:"200vh"}} animate={{y:"0%"}} exit={{y:"-200vh"}} transition={{duration:0.5}}>
    <div style={{paddingTop: "40px"}}></div>
      <div className="container mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">About NutriFit</h1>
              <p className="mb-4">
                  NutriFit is a leading academy dedicated to promoting fitness, gymnastics, and nutrition education. Founded by Dr. Abdelrahman, a renowned expert with extensive experience and certifications in the field of nutrition and fitness, NutriFit aims to empower individuals to lead healthier lifestyles through a holistic approach.
              </p>
              <p className="mb-4">
                  At NutriFit, we believe in the power of knowledge and education to transform lives. Our comprehensive programs are designed to provide participants with the tools and resources they need to achieve their fitness and nutrition goals. Whether you're a beginner looking to learn the basics of gymnastics or an advanced athlete seeking to optimize your performance, NutriFit has something for everyone.
              </p>
              <p className="mb-4">
                  Our team of experienced trainers and nutritionists are committed to providing personalized guidance and support to help you reach your full potential. From customized workout plans to tailored nutrition advice, we're here to help you every step of the way on your fitness journey.
              </p>
              <p className="mb-4">
                  Join NutriFit today and embark on a journey towards better health and wellness. Together, we can achieve greatness!
              </p>
          </div>
          <div style={{paddingBottom: "100px"}}></div>
    </motion.div>
  )
}

export default About