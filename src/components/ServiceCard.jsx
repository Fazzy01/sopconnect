import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { serviceImages } from "../data/images";

export default function ServiceCard({ service, delay = 0 }) {
  const Icon = service.icon;
  return (
    <Reveal delay={delay} className="group">
      <Link
        to={`/services#${service.id}`}
        className="flex h-full flex-col overflow-hidden border border-line bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-2xl hover:shadow-primary/20"
      >
        <div className="relative h-36 overflow-hidden">
          <img
            src={serviceImages[service.id]}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent" />
          <span className="absolute bottom-3 left-4 font-display text-3xl text-secondary-light">
            {service.letter}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <Icon size={22} className="text-primary/50 transition-colors duration-300 group-hover:text-secondary-dark" />
          <h3 className="mt-4 font-display text-xl font-medium text-primary">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{service.strap}</p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-secondary-dark">
            Learn more
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
