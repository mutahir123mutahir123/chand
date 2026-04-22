import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-20">
            <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-serif">Contact Us</h1>
          </header>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-serif mb-8 italic">We'd love to hear from you.</h2>
              <p className="text-muted leading-relaxed mb-12">
                Whether you have a question about our collections, need assistance with an order, or would like to discuss a bespoke design, our team is here to help.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-muted mb-1 font-sans">Email</h4>
                    <p className="font-serif text-lg">concierge@sudeniz.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-muted mb-1 font-sans">Phone</h4>
                    <p className="font-serif text-lg">+1 (234) 567-890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-accent text-white flex items-center justify-center mr-6 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-widest uppercase text-muted mb-1 font-sans">Showroom</h4>
                    <p className="font-serif text-lg leading-relaxed">
                      123 Jewelry Avenue, Suite 456<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/50 p-10 backdrop-blur-sm"
            >
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">Subject</label>
                  <select className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Order Assistance</option>
                    <option>Bespoke Design</option>
                    <option>Press Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-muted mb-2 block font-sans">Message</label>
                  <textarea 
                    className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors min-h-[150px] resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full mt-4">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
