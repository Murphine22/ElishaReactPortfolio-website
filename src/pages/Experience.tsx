import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Web Developer',
    company: 'Tech Innovations Inc.',
    period: '2018 - Present',
    description: 'Lead developer for high-profile client projects, mentoring junior developers, and implementing best practices.',
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Global Marketing Solutions',
    period: '2015 - 2018',
    description: 'Managed SEO campaigns, social media strategies, and targeted advertising for diverse clients.',
  },
  {
    title: 'Graphic Designer',
    company: 'Creative Designs Co.',
    period: '2012 - 2015',
    description: 'Created visually appealing designs for various marketing materials and branding projects.',
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Web Services',
    period: '2010 - 2012',
    description: 'Developed and maintained websites for small to medium-sized businesses using WordPress and custom PHP solutions.',
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Briefcase size={24} className="text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
            </div>
            <p className="text-gray-600 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;