import config from "../business.config.json";

export default function Contact() {
  const days = Object.entries(config.hours);

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: config.primaryColor }}
          >
            Reach Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Contact & Hours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Contact card */}
          <div className="rounded-3xl p-8 border border-gray-100 bg-gray-50 space-y-6">
            <h3 className="font-bold text-gray-900 text-xl">Get In Touch</h3>

            {config.phone && (
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  📞
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-semibold">
                    Phone
                  </p>
                  <a
                    href={`tel:${config.phone}`}
                    className="font-bold text-gray-900 text-lg hover:opacity-70 transition-opacity"
                  >
                    {config.phone}
                  </a>
                </div>
              </div>
            )}

            {config.address && (
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-semibold">
                    Address
                  </p>
                  <p className="text-gray-700 font-medium leading-snug">
                    {config.address}
                  </p>
                </div>
              </div>
            )}

          </div>

          {/* Hours card */}
          <div className="rounded-3xl p-8 border border-gray-100 bg-gray-50">
            <h3 className="font-bold text-gray-900 text-xl mb-6">
              Business Hours
            </h3>
            <div className="space-y-3">
              {days.map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between items-center text-sm pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <span className="text-gray-500 font-medium w-32">{day}</span>
                  <span
                    className={`font-bold ${
                      hours === "Closed" ? "text-red-400" : "text-gray-900"
                    }`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href={`tel:${config.phone}`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-xl hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-lg"
            style={{ backgroundColor: config.primaryColor }}
          >
            <span>📞</span> Call Us Today
          </a>
          <p className="text-gray-400 text-sm mt-4">Free estimates — no obligation</p>
        </div>
      </div>
    </section>
  );
}
