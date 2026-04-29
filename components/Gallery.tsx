import Image from "next/image";
import config from "../business.config.json";

export default function Gallery() {
  const images = (config.galleryImages || []) as string[];
  if (images.length === 0) return null;

  const feature = images[0];
  const rest = images.slice(1);

  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: config.primaryColor }}
          >
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Recent Projects
          </h2>
        </div>

        {/* Feature image */}
        {feature && (
          <div className="relative w-full rounded-3xl overflow-hidden mb-3 md:mb-4" style={{ aspectRatio: "16/7" }}>
            <Image
              src={feature}
              alt={`${config.name} project`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="100vw"
              priority
            />
          </div>
        )}

        {/* Remaining photos — responsive grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {rest.map((img, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <Image
                  src={img}
                  alt={`${config.name} project ${i + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
