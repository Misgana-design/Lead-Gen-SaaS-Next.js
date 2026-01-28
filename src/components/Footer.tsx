export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h3 className="text-white font-bold text-lg mb-4 italic">
            LOCAL<span className="text-blue-500">BIZ</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Helping local professionals grow their business with modern digital
            tools and seamless booking experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-blue-500 transition">
                Admin Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact/Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <p className="text-sm mb-4">
            © 2026 LocalBiz SaaS. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Simple social placeholders */}
            <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-blue-500 transition cursor-pointer" />
            <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-blue-500 transition cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
