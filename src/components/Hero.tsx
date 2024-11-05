import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <section className="relative bg-gray-100" id='hero' ref={ref}>
      {/* Tilt Divider */}
      <div className="absolute top-[100px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="absolute block w-full h-12 text-gray-100 transform -translate-y-1/2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,208C672,203,768,181,864,176C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 md:py-24 lg:py-32 space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4"
          initial={{ x: -100, opacity: 0 }} // Start from the left
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animate to original position and full opacity
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-blue-900 roboto"
            initial={{ opacity: 0 }} // Start hidden
            animate={inView ? { opacity: 1 } : {}} // Animate to full opacity
            transition={{ duration: 0.5, delay: 0.2 }} // Delay for sequential appearance
          >
            Medynex
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0 }} // Start hidden
            animate={inView ? { opacity: 1 } : {}} // Animate to full opacity
            transition={{ duration: 0.5, delay: 0.4 }} // Delay for sequential appearance
          >
            Revolutionizing healthcare with advanced AI solutions to make medical services more accessible and effective.
          </motion.p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <motion.a
              href='/app-release-2.apk'
              download={true}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              initial={{ opacity: 0 }} // Start hidden
              animate={inView ? { opacity: 1 } : {}} // Animate to full opacity
              transition={{ duration: 0.5, delay: 0.6 }} // Delay for sequential appearance
            >
              Download Our Prototype Apk
            </motion.a>
            <motion.a
              href='/white-paper.pdf'
              download={true}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              initial={{ opacity: 0 }} // Start hidden
              animate={inView ? { opacity: 1 } : {}} // Animate to full opacity
              transition={{ duration: 0.5, delay: 0.8 }} // Delay for sequential appearance
            >
              Read Our White Paper
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex-1 w-full"
          initial={{ x: 100, opacity: 0 }} // Start from the right
          animate={inView ? { x: 0, opacity: 1 } : {}} // Animate to original position and full opacity
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <video
            src="/medynex-hero.mp4" // Replace with the actual video path
            autoPlay
            loop
            muted
            controls={false}
            className="w-full rounded-lg shadow-lg"
          ></video>
        </motion.div>
      </div>

      {/* Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="absolute block w-full h-12 text-gray-100 transform translate-y-1/2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,192C96,160,192,96,288,101.3C384,107,480,181,576,197.3C672,213,768,171,864,144C960,117,1056,107,1152,133.3C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
