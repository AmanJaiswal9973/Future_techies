import React from 'react';
import { Calendar, Clock, IndianRupee, Users } from 'lucide-react';

const FeesAndBatches: React.FC = () => {
  const batches = [
    {
      id: 1,
      course: 'Web Development',
      fee: '10,000',
      schedule: 'Mon–Fri (2 PM – 4 PM)',
      duration: '3.5 Months',
      color: 'blue'
    },
    {
      id: 2,
      course: 'Data Management',
      fee: '10,000',
      schedule: 'Mon–Fri (10 AM – 12 PM)',
      duration: '3 Months',
      color: 'green'
    },
    {
      id: 3,
      course: 'Artificial Intelligence & Machine Learning',
      fee: '12,000',
      schedule: 'Weekend (Sat & Sun – 11 AM – 2 PM)',
      duration: '4 Months',
      color: 'purple'
    },
    {
      id: 4,
      course: 'Programming (C, C++, Java)',
      fee: '6,000',
      schedule: 'Mon–Fri (5 PM – 6:30 PM)',
      duration: '2 Months',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-500 to-cyan-500 border-blue-200',
      green: 'from-green-500 to-emerald-500 border-green-200',
      purple: 'from-purple-500 to-pink-500 border-purple-200',
      orange: 'from-orange-500 to-red-500 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="fees" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fees & Batches</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible batch timings and affordable fee structure designed to fit your schedule and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className={`bg-white rounded-2xl shadow-lg border-2 ${getColorClasses(batch.color).split(' ')[2]} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(batch.color).split(' ')[0]} ${getColorClasses(batch.color).split(' ')[1]} p-6 text-white`}>
                <h3 className="text-xl font-bold mb-2">{batch.course}</h3>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Fee */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <IndianRupee className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-medium">Fee:</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">₹{batch.fee}</span>
                </div>

                {/* Schedule */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-medium">Schedule:</span>
                  </div>
                  <span className="text-gray-900 font-medium text-right">{batch.schedule}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="text-gray-600 font-medium">Duration:</span>
                  </div>
                  <span className="text-gray-900 font-medium">{batch.duration}</span>
                </div>

                {/* Seats Available */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 font-medium">Seats Available:</span>
                    </div>
                    <span className="text-green-600 font-bold">Limited Seats</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Batch Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Small Batch Size</h4>
              <p className="text-gray-600">Maximum 15 students per batch for personalized attention</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Start Dates</h4>
              <p className="text-gray-600">New batches start every month</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <IndianRupee className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">EMI Options</h4>
              <p className="text-gray-600">Easy installment plans available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesAndBatches;