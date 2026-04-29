import config from "../business.config.json";

export default function Hero() {
  const city = config.address.split(",").slice(1, 2).join("").trim();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${config.heroImage})` }}
      />
      {/* Layered dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-semibold mb-8 tracking-wide">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: config.primaryColor }}
          />
          {city}, NH
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          {config.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          {config.tagline}
        </p>

        {/* Star rating */}
        {config.rating && (
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < Math.round(config.rating as number)
                      ? "text-yellow-400"
                      : "text-white/20"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-white/90 font-semibold text-sm">
              {config.rating} on Google
            </span>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${config.phone}`}
            className="px-9 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-200"
            style={{ backgroundColor: config.primaryColor }}
          >
            📞 {config.phone}
          </a>
          <a
            href="#services"
            className="px-9 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold text-lg hover:bg-white/20 transition-colors duration-200"
          >
            See Our Services ↓
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2.5 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
