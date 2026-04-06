import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { TextAnimate } from "@/registry/magicui/text-animate";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
    if (!whatsappNumber) {
      toast({
        title: "WhatsApp number not configured",
        description: "Set VITE_WHATSAPP_NUMBER in your .env file to enable WhatsApp messaging.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const text = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");

      toast({
        title: "Message Sent!",
        description: "WhatsApp has been opened with your message. Please tap send to complete.",
      });
      setFormData({ name: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Message not sent",
        description: "We could not open WhatsApp right now. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Phone, title: "Phone", value: "9829377055" },
    { icon: Mail, title: "Email", value: "paramEnergies@gmail.com" },
    {
      icon: MapPin,
      title: "Address",
      value: "Krishna Market ,shop no. 9,Chandpura road, Rani Sati Rd, Rajasthan 332001",
    },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 gradient-blue opacity-95" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#3EC6FF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4B2EFF]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF7A18]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-foreground font-semibold text-sm uppercase tracking-widest border border-white/20 animate-fade-in-up-slow"
            style={{ animationDelay: "120ms" }}
          >
            Get In Touch
          </span>
          <TextAnimate
            as="h2"
            animation="slideUp"
            by="word"
            className="font-heading font-bold text-3xl md:text-4xl mt-5 text-primary-foreground"
            style={{ animationDelay: "260ms" }}
          >
            Contact Us
          </TextAnimate>
          <TextAnimate
            as="p"
            animation="slideUp"
            by="word"
            className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-sm"
            style={{ animationDelay: "420ms" }}
          >
            Have questions or need a quote? Reach out to us and our team will respond within 24 hours.
          </TextAnimate>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-5">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl gradient-fire flex items-center justify-center shrink-0 shadow-lg shadow-[#FF3B3B]/20 group-hover:shadow-[#FF3B3B]/40 transition-shadow duration-300">
                  <item.icon className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <TextAnimate
                    as="h4"
                    animation="slideUp"
                    by="word"
                    className="font-heading font-semibold text-primary-foreground text-sm"
                  >
                    {item.title}
                  </TextAnimate>
                  <TextAnimate
                    as="p"
                    animation="slideUp"
                    by="word"
                    className="text-primary-foreground/65 text-sm mt-1"
                  >
                    {item.value}
                  </TextAnimate>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="text-accent" size={20} />
                <TextAnimate
                  as="h4"
                  animation="slideUp"
                  by="word"
                  className="font-heading font-semibold text-primary-foreground text-sm"
                >
                  Quick Response
                </TextAnimate>
              </div>
              <TextAnimate
                as="p"
                animation="slideUp"
                by="word"
                className="text-primary-foreground/60 text-xs leading-relaxed"
              >
                We typically respond within 2 hours during business hours. For urgent queries, call us directly.
              </TextAnimate>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4 p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A18]/40 focus:border-white/40 backdrop-blur-sm transition-all duration-200"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              maxLength={15}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A18]/40 focus:border-white/40 backdrop-blur-sm transition-all duration-200"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A18]/40 focus:border-white/40 backdrop-blur-sm resize-none transition-all duration-200"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="gradient-fire text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm hover:brightness-110 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#FF3B3B]/25 hover:shadow-[#FF3B3B]/40 hover:-translate-y-0.5"
            >
              <Send size={16} />
              {isSubmitting ? "Opening..." : "Open WhatsApp"}
            </button>
            <TextAnimate
              as="p"
              animation="slideUp"
              by="word"
              className="text-primary-foreground/70 text-xs leading-relaxed"
            >
              Add your name, number and message as mentioned above. Click on open WhatsApp to send all your details to the business owner. The business owners will respond you within 2 working days.
            </TextAnimate>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
