import React from 'react';
import { Code, Palette, Megaphone, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, responsive websites built with modern technologies like React and Tailwind CSS.',
    icon: <Code size={48} />,
  },
  {
    title: 'Graphic Design',
    description: 'Visually appealing designs for branding, marketing materials, and user interfaces.',
    icon: <Palette size={48} />,
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, content marketing, and social media management.',
    icon: <Megaphone size={48} />,
  },
  {
    title: 'AI Optimization',
    description: 'Leveraging AI technologies to improve user experiences, optimize workflows, and streamline processes.',
    icon: <Cpu size={48} />,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="text-indigo-600 mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;