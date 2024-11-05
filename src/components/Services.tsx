import React, { useState } from 'react';
import { Modal } from 'antd';

const services = {
  patientSolutions: [
    { title: 'Early Detection', description: 'Identify health issues early for better outcomes.' },
    { title: 'Medication Reminder', description: 'Stay on track with your medication schedule.' },
    { title: 'Virtual Healthcare Assistant', description: 'Access healthcare assistance from anywhere.' },
    { title: 'Report Analysis', description: 'Analyze health reports with AI insights.' },
    { title: 'Nutrition Analysis', description: 'Get personalized nutrition recommendations.' },
    { title: 'Easy Appointment Booking', description: 'Book appointments with ease.' },
    { title: 'Telemedicine Solutions', description: 'Consult with doctors remotely.' },
    { title: 'Doctor & Patient Conversation', description: 'Facilitate communication between doctors and patients.' },
    { title: 'Emergency Support', description: 'Access immediate assistance in emergencies.' },
    { title: 'Book Report', description: 'Easily book your health reports.' },
    { title: 'Protein Calculator', description: 'Calculate your daily protein needs.' },
    { title: 'Billing Solutions', description: 'Simplify the billing process for patients.' },
  ],
  businessSolutions: [
    { title: 'Customizable APIs', description: 'Integrate seamlessly with existing systems.' },
    { title: 'AI Automation', description: 'Automate administrative tasks for efficiency.' },
    { title: 'Enhanced User Experience', description: 'Improve experience with customizable solutions.' },
    { title: 'Own LLM Support', description: 'Utilize our fine-tuned LLM for AI solutions.' },
  ],
};

const ServiceSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<'patient' | 'business' | null>(null);

  const handleOpenModal = (type: 'patient' | 'business') => {
    setSelectedType(type);
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setSelectedType(null);
  };

  const renderSolutions = (type: 'patient' | 'business', className?: string) => {
    const solutions = type === 'patient' ? services.patientSolutions : services.businessSolutions;

    return solutions.map((solution, index) => (
      <div key={index} className={`flex items-start p-4 border rounded-lg shadow-md mb-4 bg-white ${className}`} id='services'>
        <span className="mr-4 text-blue-600">&#x1F4C8;</span> {/* Placeholder for icon */}
        <div>
          <h4 className="font-bold">{solution.title}</h4>
          <p className="text-gray-700">{solution.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <section className="py-16" id='services'>
      <div className="container mx-auto px-6 flex flex-col gap-10">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Our Services</h2>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-10 space-y-8 md:space-y-0">
          {/* Patient Solutions */}
          <div className="w-full md:w-fit">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Patient Solutions</h3>
            <div onClick={() => handleOpenModal('patient')} className="cursor-pointer">
              {renderSolutions('patient', "md:w-[20rem] md:h-[10rem] md:px-10 md:py-10 hover:scale-105 transition-translate duration-200").slice(0, 2)} {/* Show only 2 solutions */}
            </div>
          </div>

          {/* Business Solutions */}
          <div className="w-full md:w-fit">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Business Solutions</h3>
            <div onClick={() => handleOpenModal('business')} className="cursor-pointer">
              {renderSolutions('business', "md:w-[20rem] md:h-[10rem] md:px-10 md:py-10 hover:scale-105 transition-translate duration-200").slice(0, 2)} {/* Show only 2 solutions */}
            </div>
          </div>
        </div>

        {/* Modal for showing all solutions */}
        <Modal
          title={selectedType === 'patient' ? 'Patient Solutions' : 'Business Solutions'}
          open={visible}
          onCancel={handleCloseModal}
          footer={null}
          width={800}
        >
          <div>
            {selectedType === 'patient' ? renderSolutions('patient') : renderSolutions('business')}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ServiceSection;
