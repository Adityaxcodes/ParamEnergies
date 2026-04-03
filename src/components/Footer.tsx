import { Droplets, Navigation } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-deep text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets size={24} />
              <span className="font-heading font-bold text-lg">Param Energy & Filtrations</span>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Your trusted partner for clean water solutions. We deliver quality filtration systems for every need.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Location</h4>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
              <a
                href="https://maps.app.goo.gl/KXCzWrWQqt5Hso1G9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <Navigation size={16} />
                </span>
                Open in Maps
              </a>
              <p className="mt-3 text-sm opacity-70 leading-relaxed">
                Krishna Market ,shop no. 9,Chandpura road, Rani Sati Rd, Rajasthan 332001
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Monday – Saturday: 9 AM – 7 PM</p>
              <p>Sunday: Closed</p>
              <div className="mt-4 opacity-100 font-medium space-y-1">
                <p>Contact 1: 9829377055</p>
                <p>Contact 2: 9261060009</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Param Energy & Filtrations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
