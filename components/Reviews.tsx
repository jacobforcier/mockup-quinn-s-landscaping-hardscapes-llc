import config from "../business.config.json";

export default function Reviews() {
  if (!config.reviews || config.reviews.length === 0) return null;

  return (
    <section
      id="reviews"
      className="py-24 px-6"
      style={{ backgroundColor: config.primaryColor + "0c" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: config.primaryColor }}
          >
            Happy Customers
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            What People Say
          </h2>
          {config.rating && (
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-2xl ${
                      i < Math.round(config.rating as number)
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600 font-bold text-lg">
                {config.rating} / 5 on Google
              </span>
            </div>
          )}
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col"
            >
              {/* Giant quote mark */}
              <span className="absolute top-3 right-5 text-8xl font-serif leading-none text-gray-100 select-none pointer-events-none">
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-1 relative text-sm">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: config.primaryColor }}
                >
                  {review.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">
                    {review.author}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">{review.time}</p>
                </div>
                <span className="ml-auto text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
