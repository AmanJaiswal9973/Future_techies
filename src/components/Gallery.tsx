import React from 'react';
import { Trophy, Award, Users, Star, Briefcase, GraduationCap } from 'lucide-react';

const Gallery: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: '500+ Students Placed',
      description: 'Successfully placed in top tech companies',
      icon: Briefcase,
      color: 'blue',
      stat: '500+'
    },
    {
      id: 2,
      title: 'Industry Recognition',
      description: 'Best Coding Institute Award 2023',
      icon: Award,
      color: 'yellow',
      stat: '2023'
    },
    {
      id: 3,
      title: 'Student Success Rate',
      description: '95% of our students land their dream jobs',
      icon: Trophy,
      color: 'green',
      stat: '95%'
    },
    {
      id: 4,
      title: 'Alumni Network',
      description: 'Strong community of 1000+ tech professionals',
      icon: Users,
      color: 'purple',
      stat: '1000+'
    },
    {
      id: 5,
      title: 'Course Rating',
      description: 'Highly rated courses by students',
      icon: Star,
      color: 'orange',
      stat: '4.9/5'
    },
    {
      id: 6,
      title: 'Years of Excellence',
      description: 'Serving the tech community since 2018',
      icon: GraduationCap,
      color: 'indigo',
      stat: '5+'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Software Developer at TCS',
      course: 'Web Development',
      content: 'The practical approach and project-based learning helped me land my dream job. The instructors are amazing!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Data Analyst at Wipro',
      course: 'Data Analytics',
      content: 'Excellent curriculum and hands-on training. I gained confidence in handling real-world data projects.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      role: 'ML Engineer at Infosys',
      course: 'AI & Machine Learning',
      content: 'The AI/ML course was comprehensive and up-to-date with industry standards. Highly recommended!',
      rating: 5
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; icon: string; gradient: string } } = {
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600', gradient: 'from-blue-500 to-cyan-500' },
      yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600', gradient: 'from-yellow-500 to-orange-500' },
      green: { bg: 'bg-green-100', icon: 'text-green-600', gradient: 'from-green-500 to-emerald-500' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600', gradient: 'from-purple-500 to-pink-500' },
      orange: { bg: 'bg-orange-100', icon: 'text-orange-600', gradient: 'from-orange-500 to-red-500' },
      indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600', gradient: 'from-indigo-500 to-blue-500' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating our journey of excellence in technical education and student success stories.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            const colorClasses = getColorClasses(achievement.color);
            
            return (
              <div
                key={achievement.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="p-6 text-center">
                  <div className={`${colorClasses.bg} p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-10 w-10 ${colorClasses.icon}`} />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${colorClasses.gradient} bg-clip-text text-transparent mb-2`}>
                    {achievement.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Student Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">{testimonial.course} Graduate</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Join Our Success Story</h3>
          <p className="text-xl mb-6">Be part of our growing community of successful tech professionals</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;