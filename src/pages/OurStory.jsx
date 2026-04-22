import React from 'react';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-primary pt-32 pb-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] font-sans text-muted uppercase mb-4 block text-center">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-center mb-12 leading-tight">
            The Art of <br /><span className="italic">Fine Jewelry</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <img 
                src="/philosphy.jpeg" 
                alt="Our Craftsmanship" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573408302185-9127b5438e3e?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </div>
            <div className="space-y-6">
              <p className="text-muted text-sm md:text-base leading-relaxed">
                SU DENIZ was founded with a singular vision: to create jewelry that tells a story. Each piece in our collection is a testament to the artistry and dedication of our master craftsmen, who have spent decades honing their skills in the ancient traditions of jewelry making.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                Our journey began in a small studio, where passion met precision. Today, we continue to uphold the same values that guided us from the start – quality, authenticity, and the belief that every individual deserves jewelry that reflects their unique journey.
              </p>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                We source only the finest materials, from ethically mined gemstones to recycled precious metals. Every piece is designed to be more than an accessory – it's a memory, a milestone, a piece of art that can be worn and cherished for generations.
              </p>
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-accent/20 flex items-center justify-center">
                  <span className="font-serif text-2xl">✦</span>
                </div>
                <h3 className="font-serif text-xl mb-2">Craftsmanship</h3>
                <p className="text-muted text-sm">Every piece is meticulously handcrafted by skilled artisans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-accent/20 flex items-center justify-center">
                  <span className="font-serif text-2xl">♥</span>
                </div>
                <h3 className="font-serif text-xl mb-2">Sustainability</h3>
                <p className="text-muted text-sm">We prioritize ethical sourcing and sustainable practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-accent/20 flex items-center justify-center">
                  <span className="font-serif text-2xl">∞</span>
                </div>
                <h3 className="font-serif text-xl mb-2">Timeless Design</h3>
                <p className="text-muted text-sm">Classic pieces designed to last beyond trends</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Visit Our Studio</h2>
            <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              We invite you to experience our collection in person. Visit our studio to explore our latest designs and speak with our knowledgeable staff about creating a piece that's uniquely yours.
            </p>
            <a href="/contact" className="btn-primary inline-block">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;