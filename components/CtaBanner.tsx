import config from "../business.config.json";

export default function CtaBanner() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: config.primaryColor }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Ready to get started?
        </h2>
        <p className="text-white/75 text-lg sm:text-xl mb-10 font-light">
          {config.description ||
            `Call ${config.name} today for a free estimate. Serving the Manchester, NH area.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${config.phone}`}
            className="px-10 py-4 rounded-full bg-white font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
            style={{ color: config.primaryColor }}
          >
            📞 Call {config.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
