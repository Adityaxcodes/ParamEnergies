import { X } from "lucide-react";

interface ServiceDetailCardProps {
  image: string;
  title: string;
  description: string;
  onClose?: () => void;
}

const ServiceDetailCard = ({ image, title, description, onClose }: ServiceDetailCardProps) => {
  return (
    <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-elevated group">
      {/* Background Image */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />

      {/* Glossy Overlay */}
      <div className="relative z-10 min-h-[380px] flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
        {/* Optional Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white/25 backdrop-blur-md border border-white/40 shadow-lg shadow-black/30 flex items-center justify-center text-white hover:text-white hover:bg-white/35 transition-all"
          >
            <X size={18} />
          </button>
        )}

        {/* Glassmorphism Content Panel */}
        <div className="m-3 p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
          <h3 className="font-heading font-bold text-lg text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
