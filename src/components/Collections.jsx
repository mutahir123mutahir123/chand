import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    title: "RINGS",
    image: "/images/rings/ring4.jpeg",
    link: "/rings"
  },
  {
    title: "NECKLACES",
    image: "/images/necklace/123.jpg",
    link: "/necklaces"
  },
  {
    title: "EARRINGS",
    image: "/images/earings/Follow me for more!.jpeg",
    link: "/earrings"
  }
];

const Collections = () => {
  return (
    <section className="py-32 bg-[#F0EEE6]">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block">
            The Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">Explore Collections</h2>
        </div>
        
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, index) => (
            <Link to={item.link} key={item.title}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden aspect-[4/5] block bg-primary"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1573408302185-9127b5438e3e?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl tracking-[0.3em] font-serif border-b border-white pb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.title}
                  </h3>
                </div>
                
                {/* Permanent Label for Mobile */}
                <div className="absolute bottom-6 left-0 right-0 text-center lg:hidden">
                  <h3 className="text-white text-sm tracking-[0.3em] font-serif uppercase bg-black/20 py-2">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
