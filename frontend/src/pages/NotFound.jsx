import { useSEO } from "@/hooks/useSEO";
import { PrimaryButton } from "@/components/common";

export default function NotFound() {
  useSEO({ title: "Page Not Found", path: "/404", noindex: true });
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy text-white grain">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative text-center px-5">
        <p className="font-mono text-8xl font-bold text-royal-light lg:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-extrabold lg:text-4xl">This page has gone off-mission</h1>
        <p className="mt-4 text-white/60">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-8 flex justify-center"><PrimaryButton to="/">Return home</PrimaryButton></div>
      </div>
    </section>
  );
}
