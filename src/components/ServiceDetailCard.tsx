import { X, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type NeonColor = "blue" | "purple" | "orange" | "cyan" | "pink";

interface ServiceDetailCardProps {
  image: string;
  title: string;
  description: string;
  icon?: ReactNode;
  neonColor?: NeonColor;
  onClose?: () => void;
  onLearnMore?: () => void;
}

const neonThemes: Record<NeonColor, { glow: string; border: string; gradient: string; iconGlow: string }> = {
  blue: {
    glow: "shadow-[0_0_30px_-5px_rgba(62,198,255,0.3)]",
    border: "border-[rgba(62,198,255,0.2)]",
    gradient: "from-[rgba(62,198,255,0.15)] via-transparent to-transparent",
    iconGlow: "group-hover:text-[#3EC6FF] group-hover:drop-shadow-[0_0_8px_rgba(62,198,255,0.6)]",
  },
  purple: {
    glow: "shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]",
    border: "border-[rgba(139,92,246,0.2)]",
    gradient: "from-[rgba(139,92,246,0.15)] via-transparent to-transparent",
    iconGlow: "group-hover:text-[#8B5CF6] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]",
  },
  orange: {
    glow: "shadow-[0_0_30px_-5px_rgba(255,122,24,0.3)]",
    border: "border-[rgba(255,122,24,0.2)]",
    gradient: "from-[rgba(255,122,24,0.15)] via-transparent to-transparent",
    iconGlow: "group-hover:text-[#FF7A18] group-hover:drop-shadow-[0_0_8px_rgba(255,122,24,0.6)]",
  },
  cyan: {
    glow: "shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
    border: "border-[rgba(6,182,212,0.2)]",
    gradient: "from-[rgba(6,182,212,0.15)] via-transparent to-transparent",
    iconGlow: "group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]",
  },
  pink: {
    glow: "shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
    border: "border-[rgba(236,72,153,0.2)]",
    gradient: "from-[rgba(236,72,153,0.15)] via-transparent to-transparent",
    iconGlow: "group-hover:text-[#EC4899] group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]",
  },
};

const hoverGlows: Record<NeonColor, string> = {
  blue: "hover:shadow-[0_0_50px_-5px_rgba(62,198,255,0.5),0_0_80px_-10px_rgba(62,198,255,0.2)]",
  purple: "hover:shadow-[0_0_50px_-5px_rgba(139,92,246,0.5),0_0_80px_-10px_rgba(139,92,246,0.2)]",
  orange: "hover:shadow-[0_0_50px_-5px_rgba(255,122,24,0.5),0_0_80px_-10px_rgba(255,122,24,0.2)]",
  cyan: "hover:shadow-[0_0_50px_-5px_rgba(6,182,212,0.5),0_0_80px_-10px_rgba(6,182,212,0.2)]",
  pink: "hover:shadow-[0_0_50px_-5px_rgba(236,72,153,0.5),0_0_80px_-10px_rgba(236,72,153,0.2)]",
};

const ServiceDetailCard = ({
  image,
  title,
  description,
  icon,
  neonColor = "blue",
  onClose,
  onLearnMore,
}: ServiceDetailCardProps) => {
  const theme = neonThemes[neonColor];

  return (
    <div
      className={`group relative w-full max-w-4xl h-[70vh] rounded-3xl overflow-hidden border ${theme.border} ${theme.glow} ${hoverGlows[neonColor]} bg-gradient-to-b from-[hsl(220,30%,16%)] to-[hsl(220,30%,8%)] hover:scale-[1.01] transition-all duration-300 ease-out`}
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none z-10" />

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t ${theme.gradient} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.25)_100%)] pointer-events-none z-10" />

      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
      />

      <div className="relative z-20 h-full flex flex-col p-8 md:p-10">
        <div className="flex items-start justify-between mb-auto">
          {icon && (
            <div className={`text-white/70 transition-all duration-300 ${theme.iconGlow}`}>
              {icon}
            </div>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="mt-auto">
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 p-5 md:p-6 shadow-[0_10px_40px_-20px_rgba(255,255,255,0.25)]">
            <h3 className="font-heading font-bold text-xl text-white tracking-tight">{title}</h3>
            <p className="text-white/80 text-sm leading-relaxed mt-2">{description}</p>

            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 pt-3 group/cta"
            >
              Learn more
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailCard;
