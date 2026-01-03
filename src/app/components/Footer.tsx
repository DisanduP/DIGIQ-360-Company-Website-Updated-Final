export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
              DIGIQ 360
            </h3>
            <p className="text-gray-400">
              Transforming businesses through innovative technology and creative excellence.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Creative Design</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DIGIQ 360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
