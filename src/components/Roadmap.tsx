import React from 'react';
import { Timeline } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RoadmapSection: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  // Define the animations
  const animations = {
    mobile: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
    },
    desktop: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-16 flex flex-col items-center" id="roadmap" ref={ref}>
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Roadmap</h2>
      <Timeline mode={isMobile ? 'left' : 'alternate'} className="flex flex-col items-center py-10">
        {/* Phase 1 */}
        <Timeline.Item
          color="red"
          className="transition-transform transform hover:scale-105 rounded-lg p-4 cursor-pointer"
        >
          <motion.div
            initial={isMobile ? animations.mobile.initial : animations.desktop.initial}
            animate={inView ? animations.mobile.animate : { opacity: 0, x: isMobile ? 20 : -100 }} // Reset to initial if not in view
            transition={animations.mobile.transition}
          >
            <div className="inline-block hover:bg-red-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Phase 1 - Functional Prototype</h3>
              <p className="mt-2">
                In this phase, we will develop a fully functional Android application. It will include core features like
                appointment booking, patient-doctor communication, report analysis, and telemedicine services, providing a
                seamless user experience for both patients and healthcare providers.
              </p>
            </div>
          </motion.div>
        </Timeline.Item>

        {/* Phase 2 */}
        <Timeline.Item
          color="blue"
          className="transition-transform transform hover:scale-105 rounded-lg p-4 cursor-pointer"
        >
          <motion.div
            initial={isMobile ? animations.mobile.initial : animations.desktop.initial}
            animate={inView ? animations.mobile.animate : { opacity: 0, x: isMobile ? 20 : 100 }} // Animate from right for mobile and left for desktop
            transition={animations.mobile.transition}
          >
            <div className="inline-block hover:bg-blue-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Phase 2 - Advanced AI Integration</h3>
              <p className="mt-2">
                In the second phase, we will integrate a symptoms checker and risk factor calculator. These AI-driven tools
                will allow users to input their symptoms and receive early-stage diagnosis suggestions and risk assessments
                for various conditions, further enhancing patient care.
              </p>
            </div>
          </motion.div>
        </Timeline.Item>

        {/* Phase 3 */}
        <Timeline.Item
          color="green"
          className="transition-transform transform hover:scale-105 rounded-lg p-4 cursor-pointer"
        >
          <motion.div
            initial={isMobile ? animations.mobile.initial : animations.desktop.initial}
            animate={inView ? animations.mobile.animate : { opacity: 0, x: isMobile ? 20 : -100 }} // Animate from left for desktop
            transition={animations.mobile.transition}
          >
            <div className="inline-block hover:bg-green-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Phase 3 - Launching on Web & iOS</h3>
              <p className="mt-2">
                In the final phase, we will expand the app’s availability by launching it on iOS and web platforms,
                ensuring accessibility across multiple devices and a wider audience.
              </p>
            </div>
          </motion.div>
        </Timeline.Item>

        {/* Phase 4 */}
        <Timeline.Item
          color="purple"
          className="transition-transform transform hover:scale-105 rounded-lg p-4 cursor-pointer"
        >
          <motion.div
            initial={isMobile ? animations.mobile.initial : animations.desktop.initial}
            animate={inView ? animations.mobile.animate : { opacity: 0, x: isMobile ? 20 : 100 }} // Animate from right for mobile and left for desktop
            transition={animations.mobile.transition}
          >
            <div className="inline-block hover:bg-purple-200 p-4 rounded-md">
              <h3 className="text-lg font-semibold">Phase 4 - IoT Integration</h3>
              <p className="mt-2">
                This phase will introduce integration with wearable health devices. The app will collect real-time health
                data, such as heart rate and physical activity, to provide patients and doctors with more personalized
                insights.
              </p>
            </div>
          </motion.div>
        </Timeline.Item>
      </Timeline>
    </section>
  );
};

export default RoadmapSection;
