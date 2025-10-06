function App() {
  return (
    <div className="h-screen overflow-y-auto snap-container smooth-scroll">
      {/* Animated Gradient Background with Curtain Effect */}
      <div className="fixed inset-0 bg-[#2d1b1b] -z-10">
        <div className="absolute inset-0 animated-curtain opacity-90"></div>
        <div className="absolute inset-0 grain-overlay"></div>
      </div>

      {/* Section 1: Profile */}
      <section className="h-screen snap-section flex items-center justify-center p-6 transition-opacity duration-1000">
        <div className="relative z-10 w-full max-w-4xl">
          <div className="profile-card backdrop-blur-xl p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-[#d4a574]/30 to-[#8B4545]/20 border border-[#d4a574]/30 shadow-xl">
                  <div className="w-full h-full rounded-2xl bg-[#d4a574]/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-[#d4a574]/40 text-6xl font-serif">P</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 text-[#d4a574]">
                <h1 className="font-playfair text-4xl md:text-5xl font-light mb-2 tracking-wide">
                  John Doe
                </h1>
                <p className="text-sm md:text-base text-[#4B0082] font-playfair mb-6 tracking-wide">
                  Developer & Explorer
                </p>
                <p className="font-playfair text-base md:text-lg leading-relaxed font-light tracking-wide opacity-90">
                  Developer with a passion for the cosmos and classical compositions. I find beauty in cinematography, dream of sailing distant waters, and constantly seek new perspectives through literature, podcasts, and meaningful conversations. Life is an endless journey of learning and discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Card */}
      <section className="h-screen snap-section flex items-center justify-center p-6 transition-opacity duration-1000">
        <div className="relative z-10 w-full max-w-2xl">
          <div className="feature-card backdrop-blur-xl p-10 rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105">
            <div className="text-center">
              <div className="mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br from-[#d4a574]/20 to-[#8B4545]/10 border border-[#d4a574]/30">
                <div className="w-16 h-16 flex items-center justify-center">
                  <div className="text-[#d4a574] text-5xl font-serif">✦</div>
                </div>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-light mb-4 tracking-wide text-[#d4a574]">
                Featured Work
              </h2>
              <p className="font-playfair text-lg leading-relaxed font-light tracking-wide text-[#d4a574]/80">
                Explore projects that blend creativity with technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
