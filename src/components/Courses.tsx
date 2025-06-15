import React from 'react';
import { Globe, Database, Brain, Code2, Clock, MapPin, IndianRupee } from 'lucide-react';

interface CoursesProps {
  onJoinClick: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onJoinClick }) => {
  const courses = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn HTML, CSS, JavaScript, React and host your websites online.',
      fee: '8,000',
      mode: 'Offline + Online',
      icon: Globe,
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Data Analytics',
      description: 'Master Excel, SQL, Python, Power BI and real-world data projects.',
      fee: '10,000',
      mode: 'Offline',
      icon: Database,
      color: 'green',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'AI & Machine Learning',
      description: 'Learn Machine Learning, Python, and build smart apps.',
      fee: '12,000',
      mode: 'Online Only',
      icon: Brain,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Programming Fundamentals',
      description: 'Understand coding with C, C++, Java with real coding practice.',
      fee: '6,000',
      mode: 'Offline',
      icon: Code2,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of programming courses designed to take you from beginner to professional level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Course Header */}
                <div className={`bg-gradient-to-r ${course.gradient} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{course.title}</h3>
                      <p className="text-white/90 mt-1">{course.description}</p>
                    </div>
                  </div>
                </div>

                {/* Course Details */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <IndianRupee className="h-5 w-5" />
                        <span className="font-medium">Fees:</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">₹{course.fee}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span className="font-medium">Mode:</span>
                      </div>
                      <span className="text-gray-900 font-medium">{course.mode}</span>
                    </div>
                  </div>

                  <button
                    onClick={onJoinClick}
                    className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg`}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Courses?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Timing</h4>
                <p className="text-gray-600">Choose from morning, evening, or weekend batches</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Code2 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Hands-on Projects</h4>
                <p className="text-gray-600">Build real-world projects for your portfolio</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Mentors</h4>
                <p className="text-gray-600">Learn from industry professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;