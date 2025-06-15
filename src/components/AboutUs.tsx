import React from 'react';
import { Users, Target, BookOpen, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower students with cutting-edge programming skills and prepare them for successful careers in technology.'
    },
    {
      icon: BookOpen,
      title: 'Vision',
      description: 'To be the leading technical institute that bridges the gap between academic learning and industry requirements.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality education with industry-relevant curriculum and expert faculty.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of tech professionals who support and inspire each other.'
    }
  ];

  const team = [
    {
      name: 'Aman Jaiswal',
      role: 'Founder & Director',
      experience: '15+ years in Tech Education',
      expertise: 'Full Stack Development, AI/ML'
    },
    {
      name: 'Sneha Agarwal',
      role: 'Lead Instructor - Web Development',
      experience: '8+ years at Google, Microsoft',
      expertise: 'React, Node.js, Cloud Technologies'
    },
    {
      name: 'Vikram Singh',
      role: 'Data Science Lead',
      experience: '10+ years in Data Analytics',
      expertise: 'Python, Machine Learning, Big Data'
    }
  ];

  const facilities = [
    'State-of-the-art computer labs',
    'High-speed internet connectivity',
    'Modern classrooms with projectors',
    'Library with technical books',
    'Dedicated project rooms',
    'Career counseling center'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2018, FutureTechies has been at the forefront of technical education, 
            transforming lives through quality programming education and industry-focused training.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to democratize quality tech education, FutureTechies started as a small 
                  initiative to bridge the skill gap in the programming industry. Over the years, we have grown 
                  into a premier institution known for our practical approach to learning.
                </p>
                <p>
                  Our curriculum is continuously updated to match industry standards, ensuring our students 
                  are job-ready from day one. We believe in hands-on learning, real-world projects, and 
                  mentorship that goes beyond the classroom.
                </p>
                <p>
                  Today, we proudly serve students from diverse backgrounds, helping them achieve their 
                  career goals in web development, data analytics, AI/ML, and programming fundamentals.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-600">Hiring Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                <p className="text-gray-500 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;