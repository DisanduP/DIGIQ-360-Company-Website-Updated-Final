import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  'Expert team with 10+ years of experience',
  'Cutting-edge technology stack',
  'Client-focused approach',
  'Agile development methodology',
  '24/7 support and maintenance',
  'Proven track record of success',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3Njc0NDA4MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Team"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              About DIGIQ 360
            </h2>
            
            <p className="text-gray-600 text-lg">
              We are a dynamic team of innovators, designers, and developers passionate about 
              creating exceptional digital experiences. Our 360-degree approach ensures every 
              aspect of your digital presence is optimized for success.
            </p>
            
            <p className="text-gray-600 text-lg">
              From startups to enterprise solutions, we've helped businesses of all sizes 
              achieve their digital transformation goals through strategic planning and 
              flawless execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-purple-600" size={14} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}