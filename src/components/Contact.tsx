import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;
    if (!endpoint) {
      toast({
        title: "Email service not configured",
        description: "Set VITE_CONTACT_FORM_ENDPOINT in your .env file to receive Contact Us emails.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Message not sent",
        description: "We could not send your message right now. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Phone, title: "Phone", value: "+91 98XXX XXXXX" },
    { icon: Mail, title: "Email", value: "info@paramenergy.com" },
    { icon: MapPin, title: "Address", value: "Your City, India" },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 gradient-blue opacity-95" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#3EC6FF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4B2EFF]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF7A18]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-foreground font-semibold text-sm uppercase tracking-widest border border-white/20">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mt-5 text-primary-foreground">
            Contact Us
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-sm">
            Have questions or need a quote? Reach out to us and our team will respond within 24 hours.
          </p>
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
                  <h4 className="font-heading font-semibold text-primary-foreground text-sm">{item.title}</h4>
                  <p className="text-primary-foreground/65 text-sm mt-1">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="text-accent" size={20} />
                <h4 className="font-heading font-semibold text-primary-foreground text-sm">Quick Response</h4>
              </div>
              <p className="text-primary-foreground/60 text-xs leading-relaxed">
                We typically respond within 2 hours during business hours. For urgent queries, call us directly.
              </p>
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
              <input
                type="email"
                placeholder="Email Address"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
