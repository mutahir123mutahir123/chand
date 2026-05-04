import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { WordReveal, FadeUp, FadeIn, Stagger, StaggerItem } from '../components/TextReveal';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <div className="max-w-5xl mx-auto">

          {/* ── Page header ──────────────────────────────────────── */}
          <header className="text-center mb-20">
            <FadeUp delay={0.05}>
              <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
                Get in Touch
              </span>
            </FadeUp>
            <h1 className="text-5xl md:text-6xl font-serif text-accent">
              <WordReveal text="Contact Us" delay={0.15} />
            </h1>
            <FadeUp delay={0.4}>
              <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
            </FadeUp>
          </header>

          <div className="grid md:grid-cols-2 gap-20">

            {/* ── Contact info ─────────────────────────────────── */}
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-2xl font-serif mb-8 italic text-accent">
                  We'd love to hear from you.
                </h2>
                <p className="text-muted leading-relaxed mb-12 text-base md:text-lg">
                  Whether you have a question about our collections, need assistance with
                  an order, or would like to discuss a bespoke design, our team is here
                  to help.
                </p>

                <Stagger delay={0.1} stagger={0.15}>
                  {[
                    { icon: <Mail size={18} />,   label: 'Email',    value: 'moonjewlers@gmail.com' },
                    { icon: <Phone size={18} />,  label: 'Phone',    value: '+923194756008' },
                    { icon: <MapPin size={18} />, label: 'Shop', value: 'shop no 23,new shad bagh Lahore,new Salamat Center ' },
                  ].map((item) => (
                    <StaggerItem key={item.label}>
                      <div className="flex items-start mb-8">
                        <div className="w-10 h-10 bg-accent text-white flex items-center justify-center mr-6 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-[10px] tracking-widest uppercase text-muted mb-1 font-sans">
                            {item.label}
                          </h4>
                          <p className="font-serif text-lg text-accent whitespace-pre-line">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </FadeIn>

            {/* ── Contact form ─────────────────────────────────── */}
            <FadeIn direction="right" delay={0.3}>
              <div className="p-10 shadow-lg" style={{ backgroundColor: '#FEF0F0' }}>
                <form className="space-y-6">
                  {[
                    { label: 'Full Name',      type: 'text',  placeholder: 'Enter your name'  },
                    { label: 'Email Address',  type: 'email', placeholder: 'Enter your email' },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border-b border-accent/30 py-3 focus:outline-none focus:border-accent transition-colors font-sans text-sm"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">
                      Subject
                    </label>
                    <select className="w-full bg-transparent border-b border-accent/30 py-3 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer font-sans text-sm">
                      <option>General Inquiry</option>
                      <option>Order Assistance</option>
                      <option>Bespoke Design</option>
                      <option>Press Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">
                      Message
                    </label>
                    <textarea
                      placeholder="How can we help you?"
                      className="w-full bg-transparent border-b border-accent/30 py-3 focus:outline-none focus:border-accent transition-colors min-h-[150px] resize-none font-sans text-sm"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
