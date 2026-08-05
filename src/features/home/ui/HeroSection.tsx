import { Button } from '@/shared/ui/Button';
import { Section } from '@/shared/ui/Section';
import { Download, ArrowDown } from 'lucide-react';
import DarkVeil from '@/app/components/backgrounds/Darkveil';

export function HeroSection() {
  return (
    <Section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background WebGL */}
      <div className="absolute inset-0 -z-10">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.02}
          scanlineIntensity={0.03}
          speed={1.8}
        />
      </div>

      {/* Overlay agar teks lebih terbaca */}
      <div className="absolute inset-0 -z-10 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full text-center md:text-left">
        <p className="text-[var(--primary)] font-medium mb-4 tracking-wide">
          Hello, I'm a
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Ade Habib Dirja
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 mx-auto md:mx-0 leading-relaxed">
          I'm a Full-Stack Developer passionate about building modern,
          scalable, and high-performance web applications. Based in Jakarta,
          Indonesia, I specialize in JavaScript technologies such as React and
          Next.js, while also developing backend solutions with Spring Boot and
          Golang.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button
            href="https://drive.google.com/uc?export=download&id=1QicRUfNiNysYeQfGUkRPfu7VBpcXmPsA"
            download
            variant="primary"
          >
            <Download size={18} />
            Download Resume
          </Button>

          <Button href="#projects" variant="outline">
            View Projects
            <ArrowDown size={18} />
          </Button>
        </div>
      </div>
    </Section>
  );
}