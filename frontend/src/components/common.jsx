import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

export function Icon({ name, ...props }) {
  const C = Icons[name] || Icons.Circle;
  return <C {...props} />;
}

export function Reveal({ children, delay = 0, y = 26, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Overline({ children, light = false, className = "" }) {
  return (
    <span className={`overline inline-flex items-center gap-2 ${light ? "text-royal-light" : "text-royal"} ${className}`}>
      <span className={`h-px w-6 ${light ? "bg-royal-light/60" : "bg-royal/50"}`} />
      {children}
    </span>
  );
}

export function Counter({ value, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf; const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function PrimaryButton({ to, href, children, className = "", ...props }) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white transition-[background-color,transform,box-shadow] duration-300 hover:bg-navy hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(15,98,254,0.35)] ${className}`;
  const inner = <>{children}<Icons.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></>;
  if (to) return <Link to={to} className={cls} {...props}>{inner}</Link>;
  return <a href={href} className={cls} {...props}>{inner}</a>;
}

export function GhostButton({ to, href, children, light = false, className = "", ...props }) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 ${light ? "border-white/25 text-white hover:bg-white hover:text-navy" : "border-navy/15 text-navy hover:bg-navy hover:text-white"} ${className}`;
  const inner = <>{children}<Icons.ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>;
  if (to) return <Link to={to} className={cls} {...props}>{inner}</Link>;
  return <a href={href} className={cls} {...props}>{inner}</a>;
}

export function SectionHeading({ overline, title, sub, light = false, center = false, className = "" }) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {overline && <Reveal><Overline light={light}>{overline}</Overline></Reveal>}
      <Reveal delay={0.05}>
        <h2 className={`mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] ${light ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
      </Reveal>
      {sub && <Reveal delay={0.1}><p className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? "text-white/70" : "text-slate-600"}`}>{sub}</p></Reveal>}
    </div>
  );
}
