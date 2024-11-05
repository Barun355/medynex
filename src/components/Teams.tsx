import React from 'react';
import { Card, Col, Row } from 'antd';

const teamMembers = [
  {
    name: 'Avishek Bhattacharjee',
    position: 'Co-Founder & Medical AI Expert',
    description: 'John is the visionary behind Medynex, with over 10 years of experience in healthcare technology.',
    photo: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
  },
  {
    name: 'Satya Prakash Nayak',
    position: 'CTO',
    description: 'Jane leads the tech team, focusing on innovative AI solutions for healthcare.',
    photo: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
  },
  {
    name: 'Haraprasad Hot',
    position: 'CMO & AI Expert',
    description: 'Sam oversees the financial strategy and ensures Medynex is financially healthy.',
    photo: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
  },
  {
    name: 'Anna Taylor',
    position: 'Advisor & Board Member',
    description: 'Anna is responsible for the marketing strategy and brand development at Medynex.',
    photo: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
  },
  {
    name: 'Anna Taylor',
    position: 'Healthcare Expert & Board Member',
    description: 'Anna is responsible for the marketing strategy and brand development at Medynex.',
    photo: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
  },
];

const TeamSection: React.FC = () => {
  return (
    <div className="py-16 px-16 flex flex-col gap-10 text-4xl font-bold text-center text-blue-900 bg-gray-100" id='teams'>
      <h2 className="text-4xl font-bold text-center mb-8">Meet Our Team</h2>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={6} key={index} className='flex justify-center items-center'>
            <Card
              hoverable
              cover={<img alt={member.name} src={member.photo} className="h-48 w-full object-contain rounded-t-md" />}
              className="transition-transform transform hover:scale-105 h-full w-full"
            >
              <Card.Meta title={member.name} description={member.position} />
              <p className="mt-2">{member.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamSection;
