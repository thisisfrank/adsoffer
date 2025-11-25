function ProprietaryDevelopment() {
  return (
    <section className="py-12 md:py-24 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-slate-700/50">
          <div className="relative aspect-[16/10] md:aspect-[21/10]">
            <img
              src="/vidar-nordli-mathisen-bwvae_p45Rs-unsplash.jpg"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <img
              src="/Cursor.png"
              alt="Development Environment"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/60 via-transparent to-[#0a0f1a]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_40%,rgba(10,15,26,0.4)_70%,rgba(10,15,26,0.8)_100%)]" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4">
                <h2
                  className="text-3xl md:text-5xl lg:text-6xl text-white italic mb-4"
                  style={{ fontFamily: "'Libre Baskerville', serif", textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)' }}
                >
                  High-Converting Creative
                </h2>
                <p className="text-lg md:text-2xl text-slate-200" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
                  Polished. Fast. Built to convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProprietaryDevelopment;
