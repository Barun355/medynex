import React from 'react';
import { Card, Col, Row } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const visionData = [
  {
    title: 'Innovation',
    description: 'Pioneering new solutions to enhance healthcare with cutting-edge technology.',
    image: 'https://images.squarespace-cdn.com/content/v1/5daddb33ee92bf44231c2fef/60533e7f-5ab0-4913-811c-9a4c56e93a5c/AI-in-healthcare2.jpg?format=2500w',
  },
  {
    title: 'Patient-Centric',
    description: 'Ensuring the best experience for patients with user-focused services.',
    image: 'https://rejolut.com/wp-content/uploads/2023/08/AI-in-Healthcare.jpg',
  },
  {
    title: 'Collaboration',
    description: 'Working together with healthcare providers for optimal outcomes.',
    image: 'https://nextgeninvent.com/wp-content/uploads/2024/03/Use-Cases-of-Generative-AI-in-Healthcare.png.webp',
  },
  {
    title: 'Trust & Security',
    description: 'Upholding the highest standards of data privacy and patient trust.',
    image: 'https://dq8l4o3au0fto.cloudfront.net/image-handler/ts/20231204103339/ri/750/src/images/Article_Images/ImageForArticle_133_17017472186131713.jpg',
  },
];

const VisionSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true
  });

  return (
    <div className="py-20 px-8 bg-gray-100" ref={ref}>
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-20">Our Vision Pillars</h2>
      <Row gutter={[16, 16]} justify="center">
        {visionData.map((pillar, index) => (
          <Col xs={24} sm={24} md={12} lg={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView? { opacity: 1, y: 0 }: {}}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true }} // Trigger only once when in view
            >
              <Card
                hoverable
                className="rounded-xl shadow-lg"
                cover={<img alt={pillar.title} src={pillar.image} className="md:h-[18rem] object-cover rounded-t-xl" />}
              >
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2">{pillar.description}</p>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VisionSection;
