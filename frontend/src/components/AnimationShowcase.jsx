import React from "react";

const AnimationShowcase = () => {
  return (
    <div className="page__transition">
      {/* ========== Entry Animations ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Entry Animations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="card animate-fadeInUp list__item">
              <div className="bg-blue-100 h-24 rounded flex items-center justify-center">
                <span className="text-sm font-semibold">fadeInUp</span>
              </div>
            </div>
            
            <div className="card animate-fadeInDown list__item">
              <div className="bg-green-100 h-24 rounded flex items-center justify-center">
                <span className="text-sm font-semibold">fadeInDown</span>
              </div>
            </div>
            
            <div className="card animate-slideInLeft list__item">
              <div className="bg-purple-100 h-24 rounded flex items-center justify-center">
                <span className="text-sm font-semibold">slideInLeft</span>
              </div>
            </div>
            
            <div className="card animate-slideInRight list__item">
              <div className="bg-yellow-100 h-24 rounded flex items-center justify-center">
                <span className="text-sm font-semibold">slideInRight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Button Animations ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Button Animations</h2>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="btn">Primary Button</button>
            <button className="btn-outline">Outline Button</button>
            <button className="btn-sm">Small Button</button>
            <button className="btn-sm" disabled>Disabled Button</button>
          </div>
        </div>
      </section>

      {/* ========== Card Hover Effects ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Card Hover Effects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Basic Card */}
            <div className="card p-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-32 rounded mb-4"></div>
              <h3 className="heading-secondary">Card Effect</h3>
              <p className="text-small mt-2">Hover to see lift effect with shadow</p>
            </div>

            {/* Featured Card */}
            <div className="card-featured p-6">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-32 rounded mb-4"></div>
              <h3 className="heading-secondary">Featured Card</h3>
              <p className="text-small mt-2">More prominent hover with enhanced shadow</p>
            </div>

            {/* Doctor Card */}
            <div className="doctor__card p-4">
              <div className="bg-gradient-to-br from-green-400 to-green-600 h-32 rounded mb-4 overflow-hidden">
                <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'></svg>" alt="Doctor" className="w-full h-full object-cover" />
              </div>
              <h3 className="heading-secondary">Dr. Name</h3>
              <p className="text-small mt-2">Specialist - Image zooms on hover</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Service Cards ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Service Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="service__card p-6 text-center">
                <div className="service__icon w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ⚕️
                </div>
                <h3 className="heading-secondary">Service {item}</h3>
                <p className="text-small mt-2">Service description with hover bottom line animation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Continuous Animations ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Continuous Animations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Pulse */}
            <div className="card p-6 text-center">
              <div className="animate-pulse w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Pulse</h3>
              <p className="text-small mt-2">Loading state animation</p>
            </div>

            {/* Float */}
            <div className="card p-6 text-center">
              <div className="animate-float w-16 h-16 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Float</h3>
              <p className="text-small mt-2">Floating motion effect</p>
            </div>

            {/* Glow */}
            <div className="card p-6 text-center">
              <div className="animate-glow w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Glow</h3>
              <p className="text-small mt-2">Glowing box shadow effect</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Form Elements ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Form Elements</h2>
          
          <div className="max-w-md mt-8">
            <div className="mb-6">
              <label className="form__label">Email Address</label>
              <input type="email" className="form__input" placeholder="Enter your email" />
            </div>

            <div className="mb-6">
              <label className="form__label">Message</label>
              <textarea className="form__textarea" placeholder="Enter your message" rows="4"></textarea>
            </div>

            <button className="btn w-full">Send Message</button>
          </div>
        </div>
      </section>

      {/* ========== Badge Styles ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Badge Styles</h2>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-danger">Danger</span>
            <span className="badge badge-primary badge-pulse">Pulse Badge</span>
          </div>
        </div>
      </section>

      {/* ========== Gradient Backgrounds ========== */}
      <section className="mt-10">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Gradient Backgrounds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="gradient-primary p-8 rounded-lg text-white text-center">
              <h3 className="text-xl font-semibold">Primary Gradient</h3>
              <p className="mt-2">Blue to Teal</p>
            </div>

            <div className="gradient-secondary p-8 rounded-lg text-white text-center">
              <h3 className="text-xl font-semibold">Secondary Gradient</h3>
              <p className="mt-2">Yellow to Purple</p>
            </div>

            <div className="gradient-animate p-8 rounded-lg text-white text-center">
              <h3 className="text-xl font-semibold">Animated Gradient</h3>
              <p className="mt-2">Multi-color Shift</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Effect Classes ========== */}
      <section className="mt-10 mb-20">
        <div className="container">
          <h2 className="heading animate-fadeInUp">Effect Classes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="hover-lift card p-6 text-center">
              <h3 className="font-semibold">hover-lift</h3>
              <p className="text-small mt-2">Hover to see lift effect with shadow</p>
            </div>

            <div className="hover-scale card p-6 text-center">
              <h3 className="font-semibold">hover-scale</h3>
              <p className="text-small mt-2">Hover to see scale effect</p>
            </div>

            <div className="hover-glow card p-6 text-center">
              <h3 className="font-semibold">hover-glow</h3>
              <p className="text-small mt-2">Hover to see glow effect</p>
            </div>

            <div className="img-zoom card p-6 text-center overflow-hidden">
              <div className="bg-blue-200 h-24 rounded flex items-center justify-center overflow-hidden">
                <span>Image Zoom</span>
              </div>
              <p className="text-small mt-2">Hover to see zoom effect</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationShowcase;
