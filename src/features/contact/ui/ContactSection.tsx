"use client";

import { Section } from "@/shared/ui/Section";
import { Button } from "@/shared/ui/Button";
import { Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    setStatus('sending');

    const phoneNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

    const text = `Halo nama saya ${formData.name.trim()}

  ${formData.message.trim()}`;

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setStatus('sent');

    setFormData({
      name: "",
      message: "",
    });

    setTimeout(() => setStatus('idle'), 3000);
  };
  
  return (
    <Section id="contact">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Feel free to reach
          out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <a
                href="mailto:hello@example.com"
                className="text-gray-400 hover:text-[var(--primary)] transition-colors"
                >
                adehabib23@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Location</h3>
              <p className="text-gray-400">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
              <PhoneCall size={24} />
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone / Whatsapp</h3>
              <p className="text-gray-400">(+62) 8956-1526-2063</p>
            </div>
          </div>
          <div className="pt-4">
            <Button href="https://drive.google.com/uc?export=download&id=1QicRUfNiNysYeQfGUkRPfu7VBpcXmPsA" download variant="primary">
              Download Resume
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-black/40 border border-[var(--border)] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors"
              placeholder="Your name"
              />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-gray-400 mb-2"
              >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-black/40 border border-[var(--border)] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            {status === "sending" ? (
              "Sending..."
            ) : status === "sent" ? (
              "Message Sent!"
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </Button>
        </form>
      </div>
    </Section>
  );
}
