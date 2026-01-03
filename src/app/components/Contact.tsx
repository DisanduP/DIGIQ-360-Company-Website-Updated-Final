import { useState } from 'react';
import { Mail, Users, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - currently just a mock
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your digital transformation? Let's discuss your project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="text-purple-600" size={24} />
            </div>
            <h4 className="mb-2 text-gray-900">Email Us</h4>
            <p className="text-gray-600">contact@digiq360.com</p>
          </Card>

          <Card className="p-6 text-center bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h4 className="mb-2 text-gray-900">Call Us</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </Card>

          <Card className="p-6 text-center bg-white border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Monitor className="text-purple-600" size={24} />
            </div>
            <h4 className="mb-2 text-gray-900">Visit Us</h4>
            <p className="text-gray-600">San Francisco, CA</p>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-white border-gray-200 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-gray-700">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-gray-300 focus:border-purple-600"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-gray-300 focus:border-purple-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-gray-700">Subject</label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                required
                className="border-gray-300 focus:border-purple-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                required
                className="border-gray-300 focus:border-purple-600"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}