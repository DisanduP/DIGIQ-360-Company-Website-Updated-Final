import { Code, Palette, Rocket, Globe, Smartphone, Zap } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Eye-catching designs that capture your brand essence and engage users.',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Strategic campaigns to boost your online presence and reach.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast solutions optimized for speed and efficiency.',
  },
  {
    icon: Rocket,
    title: 'Product Launch',
    description: 'End-to-end product development from concept to successful launch.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-white border-gray-200 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Icon className="text-purple-600 group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}