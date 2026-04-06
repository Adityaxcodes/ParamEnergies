import { Droplets, Navigation } from "lucide-react";
import { TextAnimate } from "@/registry/magicui/text-animate";

const Footer = () => {
  return (
    <footer className="gradient-deep text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets size={24} />
              <TextAnimate as="span" animation="slideUp" by="word" className="font-heading font-bold text-lg">
                Param Energy & Filtrations
              </TextAnimate>
            </div>
            <TextAnimate
              as="p"
              animation="slideUp"
              by="word"
              className="text-sm opacity-70 leading-relaxed"
            >
              Your trusted partner for clean water solutions. We deliver quality filtration systems for every need.
            </TextAnimate>
          </div>
          <div>
            <TextAnimate as="h4" animation="slideUp" by="word" className="font-heading font-semibold mb-4">
              Quick Links
            </TextAnimate>
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
            <TextAnimate as="h4" animation="slideUp" by="word" className="font-heading font-semibold mb-4">
              Location
            </TextAnimate>
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
              <TextAnimate
                as="p"
                animation="slideUp"
                by="word"
                className="mt-3 text-sm opacity-70 leading-relaxed"
              >
                Krishna Market ,shop no. 9,Chandpura road, Rani Sati Rd, Rajasthan 332001
              </TextAnimate>
            </div>
          </div>
          <div>
            <TextAnimate as="h4" animation="slideUp" by="word" className="font-heading font-semibold mb-4">
              Business Hours
            </TextAnimate>
            <div className="space-y-2 text-sm opacity-70">
              <TextAnimate as="p" animation="slideUp" by="word">
                Monday – Saturday: 9 AM – 7 PM
              </TextAnimate>
              <TextAnimate as="p" animation="slideUp" by="word">
                Sunday: Closed
              </TextAnimate>
              <div className="mt-4 opacity-100 font-medium space-y-1">
                <TextAnimate as="p" animation="slideUp" by="word">
                  Contact 1: 9829377055
                </TextAnimate>
                <TextAnimate as="p" animation="slideUp" by="word">
                  Contact 2: 9261060009
                </TextAnimate>
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
