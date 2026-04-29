import config from "../business.config.json";

type Service = {
  icon?: string;
  title: string;
  description: string;
};

export default function Services() {
  const services = config.services as Service[];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: config.primaryColor }}
          >
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Professional {config.category.toLowerCase()} services delivered
            with care, every time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-gray-50 hover:bg-white rounded-3xl p-8 border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Faint number decoration */}
              <span className="absolute top-4 right-5 text-7xl font-black text-gray-100 select-none leading-none group-hover:text-gray-150 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: config.primaryColor + "18" }}
              >
                {service.icon || "✓"}
              </div>

              {/* Text */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="relative text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: config.primaryColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
